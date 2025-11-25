import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SearchIcon, ShoppingCartIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 transition-all duration-300">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        {/* Adidas Logo */}          
          <Link to="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-200">
            Adidas Shoe
          </Link>
        

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/shop" className="text-gray-50 hover:text-white transition-colors duration-200">
            Shop
          </Link>
          <Link to="/about" className="text-gray-50 hover:text-white transition-colors duration-200">
            About
          </Link>
          <Link to="/contact" className="text-gray-50 hover:text-white transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Search Bar and Cart */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search for shoes..."
              className="pr-10 bg-gray-800 text-gray-50 border-gray-700 rounded-md focus:ring-primary focus:border-primary shadow-none"
            />
            <SearchIcon className="absolute top-1/2 right-3 -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/cart" className="text-gray-50 hover:text-white transition-colors duration-200">
               <ShoppingCartIcon className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
