import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../App';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">TH</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Tropic Health</h1>
              <p className="text-sm text-gray-600">AI Naturopathic Medicine</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-purple-700 transition-colors"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <span>About Us</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isAboutDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                  <Link to="/disclaimer" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700">
                    Disclaimer
                  </Link>
                  <Link to="/our-story" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700">
                    Our Story
                  </Link>
                  <Link to="/how-it-works" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700">
                    How it Works
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/about" className="text-gray-700 hover:text-purple-700 transition-colors">
              Services
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                {user.subscription_status === 'active' && (
                  <Link to="/chat" className="btn-primary">
                    Chat with Dr. Laury
                  </Link>
                )}
                <span className="text-gray-700">Hello, {user.email}</span>
                <button onClick={handleLogout} className="text-purple-700 hover:text-purple-900">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-purple-700 hover:text-purple-900 font-medium">
                  Login
                </Link>
                <Link to="/register" className="btn-primary">
                  Get Started
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <div>
                <div className="font-medium text-gray-800 mb-2">About Us</div>
                <div className="pl-4 space-y-2">
                  <Link to="/disclaimer" className="block text-gray-700 hover:text-purple-700">
                    Disclaimer
                  </Link>
                  <Link to="/our-story" className="block text-gray-700 hover:text-purple-700">
                    Our Story
                  </Link>
                  <Link to="/how-it-works" className="block text-gray-700 hover:text-purple-700">
                    How it Works
                  </Link>
                </div>
              </div>
              
              <Link to="/about" className="text-gray-700 hover:text-purple-700">
                Services
              </Link>

              {user ? (
                <div className="space-y-4">
                  {user.subscription_status === 'active' && (
                    <Link to="/chat" className="block btn-primary text-center">
                      Chat with Dr. Laury
                    </Link>
                  )}
                  <div className="text-gray-700">Hello, {user.email}</div>
                  <button onClick={handleLogout} className="text-purple-700 hover:text-purple-900">
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Link to="/login" className="block text-purple-700 hover:text-purple-900 font-medium">
                    Login
                  </Link>
                  <Link to="/register" className="block btn-primary text-center">
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;