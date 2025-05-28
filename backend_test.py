
import requests
import sys
import time
import uuid
import json
from datetime import datetime

class DrLauryAPITester:
    def __init__(self, base_url="https://d3a08305-b39c-47f2-b2a5-de7761700c2d.preview.emergentagent.com"):
        self.base_url = base_url
        self.token = None
        self.user_id = None
        self.tests_run = 0
        self.tests_passed = 0
        self.session_id = None

    def run_test(self, name, method, endpoint, expected_status, data=None, params=None):
        """Run a single API test"""
        url = f"{self.base_url}/api/{endpoint}"
        headers = {'Content-Type': 'application/json'}
        if self.token:
            headers['Authorization'] = f'Bearer {self.token}'

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, params=params)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    return success, response.json()
                except:
                    return success, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    print(f"Response: {response.json()}")
                except:
                    print(f"Response: {response.text}")
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root(self):
        """Test the root endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "",
            200
        )

    def test_register(self, email, password):
        """Test user registration"""
        success, response = self.run_test(
            "User Registration",
            "POST",
            "auth/register",
            200,
            data={"email": email, "password": password}
        )
        if success and 'access_token' in response:
            self.token = response['access_token']
            self.user_id = response['user']['id']
            return True
        return False

    def test_login(self, email, password):
        """Test user login"""
        success, response = self.run_test(
            "User Login",
            "POST",
            "auth/login",
            200,
            data={"email": email, "password": password}
        )
        if success and 'access_token' in response:
            self.token = response['access_token']
            self.user_id = response['user']['id']
            return True
        return False

    def test_get_me(self):
        """Test get current user info"""
        return self.run_test(
            "Get Current User",
            "GET",
            "auth/me",
            200
        )

    def test_create_checkout(self, origin_url="https://d3a08305-b39c-47f2-b2a5-de7761700c2d.preview.emergentagent.com"):
        """Test creating a checkout session"""
        success, response = self.run_test(
            "Create Checkout Session",
            "POST",
            "payments/create-checkout",
            200,
            data={
                "amount": 19.0,
                "currency": "usd",
                "product_name": "Dr. Laury Masters Subscription",
                "origin_url": origin_url
            }
        )
        if success and 'session_id' in response:
            self.session_id = response['session_id']
            print(f"Checkout URL: {response['url']}")
            return True
        return False

    def test_payment_status(self):
        """Test payment status endpoint"""
        if not self.session_id:
            print("❌ No session ID available to check payment status")
            return False
        
        return self.run_test(
            "Payment Status Check",
            "GET",
            f"payments/status/{self.session_id}",
            200
        )

    def test_chat_without_subscription(self):
        """Test chat endpoint without subscription (should fail)"""
        return self.run_test(
            "Chat Without Subscription",
            "POST",
            "chat",
            403,
            data={"message": "Hello Dr. Laury, how are you today?"}
        )

    def test_chat_history_without_subscription(self):
        """Test chat history endpoint without subscription (should fail)"""
        return self.run_test(
            "Chat History Without Subscription",
            "GET",
            "chat/history",
            403
        )

def main():
    # Setup
    tester = DrLauryAPITester()
    test_email = f"test_user_{uuid.uuid4().hex[:8]}@example.com"
    test_password = "TestPass123!"
    
    print(f"=== Dr. Laury Masters AI Naturopathic Doctor API Test ===")
    print(f"Test email: {test_email}")
    
    # Run tests
    tester.test_root()
    
    # Test registration
    if not tester.test_register(test_email, test_password):
        print("❌ Registration failed, trying login...")
        if not tester.test_login(test_email, test_password):
            print("❌ Login failed, stopping tests")
            return 1
    
    # Test user info
    tester.test_get_me()
    
    # Test chat without subscription (should fail with 403)
    tester.test_chat_without_subscription()
    tester.test_chat_history_without_subscription()
    
    # Test checkout creation
    tester.test_create_checkout()
    
    # Test payment status
    if tester.session_id:
        tester.test_payment_status()
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    print(f"Test email: {test_email}")
    print(f"Test password: {test_password}")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
