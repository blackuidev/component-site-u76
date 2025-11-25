import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 p-4 md:p-6 lg:p-8 shadow-md transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between">
        {/* Navigation */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hover:bg-primary/10">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-primary/10">
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white hover:text-primary transition-colors duration-200">
          Spotify
        </Link>

        {/* Profile */}
        <Button variant="ghost" className="rounded-full hover:bg-primary/10">
          <User className="h-5 w-5 mr-2" />
          Profile
        </Button>
      </div>
    </header>
  );
};

export default Header;
