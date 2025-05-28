import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, MessageCircle, Download, ArrowRight, Mail } from 'lucide-react';

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      checkPaymentStatus();
    }
  }, [sessionId]);

  const checkPaymentStatus = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/payments/status/${sessionId}`);
      const data = await response.json();
      setPaymentStatus(data);
    } catch (error) {
      console.error('Error checking payment status:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="text-center">
          <div className="spinner mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Your Health Journey!</h1>
            <p className="text-xl text-gray-600">
              Your subscription to Dr. Laury Masters is now active. You're ready to transform your health!
            </p>
          </div>

          {/* Payment Confirmation */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Confirmation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Subscription</h4>
                <p className="text-gray-900">Dr. Laury Masters Monthly Access</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Amount</h4>
                <p className="text-gray-900">
                  {paymentStatus?.amount_total 
                    ? `$${(paymentStatus.amount_total / 100).toFixed(2)}` 
                    : '$19.00'} / month
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Status</h4>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Active Subscription
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Access</h4>
                <p className="text-gray-900">24/7 Unlimited Consultations</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Next Steps to Access Dr. Laury</h2>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Check Your Email</h3>
                  <p className="text-gray-600 mb-4">
                    We've sent you a private Telegram chat link to access Dr. Laury Masters. 
                    Check your inbox (and spam folder) for the email from Tropic Health.
                  </p>
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Email typically arrives within 5 minutes</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Download Telegram (if needed)</h3>
                  <p className="text-gray-600 mb-4">
                    If you don't have Telegram yet, download the free app for secure, private messaging with Dr. Laury.
                  </p>
                  <a 
                    href="https://telegram.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-800 font-medium"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Telegram</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-lg">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Start Your Consultation</h3>
                  <p className="text-gray-600 mb-4">
                    Click the private chat link in your email to start chatting with Dr. Laury Masters. 
                    Ask anything about your health - she's available 24/7!
                  </p>
                  <div className="flex items-center space-x-2 text-green-600">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">Your conversations are completely private and secure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What You Can Ask */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Can Discuss with Dr. Laury</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Health Conditions</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Chronic fatigue and low energy</li>
                  <li>• Digestive issues and gut health</li>
                  <li>• Hormonal imbalances</li>
                  <li>• Sleep disorders</li>
                  <li>• Anxiety and stress management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Wellness Optimization</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Personalized nutrition plans</li>
                  <li>• Supplement recommendations</li>
                  <li>• Exercise and movement guidance</li>
                  <li>• Detoxification protocols</li>
                  <li>• Anti-aging strategies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl shadow-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-purple-100 mb-6">
              If you don't receive your email within 10 minutes or have any questions, 
              you can access your chat directly from our website.
            </p>
            <Link 
              to="/chat" 
              className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Access Your Chat Now</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;