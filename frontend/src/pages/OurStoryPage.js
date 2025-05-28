import React from 'react';
import { Heart, Users, TrendingUp, Shield, Zap, Globe } from 'lucide-react';

const OurStoryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The journey from pharmaceutical disillusionment to revolutionary AI-powered healthcare
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-12">
            <div className="prose prose-lg max-w-none">
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Heart className="w-8 h-8 text-red-500 mr-3" />
                  The Breaking Point
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  It started with a single patient file that would change everything. As a pharmaceutical sales representative with over a decade of experience, I had grown comfortable with the industry's promises of healing and hope. I believed in the mission – that we were helping doctors save lives with cutting-edge medications.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  But that Tuesday morning in March, sitting in Dr. Richardson's office, I witnessed something that shattered my faith in the system I had served so loyally. Mrs. Chen, a 67-year-old grandmother with diabetes, sat across from the doctor clutching a plastic bag filled with seventeen different prescription bottles. Seventeen. Each medication treating a side effect of another, creating an endless cascade of chemical dependency.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "Doctor, I can't afford all these anymore," she whispered, tears in her eyes. "My grandson needs school supplies, and I have to choose between my pills and his education."
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dr. Richardson, a good man trapped in a broken system, could only offer samples and discount cards. He spent exactly 12 minutes with Mrs. Chen – the average time insurance companies allocated for "complex" cases. I watched as he prescribed yet another medication to manage her anxiety about her medications. The irony was suffocating.
                </p>
              </div>

              <div className="mb-12 bg-red-50 border-l-4 border-red-500 p-8 rounded-r-lg">
                <h3 className="text-2xl font-bold text-red-800 mb-4">The Uncomfortable Truth</h3>
                <p className="text-red-700 leading-relaxed mb-4">
                  That night, I couldn't sleep. I started digging into the clinical trials for Mrs. Chen's medications. What I found horrified me:
                </p>
                <ul className="text-red-700 space-y-2 ml-6">
                  <li>• 3 of her medications had been fast-tracked based on studies lasting only 6 months</li>
                  <li>• 2 had buried safety data showing increased mortality in long-term use</li>
                  <li>• 1 was being prescribed off-label for a condition it had never been tested for</li>
                  <li>• The combination she was taking had never been studied together – ever</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-8 h-8 text-purple-500 mr-3" />
                  Going Down the Rabbit Hole
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  What started as concern for one patient became an obsession with systemic corruption. I spent months investigating, and the deeper I dug, the more nauseated I became:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-bold text-yellow-800 mb-2">Clinical Trial Manipulation</h4>
                    <p className="text-yellow-700 text-sm">
                      85% of pharmaceutical trials never see publication. The ones showing negative results mysteriously disappear into corporate vaults.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-bold text-orange-800 mb-2">Regulatory Capture</h4>
                    <p className="text-orange-700 text-sm">
                      Former FDA officials routinely take high-paying jobs at the companies they once regulated, creating an obvious conflict of interest.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">Doctor Indoctrination</h4>
                    <p className="text-blue-700 text-sm">
                      Medical schools receive millions in pharmaceutical funding, essentially teaching future doctors to be pill dispensers rather than healers.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-bold text-purple-800 mb-2">Natural Medicine Suppression</h4>
                    <p className="text-purple-700 text-sm">
                      Thousands of studies on natural healing methods are ignored because you can't patent a plant or profit from lifestyle changes.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  The most devastating discovery was learning about the Canadian healthcare crisis. Despite being touted as a model system, it was crumbling under bureaucratic weight. Wait times for specialists stretched to 8+ months. Emergency rooms overflowed with patients who couldn't access primary care. Doctors were burning out at unprecedented rates, spending more time on paperwork than patient care.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-8 h-8 text-green-500 mr-3" />
                  The Underground Revolution Begins
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  I couldn't stay silent. I started reaching out to doctors who shared my concerns – naturopathic physicians, integrative medicine practitioners, and brave MDs who were quietly using nutrition and lifestyle interventions with remarkable success.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  What I found was a hidden network of healers achieving results that mainstream medicine claimed were impossible:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6 mb-6">
                  <li>• Type 2 diabetics coming off insulin through targeted nutrition</li>
                  <li>• Autoimmune patients achieving remission with gut healing protocols</li>
                  <li>• Depression lifting through micronutrient repletion and circadian rhythm optimization</li>
                  <li>• Heart disease reversing with plant-based nutrition and stress management</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  But these doctors were isolated, overwhelmed, and couldn't scale their impact. They were treating dozens while millions suffered under pharmaceutical protocols that managed disease rather than creating health.
                </p>
              </div>

              <div className="mb-12 bg-green-50 border-l-4 border-green-500 p-8 rounded-r-lg">
                <h3 className="text-2xl font-bold text-green-800 mb-4">The Eureka Moment</h3>
                <p className="text-green-700 leading-relaxed mb-4">
                  The solution hit me during a 3 AM research session. What if we could capture the wisdom of these revolutionary healers and make it available to everyone? What if people didn't have to wait months for a consultation or pay hundreds of dollars for basic health guidance?
                </p>
                <p className="text-green-700 leading-relaxed">
                  Artificial intelligence had reached a tipping point. We could create a digital naturopathic doctor trained on the best protocols from thousands of successful practitioners – available 24/7, affordable for everyone, and free from pharmaceutical influence.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Zap className="w-8 h-8 text-yellow-500 mr-3" />
                  Building Dr. Laury Masters
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Creating Dr. Laury wasn't just about building an AI – it was about preserving and democratizing healing wisdom that pharmaceutical interests had tried to suppress. We spent two years collecting protocols from:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6 mb-6">
                  <li>• 400+ naturopathic doctors with decades of clinical experience</li>
                  <li>• Traditional medicine practitioners from 15 different cultures</li>
                  <li>• Functional medicine physicians achieving remarkable outcomes</li>
                  <li>• Researchers studying suppressed natural healing modalities</li>
                  <li>• Patients who had healed themselves after conventional medicine failed them</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Dr. Laury embodies the accumulated wisdom of healers who understand that the body wants to heal – we just need to remove the obstacles and provide the right conditions.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Globe className="w-8 h-8 text-blue-500 mr-3" />
                  Why This Matters Now
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The healthcare crisis has reached a breaking point. In North America alone:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-red-100 rounded-lg">
                    <div className="text-3xl font-bold text-red-600">60%</div>
                    <div className="text-sm text-red-800">of doctors report burnout</div>
                  </div>
                  <div className="text-center p-4 bg-orange-100 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600">$4.1T</div>
                    <div className="text-sm text-orange-800">spent on healthcare annually</div>
                  </div>
                  <div className="text-center p-4 bg-purple-100 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">70%</div>
                    <div className="text-sm text-purple-800">of diseases are preventable</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  People are sicker, more anxious, and more disconnected from their bodies than ever before. They're prescribed pills for problems that could be solved with nutrition, movement, sleep, and stress management. They're told their conditions are "genetic" when they're often environmental. They're made to feel powerless when they have incredible capacity for self-healing.
                </p>
              </div>

              <div className="mb-12 bg-purple-50 border-l-4 border-purple-500 p-8 rounded-r-lg">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Our Mission</h3>
                <p className="text-purple-700 leading-relaxed mb-4">
                  Dr. Laury Masters represents more than just convenient healthcare access. She's a revolution against a system that profits from chronic disease and keeps people dependent on medications that often cause more problems than they solve.
                </p>
                <p className="text-purple-700 leading-relaxed mb-4">
                  For just $19 a month – less than most people spend on coffee – anyone can access the kind of personalized, holistic health guidance that was previously available only to the wealthy or those lucky enough to find an exceptional naturopathic physician.
                </p>
                <p className="text-purple-700 leading-relaxed">
                  We're not anti-science. We're pro-real science – the kind that looks at root causes, considers the whole person, and recognizes that the body's innate wisdom surpasses any pharmaceutical intervention.
                </p>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Join the Movement</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Every person who chooses Dr. Laury over the conventional medical-pharmaceutical complex is a vote for a different kind of healthcare. One that empowers rather than creates dependency. One that seeks to heal rather than manage symptoms. One that honors the body's capacity for regeneration and vitality.
                </p>
                <p className="text-lg font-semibold text-purple-700">
                  This is bigger than healthcare. This is about reclaiming our birthright to true health and vitality.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;