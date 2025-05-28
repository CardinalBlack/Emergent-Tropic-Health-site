from pydantic import BaseModel
import stripe
import os
from typing import Optional, Dict, Any

class CheckoutSessionRequest(BaseModel):
    amount: float
    currency: str
    product_name: str
    origin_url: str

class CheckoutSessionResponse(BaseModel):
    session_id: str
    url: str

class CheckoutStatusResponse(BaseModel):
    status: str
    customer_email: Optional[str] = None
    subscription_id: Optional[str] = None
    subscription_status: Optional[str] = None

class StripeCheckout:
    def __init__(self, api_key: str = None):
        self.api_key = api_key or os.environ.get("STRIPE_SECRET_KEY")
        stripe.api_key = self.api_key

    async def create_checkout_session(self, request: CheckoutSessionRequest) -> CheckoutSessionResponse:
        """Create a Stripe checkout session for subscription"""
        try:
            # Create a checkout session for a subscription
            session = stripe.checkout.Session.create(
                payment_method_types=["card"],
                line_items=[
                    {
                        "price_data": {
                            "currency": "usd",
                            "product_data": {
                                "name": "Dr. Laury Masters ND-AI Monthly Subscription",
                                "description": "Access to AI naturopathic doctor consultation",
                            },
                            "unit_amount": 1900,  # $19.00
                            "recurring": {
                                "interval": "month",
                            },
                        },
                        "quantity": 1,
                    }
                ],
                mode="subscription",
                success_url=f"{request.origin_url}/payment-success?session_id={{CHECKOUT_SESSION_ID}}",
                cancel_url=f"{request.origin_url}/payment-cancelled",
            )
            
            return CheckoutSessionResponse(
                session_id=session.id,
                url=session.url
            )
        except Exception as e:
            raise Exception(f"Error creating checkout session: {str(e)}")

    async def get_session_status(self, session_id: str) -> CheckoutStatusResponse:
        """Get the status of a checkout session"""
        try:
            session = stripe.checkout.Session.retrieve(
                session_id,
                expand=["subscription", "customer"]
            )
            
            response = CheckoutStatusResponse(
                status=session.status
            )
            
            if session.customer:
                customer = stripe.Customer.retrieve(session.customer)
                response.customer_email = customer.email
            
            if session.subscription:
                subscription = stripe.Subscription.retrieve(session.subscription)
                response.subscription_id = subscription.id
                response.subscription_status = subscription.status
            
            return response
        except Exception as e:
            raise Exception(f"Error retrieving session status: {str(e)}")
