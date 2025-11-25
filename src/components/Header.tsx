import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold hover:text-gray-300 transition-colors duration-200">
          BlackUI
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300 transition-colors duration-200">Home</Link>
          <Link to="/components" className="hover:text-gray-300 transition-colors duration-200">Components</Link>
          <Link to="/docs" className="hover:text-gray-300 transition-colors duration-200">Docs</Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors duration-200">About</Link>
        </nav>

        {/* Actions */}
        <div className="space-x-4">
          <Button variant="outline" className="bg-transparent hover:bg-gray-700 text-white border-gray-500 hover:border-gray-300 transition-colors duration-200">
            Login
          </Button>
          <Button className="bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-200">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu (Example - needs actual implementation) */}
        <div className="md:hidden">
          <button className="text-white hover:text-gray-300 focus:outline-none">
            {/* Hamburger Icon - Replace with lucide-react icon if desired */}
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
