import React from 'react';
import { Users, CreditCard, MessageCircle, Download, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">How It Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with Dr. Laury Masters in just 3 simple steps. 
            It's easier than ordering a bottle of aspirin, and just as affordable.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                    1
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">Sign Up & Subscribe</h2>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  Create your account and subscribe to our monthly consulting membership for just $19/month. 
                  That's less than the cost of a bottle of aspirin at most pharmacies!
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <h4 className="font-bold text-green-800 mb-2">✅ What You Get:</h4>
                  <ul className="text-green-700 space-y-1">
                    <li>• Unlimited consultations with Dr. Laury</li>
                    <li>• 24/7 availability - no appointments needed</li>
                    <li>• Cancel anytime - no contracts or commitments</li>
                    <li>• Secure, private messaging platform</li>
                  </ul>
                </div>
                <Link to="/register" className="btn-primary inline-flex items-center space-x-2">
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="text-center">
                    <CreditCard className="w-16 h-16 text-purple-700 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Simple Monthly Subscription</h3>
                    <div className="text-4xl font-bold text-purple-700 mb-2">$19</div>
                    <p className="text-gray-600">per month</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="text-center">
                    <Download className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Download Telegram</h3>
                    <p className="text-gray-600 mb-6">
                      If you don't already have it, download the free Telegram app for secure, private messaging.
                    </p>
                    <a 
                      href="https://telegram.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center space-x-2"
                    >
                      <span>Download Telegram</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                    2
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">Get Your Private Chat Link</h2>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  Once you've successfully registered and paid, you'll receive an email with a private 
                  Telegram chat link to Dr. Laury Masters. This ensures your conversations remain 
                  completely confidential and secure.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-bold text-blue-800 mb-2">🔒 Privacy & Security:</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• End-to-end encrypted messaging</li>
                    <li>• Your conversations are completely private</li>
                    <li>• No data sharing with third parties</li>
                    <li>• HIPAA-compliant security standards</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                    3
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">Start Your Health Journey</h2>
                </div>
                <p className="text-xl text-gray-600 mb-6">
                  From your phone or computer, you can now consult with Dr. Laury Masters whenever you want, 
                  as much as you need. No waiting rooms, no appointments, no rushed consultations.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Instant Access</h4>
                      <p className="text-gray-600">Get answers to your health questions 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Personalized Guidance</h4>
                      <p className="text-gray-600">Receive customized health protocols and advice</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Unlimited Consultations</h4>
                      <p className="text-gray-600">Ask as many questions as you need</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <MessageCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Chat with Dr. Laury</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-sm text-gray-700">"I've been having trouble sleeping lately. Any natural remedies you'd recommend?"</p>
                    </div>
                    <div className="bg-purple-100 rounded-lg p-3">
                      <p className="text-sm text-purple-800">"Absolutely! Let's start with your sleep hygiene and explore some natural solutions like magnesium glycinate and chamomile tea..."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What You Can Discuss Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              What You Can Discuss with Dr. Laury
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-bold text-purple-800 mb-3">Mental Health & Wellness</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Anxiety and stress management</li>
                  <li>• Natural mood support</li>
                  <li>• Sleep optimization</li>
                  <li>• Meditation guidance</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-green-800 mb-3">Nutrition & Diet</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Personalized meal planning</li>
                  <li>• Supplement recommendations</li>
                  <li>• Food sensitivity guidance</li>
                  <li>• Weight management</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3">Chronic Conditions</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Diabetes management</li>
                  <li>• Heart health optimization</li>
                  <li>• Autoimmune support</li>
                  <li>• Digestive health</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-bold text-orange-800 mb-3">Women's Health</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Hormonal balance</li>
                  <li>• Pregnancy support</li>
                  <li>• Menopause guidance</li>
                  <li>• Reproductive health</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-bold text-red-800 mb-3">Exercise & Movement</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Workout planning</li>
                  <li>• Recovery protocols</li>
                  <li>• Injury prevention</li>
                  <li>• Movement therapy</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-bold text-yellow-800 mb-3">Preventive Care</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Immune system support</li>
                  <li>• Detoxification guidance</li>
                  <li>• Anti-aging strategies</li>
                  <li>• Vitality optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-700 to-pink-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Control of Your Health?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands who have discovered the power of personalized, affordable naturopathic guidance. 
            Your journey to optimal health is just one click away.
          </p>
          <Link to="/register" className="bg-white text-purple-700 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
            <span>Start Your 30-Day Journey</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm mt-4 opacity-80">Cancel anytime • No contracts • Satisfaction guaranteed</p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;