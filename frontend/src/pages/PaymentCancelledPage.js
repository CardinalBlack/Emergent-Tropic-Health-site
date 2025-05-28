import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle, ArrowLeft, MessageCircle, Clock, Heart } from 'lucide-react';

const PaymentCancelledPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-12 h-12 text-red-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment Cancelled</h1>
            <p className="text-xl text-gray-600">
              No worries! Your payment was cancelled and no charges were made.
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happened?</h2>
            <p className="text-gray-600 mb-6">
              You cancelled the payment process before it was completed. This is completely normal - 
              many people like to think it over or check with family before starting a new health journey.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Why People Choose Dr. Laury:</h3>
              <ul className="text-blue-700 space-y-2">
                <li className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>24/7 availability - no waiting for appointments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>Truly personalized care that addresses root causes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Unlimited consultations for one low monthly fee</span>
                </li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Options:</h3>
            <div className="space-y-4">
              <Link 
                to="/register"
                className="block w-full btn-primary text-center py-4"
              >
                Try Again - Start Your Health Journey
              </Link>
              
              <Link 
                to="/how-it-works"
                className="block w-full btn-secondary text-center py-4"
              >
                Learn More About How It Works
              </Link>
              
              <Link 
                to="/"
                className="flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors py-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>

          {/* Still Have Questions */}
          <div className="bg-gradient-to-r from-purple-700 to-pink-700 rounded-2xl shadow-xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-purple-100 mb-6">
              We understand that starting a new healthcare approach is a big decision. 
              Feel free to explore our story and learn more about why we created Dr. Laury Masters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/our-story"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-6 rounded-full transition-colors"
              >
                Read Our Story
              </Link>
              <Link 
                to="/disclaimer"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-6 rounded-full transition-colors"
              >
                Medical Disclaimer
              </Link>
            </div>
          </div>

          {/* Alternative Payment Method */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">Alternative Access Method</h3>
            <p className="text-yellow-700 text-sm">
              If you hold 250,000+ Tropic tokens on the Solana blockchain, you can get free access 
              to Dr. Laury Masters by connecting your wallet. This feature will be available soon!
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PaymentCancelledPage;