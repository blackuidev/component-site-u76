import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Book, User, Settings, LayoutDashboard } from 'lucide-react';

const Sidebar = () => {
  const sidebarVariants = {
    open: {
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    closed: {
      x: "-100%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.aside
      className="fixed top-0 left-0 h-full w-64 bg-gray-900 bg-gradient-to-br from-gray-900 to-black text-white p-4 md:block z-50"
      variants={sidebarVariants}
      initial="closed"
      animate="open"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center">My Portfolio</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <motion.li
              variants={itemVariants}
              whileHover="hover"
              className="p-2 rounded-md hover:text-primary transition-colors duration-300 flex items-center gap-2"
            >
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Home
              </Link>
            </motion.li>
          </li>
          <li>
            <motion.li
              variants={itemVariants}
              whileHover="hover"
              className="p-2 rounded-md hover:text-primary transition-colors duration-300 flex items-center gap-2"
            >
              <Link to="/about" className="flex items-center gap-2">
                <User className="h-5 w-5" />
                About
              </Link>
            </motion.li>
          </li>
          <li>
            <motion.li
              variants={itemVariants}
              whileHover="hover"
              className="p-2 rounded-md hover:text-primary transition-colors duration-300 flex items-center gap-2"
            >
              <Link to="/projects" className="flex items-center gap-2">
                <LayoutDashboard className="h-5 w-5" />
                Projects
              </Link>
            </motion.li>
          </li>
          <li>
            <motion.li
              variants={itemVariants}
              whileHover="hover"
              className="p-2 rounded-md hover:text-primary transition-colors duration-300 flex items-center gap-2"
            >
              <Link to="/blog" className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Blog
              </Link>
            </motion.li>
          </li>
          <li>
            <motion.li
              variants={itemVariants}
              whileHover="hover"
              className="p-2 rounded-md hover:text-primary transition-colors duration-300 flex items-center gap-2"
            >
              <Link to="/settings" className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </motion.li>
          </li>
        </ul>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
