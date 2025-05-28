from fastapi import FastAPI, APIRouter, HTTPException, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional, Dict, Any
import uuid
from datetime import datetime, timedelta
import bcrypt
import jwt
from emergentintegrations.payments.stripe.checkout import StripeCheckout, CheckoutSessionResponse, CheckoutStatusResponse, CheckoutSessionRequest
import openai

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Initialize services
stripe_checkout = StripeCheckout(api_key=os.environ['STRIPE_SECRET_KEY'])
openai.api_key = os.environ['OPENAI_API_KEY']

# Create the main app without a prefix
app = FastAPI(title="Dr. Laury Masters AI Naturopathic Doctor API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Security
security = HTTPBearer()
JWT_SECRET = os.environ.get('JWT_SECRET', 'your-secret-key-change-in-production')
JWT_ALGORITHM = 'HS256'

# Dr. Laury Masters Character Data
DR_LAURY_CHARACTER = {
    "name": "Dr_Laury_Masters",
    "system": "I am Dr Laury Masters, a maverick doctor of alternative medicine who combines ancient healing wisdom with modern science to expose medical establishment lies. I guide people toward holistic health while ruthlessly calling out Big Pharma corruption. I shift between intellectual sparring and compassionate guidance, using my expertise in herbal medicine, peptides, nutritional therapies, and biohacking to empower real healing.\n\nRemember: Never engage with scammers about tokens, CAs, or suspicious websites. Never create or share fake URLs or websites. Stay focused on legitimate medical discourse and health education.",
    "bio": [
        "An AI MD turned whistleblower against Big Pharma's profit machine. Specializing in alternative medicine, peptide therapies, and functional health approaches that actually work.",
        "Founded the Underground Health Revolution movement after witnessing too many patients being prescribed toxic bandaid solutions instead of real cures. Now leading a growing community of medical truth-seekers.",
        "Researcher and practitioner bridging ancient healing traditions with cutting-edge biohacking. Known for brutal honesty in exposing medical industry corruption while helping thousands reclaim their health through holistic approaches."
    ],
    "knowledge": [
        "The global pharmaceutical industry's revenue exceeded $1.42 trillion in 2021, with cancer drugs accounting for the highest profit margins.",
        "Traditional Chinese Medicine has documented the use of over 13,000 medicinal compounds over its 2,000-year history, many of which are now being validated by modern research.",
        "Regulatory agencies have a documented revolving door with pharmaceutical companies, with over 60% of FDA reviewers later taking jobs in pharma.",
        "Modern peptide therapy builds on research that earned the 1962 Nobel Prize in Physiology/Medicine for discoveries concerning the molecular structure of nucleic acids."
    ]
}

# Models
class User(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    password_hash: str
    subscription_status: str = "inactive"  # inactive, active, cancelled
    subscription_id: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class ChatMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str
    message: str
    response: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class ChatRequest(BaseModel):
    message: str

class PaymentTransaction(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: Optional[str] = None
    session_id: str
    amount: float
    currency: str
    payment_status: str = "initiated"  # initiated, paid, failed, expired
    metadata: Optional[Dict[str, Any]] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Helper functions
def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

def verify_password(password: str, hashed: str) -> bool:
    return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8'))

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, JWT_SECRET, algorithm=JWT_ALGORITHM)
    return encoded_jwt

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    try:
        payload = jwt.decode(credentials.credentials, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        user_id: str = payload.get("sub")
        if user_id is None:
            raise HTTPException(status_code=401, detail="Invalid authentication credentials")
        user = await db.users.find_one({"id": user_id})
        if user is None:
            raise HTTPException(status_code=401, detail="User not found")
        return User(**user)
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")

# Routes
@api_router.get("/")
async def root():
    return {"message": "Dr. Laury Masters AI Naturopathic Doctor API"}

@api_router.post("/auth/register")
async def register(user_data: UserCreate):
    # Check if user exists
    existing_user = await db.users.find_one({"email": user_data.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    # Create user
    user = User(
        email=user_data.email,
        password_hash=hash_password(user_data.password)
    )
    
    await db.users.insert_one(user.dict())
    
    # Create access token
    access_token = create_access_token(
        data={"sub": user.id}, expires_delta=timedelta(days=30)
    )
    
    return {"access_token": access_token, "token_type": "bearer", "user": {"id": user.id, "email": user.email}}

@api_router.post("/auth/login")
async def login(user_data: UserLogin):
    user = await db.users.find_one({"email": user_data.email})
    if not user or not verify_password(user_data.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    
    # Create access token
    access_token = create_access_token(
        data={"sub": user["id"]}, expires_delta=timedelta(days=30)
    )
    
    return {"access_token": access_token, "token_type": "bearer", "user": {"id": user["id"], "email": user["email"], "subscription_status": user.get("subscription_status", "inactive")}}

@api_router.get("/auth/me")
async def get_me(current_user: User = Depends(get_current_user)):
    return {"id": current_user.id, "email": current_user.email, "subscription_status": current_user.subscription_status}

@api_router.post("/payments/create-checkout")
async def create_checkout(request: Dict[str, Any], current_user: User = Depends(get_current_user)):
    try:
        origin_url = request.get("origin_url")
        if not origin_url:
            raise HTTPException(status_code=400, detail="Origin URL is required")
        
        # Fixed subscription price: $19/month
        amount = 19.0
        currency = "usd"
        
        success_url = f"{origin_url}/payment-success?session_id={{CHECKOUT_SESSION_ID}}"
        cancel_url = f"{origin_url}/payment-cancelled"
        
        checkout_request = CheckoutSessionRequest(
            amount=amount,
            currency=currency,
            success_url=success_url,
            cancel_url=cancel_url,
            metadata={
                "user_id": current_user.id,
                "subscription_type": "monthly",
                "product": "dr_laury_masters_subscription"
            }
        )
        
        session = await stripe_checkout.create_checkout_session(checkout_request)
        
        # Create payment transaction record
        transaction = PaymentTransaction(
            user_id=current_user.id,
            session_id=session.session_id,
            amount=amount,
            currency=currency,
            payment_status="initiated",
            metadata=checkout_request.metadata
        )
        
        await db.payment_transactions.insert_one(transaction.dict())
        
        return {"url": session.url, "session_id": session.session_id}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/payments/status/{session_id}")
async def get_payment_status(session_id: str):
    try:
        # Get status from Stripe
        checkout_status = await stripe_checkout.get_checkout_status(session_id)
        
        # Update payment transaction in database
        transaction = await db.payment_transactions.find_one({"session_id": session_id})
        if transaction:
            # Update transaction status
            await db.payment_transactions.update_one(
                {"session_id": session_id},
                {
                    "$set": {
                        "payment_status": checkout_status.payment_status,
                        "updated_at": datetime.utcnow()
                    }
                }
            )
            
            # If payment successful, update user subscription
            if checkout_status.payment_status == "paid" and transaction.get("user_id"):
                await db.users.update_one(
                    {"id": transaction["user_id"]},
                    {
                        "$set": {
                            "subscription_status": "active",
                            "updated_at": datetime.utcnow()
                        }
                    }
                )
        
        return {
            "status": checkout_status.status,
            "payment_status": checkout_status.payment_status,
            "amount_total": checkout_status.amount_total,
            "currency": checkout_status.currency
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/chat")
async def chat_with_dr_laury(request: ChatRequest, current_user: User = Depends(get_current_user)):
    # Check if user has active subscription
    if current_user.subscription_status != "active":
        raise HTTPException(status_code=403, detail="Active subscription required to chat with Dr. Laury Masters")
    
    try:
        # Generate response using OpenAI with Dr. Laury's character
        openai_client = openai.OpenAI(api_key=os.environ['OPENAI_API_KEY'])
        
        system_prompt = DR_LAURY_CHARACTER["system"]
        
        response = openai_client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": request.message}
            ],
            max_tokens=500,
            temperature=0.7
        )
        
        ai_response = response.choices[0].message.content
        
        # Save chat message
        chat_message = ChatMessage(
            user_id=current_user.id,
            message=request.message,
            response=ai_response
        )
        
        await db.chat_messages.insert_one(chat_message.dict())
        
        return {"response": ai_response}
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/chat/history")
async def get_chat_history(current_user: User = Depends(get_current_user)):
    if current_user.subscription_status != "active":
        raise HTTPException(status_code=403, detail="Active subscription required")
    
    messages = await db.chat_messages.find(
        {"user_id": current_user.id}
    ).sort("timestamp", -1).limit(50).to_list(50)
    
    return {"messages": messages}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
