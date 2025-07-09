
import React, { useState } from 'react';
import { ShoppingBag, Heart, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'kits', label: 'Wellness Kits' },
    { id: 'products', label: 'Individual Products' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              MindMint
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-green-600 font-medium'
                    : 'text-gray-600 hover:text-green-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-green-600 transition-colors relative">
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-white rounded-full text-xs flex items-center justify-center">
                0
              </span>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 px-2 rounded-lg transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-green-600 font-medium bg-green-50'
                      : 'text-gray-600 hover:text-green-500 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
