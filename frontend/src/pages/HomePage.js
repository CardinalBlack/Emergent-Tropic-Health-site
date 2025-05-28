import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Users, Clock, Brain, Shield, Zap, ArrowRight, Star } from 'lucide-react';
import { useAuth } from '../App';

const HomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleGetStarted = () => {
    if (user) {
      if (user.subscription_status === 'active') {
        navigate('/chat');
      } else {
        // Trigger subscription flow
        handleSubscribe();
      }
    } else {
      navigate('/register');
    }
  };

  const handleSubscribe = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/payments/create-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          origin_url: window.location.origin
        })
      });

      if (response.ok) {
        const data = await response.json();
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700">Dr. Laury Masters</span>
              <br />Your AI Naturopathic Doctor
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionary 24/7 access to an AI-powered naturopathic doctor who combines ancient healing wisdom 
              with modern science. Get personalized health guidance for just $19/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={handleGetStarted} className="btn-primary text-lg px-10 py-4">
                {user?.subscription_status === 'active' ? 'Start Chatting' : 'Get Started - $19/month'}
              </button>
              <Link to="/how-it-works" className="btn-secondary text-lg px-10 py-4">
                Learn How It Works
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="mt-16 relative">
            <div className="animate-float">
              <img 
                src="https://images.unsplash.com/photo-1659353886114-9aa119aef5aa" 
                alt="Dr. Laury Masters AI" 
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="w-16 h-16 bg-green-200 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-purple-200 rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Over Traditional Healthcare?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of personalized healthcare with unmatched advantages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Knowledge Base of 10,000 Physicians</h3>
              <p className="text-gray-600">
                Access the collective wisdom and experience of thousands of medical professionals, 
                all in one AI-powered consultation.
              </p>
            </div>

            <div className="card-hover bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instant Assistance 24/7</h3>
              <p className="text-gray-600">
                Get immediate answers to any health question, concern, or malady. 
                No waiting rooms, no appointments, no delays.
              </p>
            </div>

            <div className="card-hover bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">A Doctor That Listens</h3>
              <p className="text-gray-600">
                Never feel rushed or dismissed. Dr. Laury has unlimited time to understand 
                your concerns and provide thorough, personalized guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Medicine Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ancient Wisdom Meets Modern Science
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Dr. Laury Masters specializes in natural healing approaches that address root causes, 
                not just symptoms. Experience the power of holistic health solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Herbal Medicine & Nutrition</h4>
                    <p className="text-gray-600">Personalized protocols using nature's pharmacy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Chronic Disease Management</h4>
                    <p className="text-gray-600">Holistic approaches to diabetes, heart health, and more</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Mental Health & Wellness</h4>
                    <p className="text-gray-600">Natural solutions for anxiety, depression, and stress</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1545840716-c82e9eec6930" 
                alt="Natural herbs and spices" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/4871294/pexels-photo-4871294.jpeg" 
                alt="Mortar and pestle" 
                className="rounded-lg shadow-lg mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/5480238/pexels-photo-5480238.jpeg" 
                alt="Traditional herbs" 
                className="rounded-lg shadow-lg -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                alt="Sunlight therapy" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Affordable Healthcare for Everyone
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Get unlimited access to expert naturopathic guidance for less than the cost of a single doctor visit
          </p>

          <div className="max-w-md mx-auto">
            <div className="pricing-popular bg-white rounded-2xl shadow-2xl p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly Subscription</h3>
                <div className="text-5xl font-bold text-purple-700 mb-2">$19</div>
                <p className="text-gray-600">per month</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Unlimited consultations with Dr. Laury</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>24/7 availability</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Personalized health protocols</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Cancel anytime</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Private Telegram access</span>
                </li>
              </ul>

              <button onClick={handleGetStarted} className="w-full btn-primary text-lg py-4">
                {user?.subscription_status === 'active' ? 'Access Your Chat' : 'Start Your Journey'}
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Alternative payment: Hold 250,000+ Tropic tokens for free access
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real people who've transformed their health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Dr. Laury helped me understand my chronic fatigue in a way no traditional doctor ever did. 
                Her holistic approach changed my life."
              </p>
              <div className="font-semibold text-gray-900">Sarah M.</div>
              <div className="text-sm text-gray-600">Chronic Fatigue Recovery</div>
            </div>

            <div className="testimonial-card p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Finally, a doctor who listens! Dr. Laury's natural protocols helped me get off 5 medications 
                and feel better than I have in years."
              </p>
              <div className="font-semibold text-gray-900">Michael R.</div>
              <div className="text-sm text-gray-600">Heart Health Transformation</div>
            </div>

            <div className="testimonial-card p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "The 24/7 access is incredible. Whenever I have a health concern, Dr. Laury is there with 
                expert guidance that actually works."
              </p>
              <div className="font-semibold text-gray-900">Lisa K.</div>
              <div className="text-sm text-gray-600">Preventive Health</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-700 to-pink-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands who've discovered the power of AI-driven naturopathic medicine. 
            Start your journey to optimal health today.
          </p>
          <button onClick={handleGetStarted} className="bg-white text-purple-700 font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;