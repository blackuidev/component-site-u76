import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] grid-rows-[60px_1fr_80px] h-screen">
        {/* Header */}
        <header className="bg-gray-800 p-4 flex items-center justify-between col-span-full">
          <h1 className="text-xl font-bold">Spotify-ish</h1>
          {/* Add header content here (e.g., user profile, search) */}
        </header>

        {/* Sidebar */}
        <aside className="bg-gray-800 p-4">
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors duration-200 block">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors duration-200 block">Search</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors duration-200 block">Your Library</a>
              </li>
            </ul>
          </nav>
          {/* Add sidebar content here (e.g., playlists, library) */}
        </aside>

        {/* Main Content */}
        <main className="p-4 overflow-y-auto">
          {children}
        </main>

        {/* Player */}
        <footer className="bg-gray-800 p-4 flex items-center justify-between col-span-full">
          <p>Now Playing: ...</p>
          {/* Add player controls here (e.g., play, pause, skip) */}
        </footer>
      </div>
    </div>
  );
};

export default Layout;
