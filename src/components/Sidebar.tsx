import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Library, Plus, Heart, Menu } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-16'
      } h-screen bg-gray-900 text-white transition-width duration-300 overflow-hidden`}
    >
      <div className="p-4 flex items-center justify-between">
        <button onClick={toggleSidebar} className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
        <span className="text-2xl font-bold">Spotify</span>
      </div>

      <nav className="p-4">
        <ul>
          <li className="mb-2">
            <Link
              to="/"
              className="flex items-center space-x-3 hover:text-green-500 transition-colors duration-200"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/search"
              className="flex items-center space-x-3 hover:text-green-500 transition-colors duration-200"
            >
              <Search className="h-5 w-5" />
              <span>Search</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/library"
              className="flex items-center space-x-3 hover:text-green-500 transition-colors duration-200"
            >
              <Library className="h-5 w-5" />
              <span>Your Library</span>
            </Link>
          </li>
        </ul>

        <hr className="my-4 border-gray-700" />

        <ul>
          <li className="mb-2">
            <Link
              to="/create-playlist"
              className="flex items-center space-x-3 hover:text-green-500 transition-colors duration-200"
            >
              <Plus className="h-5 w-5" />
              <span>Create Playlist</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/liked-songs"
              className="flex items-center space-x-3 hover:text-green-500 transition-colors duration-200"
            >
              <Heart className="h-5 w-5" />
              <span>Liked Songs</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
