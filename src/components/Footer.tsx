
import React from 'react';
import { Heart, Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">MindMint</h3>
            </div>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Making mental wellness accessible through playful, sensory-based wellness kits for teenagers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Wellness Kits</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Individual Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Mental Health Resources</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">support@mindmint.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">+1 (555) 123-MINT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 MindMint. All rights reserved. Made with 💚 for mental wellness.
          </p>
        </div>
      </div>
    </footer>
  );
};
