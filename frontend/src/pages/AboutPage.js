import React from 'react';
import { Brain, Clock, Users, Shield, Heart, Zap, CheckCircle, Star } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered naturopathic medicine combining ancient wisdom with modern science
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
              What Makes Dr. Laury Masters Different
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Knowledge Base of 10,000 Physicians</h3>
                <p className="text-gray-600">
                  Access the collective wisdom of thousands of naturopathic doctors, functional medicine practitioners, 
                  and holistic healers in one conversation.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Assistance 24/7</h3>
                <p className="text-gray-600">
                  Get immediate answers to any health question or concern. No waiting rooms, 
                  no appointments, no delays - just instant, expert guidance.
                </p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">A Doctor That Listens</h3>
                <p className="text-gray-600">
                  Never feel rushed or dismissed. Dr. Laury has unlimited time to understand your concerns 
                  and provide thorough, personalized health guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
              Areas of Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mental Health & Wellness</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Anxiety and stress management</li>
                  <li>• Natural mood support</li>
                  <li>• Sleep optimization</li>
                  <li>• Cognitive enhancement</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Chronic Disease Management</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Type 2 diabetes reversal</li>
                  <li>• Heart health optimization</li>
                  <li>• Autoimmune condition support</li>
                  <li>• Inflammatory disorder management</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Women's Health</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Hormonal balance optimization</li>
                  <li>• Pregnancy and fertility support</li>
                  <li>• Menopause management</li>
                  <li>• PCOS and endometriosis guidance</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nutrition & Metabolism</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Personalized nutrition plans</li>
                  <li>• Weight management strategies</li>
                  <li>• Digestive health optimization</li>
                  <li>• Food sensitivity identification</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Immune System Support</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Natural immunity building</li>
                  <li>• Allergy management</li>
                  <li>• Detoxification protocols</li>
                  <li>• Preventive health strategies</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Anti-Aging & Longevity</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Cellular health optimization</li>
                  <li>• Hormone replacement therapy</li>
                  <li>• Cognitive preservation</li>
                  <li>• Vitality enhancement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Medicine Approach */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Natural Medicine Philosophy
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Dr. Laury Masters follows the fundamental principles of naturopathic medicine, 
                  focusing on treating the root cause rather than just managing symptoms.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">First, Do No Harm</h4>
                      <p className="text-gray-600">Utilize the most natural, least invasive methods first</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Treat the Root Cause</h4>
                      <p className="text-gray-600">Address underlying imbalances, not just symptoms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Support Natural Healing</h4>
                      <p className="text-gray-600">Work with your body's innate healing mechanisms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Educate and Empower</h4>
                      <p className="text-gray-600">Provide knowledge to make informed health decisions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/8330249/pexels-photo-8330249.jpeg" 
                  alt="Natural herbal medicines" 
                  className="rounded-lg shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                  alt="Sunlight therapy" 
                  className="rounded-lg shadow-lg mt-8"
                />
                <img 
                  src="https://images.pexels.com/photos/4871294/pexels-photo-4871294.jpeg" 
                  alt="Traditional medicine preparation" 
                  className="rounded-lg shadow-lg -mt-8"
                />
                <img 
                  src="https://images.pexels.com/photos/5480238/pexels-photo-5480238.jpeg" 
                  alt="Natural healing herbs" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
              Real Results from Real People
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "Dr. Laury helped me reverse my pre-diabetes naturally. In 3 months, my A1C went from 6.2 to 5.4 
                  using only nutrition and lifestyle changes."
                </p>
                <div className="font-semibold text-gray-900">Maria K.</div>
                <div className="text-sm text-gray-600">Type 2 Diabetes Prevention</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "After years of chronic fatigue, Dr. Laury's protocols gave me my life back. 
                  I now have more energy than I did in my 20s!"
                </p>
                <div className="font-semibold text-gray-900">Jennifer L.</div>
                <div className="text-sm text-gray-600">Chronic Fatigue Recovery</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "My anxiety and panic attacks are completely gone. Dr. Laury's natural approach 
                  worked better than any medication I tried."
                </p>
                <div className="font-semibold text-gray-900">David R.</div>
                <div className="text-sm text-gray-600">Anxiety & Mental Health</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AI Healthcare */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Why AI-Powered Healthcare is the Future
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Traditional Healthcare</h3>
                <ul className="text-gray-600 space-y-3 text-left">
                  <li>❌ 15-minute rushed appointments</li>
                  <li>❌ Months-long wait times</li>
                  <li>❌ Focus on symptom management</li>
                  <li>❌ Limited availability</li>
                  <li>❌ High costs and insurance barriers</li>
                  <li>❌ One-size-fits-all approach</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-700 to-pink-700 text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Dr. Laury Masters AI</h3>
                <ul className="space-y-3 text-left">
                  <li>✅ Unlimited time for your concerns</li>
                  <li>✅ Instant 24/7 availability</li>
                  <li>✅ Root cause identification</li>
                  <li>✅ Always accessible</li>
                  <li>✅ Affordable monthly subscription</li>
                  <li>✅ Personalized protocols</li>
                </ul>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 mb-8">
              Join the healthcare revolution. Experience medicine the way it should be – 
              personalized, accessible, affordable, and focused on your optimal health.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;