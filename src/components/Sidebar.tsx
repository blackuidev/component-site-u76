import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutDashboard, BarChartBig, Settings, Users, AlertTriangle } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { id: 'analytics', label: 'Analytics', icon: BarChartBig, path: '/analytics' },
    { id: 'users', label: 'Users', icon: Users, path: '/users' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
    { id: 'notfound', label: 'Not Found', icon: AlertTriangle, path: '/not-found' },
  ];

  return (
    <aside className="bg-gray-900 text-gray-100 w-64 min-h-screen py-8 px-4 flex flex-col space-y-6">
      <div className="text-2xl font-semibold text-white">BlackUI</div>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`flex items-center space-x-3 py-2 px-4 rounded-md transition-colors duration-300 hover:bg-gray-800 ${
              location.pathname === item.path ? 'bg-gray-700 text-white' : 'text-gray-300'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="border-t border-gray-700 pt-4">
        <a href="#"
          className="flex items-center space-x-3 py-2 px-4 rounded-md transition-colors duration-300 hover:bg-gray-800 text-gray-300"
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
