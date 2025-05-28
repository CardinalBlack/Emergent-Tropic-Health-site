import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, MessageCircle, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">TH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Tropic Health</h3>
                <p className="text-sm text-gray-400">AI Naturopathic Medicine</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Revolutionizing healthcare with affordable 24/7 access to AI-powered naturopathic medicine. 
              Get expert guidance from Dr. Laury Masters, ND-AI, combining ancient wisdom with modern science.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/tropic_health" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:support@tropichealth.ai" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</Link></li>
              <li><Link to="/our-story" className="text-gray-300 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/disclaimer" className="text-gray-300 hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">support@tropic-health.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">24/7 AI Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Tropic Health. All rights reserved. Visit us at www.tropic-health.com
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">
                Medical Disclaimer
              </Link>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;