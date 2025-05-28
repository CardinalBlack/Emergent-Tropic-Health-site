import React from 'react';
import { AlertTriangle, Phone, ExternalLink } from 'lucide-react';

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Medical Disclaimer</h1>
            <p className="text-xl text-gray-600">Important Information About Dr. Laury Masters AI</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
              <h2 className="text-2xl font-bold text-red-800 mb-3">⚠️ EMERGENCY NOTICE</h2>
              <p className="text-red-700 font-semibold">
                If you are experiencing a medical emergency, DO NOT use this service. 
                Call 911 immediately or go to your nearest emergency room.
              </p>
            </div>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Dr. Laury Masters AI Is</h2>
              <p className="text-gray-700 mb-4">
                Dr. Laury Masters is an artificial intelligence system designed to provide educational information 
                about naturopathic medicine, holistic health approaches, and wellness guidance. This AI system 
                is powered by advanced language models and trained on extensive medical and naturopathic literature.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Dr. Laury Masters AI Is NOT</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>NOT a licensed medical doctor:</strong> Dr. Laury Masters AI is not a real person and does not hold any medical licenses or certifications.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>NOT providing medical diagnosis:</strong> Any responses provided are for educational purposes only and should not be considered medical diagnoses.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>NOT replacing professional medical care:</strong> This service does not replace the need for professional medical consultation, examination, or treatment.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>NOT prescribing medications:</strong> Dr. Laury Masters AI cannot and will not prescribe medications or controlled substances.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Important Limitations</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Educational Purpose Only:</strong> All information provided is for educational and informational purposes only.</li>
                  <li><strong>No Doctor-Patient Relationship:</strong> Use of this service does not create a doctor-patient relationship.</li>
                  <li><strong>No Medical Advice:</strong> Responses should not be considered as medical advice, diagnosis, or treatment recommendations.</li>
                  <li><strong>AI Limitations:</strong> As an AI system, responses may contain errors, outdated information, or may not be suitable for your specific situation.</li>
                  <li><strong>No Emergency Services:</strong> This service is not equipped to handle medical emergencies.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Seek Professional Medical Care</h2>
              <p className="text-gray-700 mb-4">You should consult with a licensed healthcare professional if you:</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Have any medical symptoms or health concerns</li>
                <li>• Are considering making changes to your current treatment plan</li>
                <li>• Want to start new supplements or naturopathic treatments</li>
                <li>• Have chronic health conditions requiring ongoing management</li>
                <li>• Need a medical diagnosis or prescription medication</li>
                <li>• Are pregnant, nursing, or planning to become pregnant</li>
                <li>• Are experiencing side effects from any treatments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Liability and Responsibility</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  <strong>Tropic Health and the creators of Dr. Laury Masters AI expressly disclaim any liability 
                  for actions taken based on information provided through this service.</strong>
                </p>
                <p className="text-gray-700 mb-4">
                  Users are solely responsible for their healthcare decisions and should always consult with 
                  qualified healthcare professionals before making any health-related changes.
                </p>
                <p className="text-gray-700">
                  By using this service, you acknowledge that you understand these limitations and agree to 
                  use the information provided at your own risk.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Medical Resources</h2>
              <p className="text-gray-700 mb-4">For professional medical care, we recommend:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Your primary care physician</li>
                <li>• Licensed naturopathic doctors (ND)</li>
                <li>• Board-certified specialists for specific conditions</li>
                <li>• Emergency medical services for urgent situations</li>
                <li>• Mental health professionals for psychological concerns</li>
              </ul>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-800">Emergency Contacts</h3>
              </div>
              <ul className="text-blue-700 space-y-2">
                <li><strong>Emergency Services:</strong> 911</li>
                <li><strong>Poison Control:</strong> 1-800-222-1222</li>
                <li><strong>National Suicide Prevention Lifeline:</strong> 988</li>
                <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
              </ul>
            </div>

            <div className="text-center mt-12 pt-8 border-t">
              <p className="text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                This disclaimer is subject to change. Please review periodically for updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;