"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, PenLine } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <PenLine className="h-8 w-8 text-indigo-600 mr-2" />
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
            My-Draw
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 transition-colors">
            How It Works
          </a>
          <a href="#templates" className="text-gray-700 hover:text-indigo-600 transition-colors">
            Templates
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors">
            Pricing
          </a>
          <button
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
            onClick={() => {
              router.push("/create-room");
            }}
          >
            Try Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fadeIn">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-700 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#templates"
              className="text-gray-700 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Templates
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-indigo-600 transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <button
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-md w-full"
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/create-room");
              }}
            >
              Try Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;