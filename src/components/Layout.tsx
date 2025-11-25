import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { motion } from 'framer-motion';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const gradientAnimation = {
    initial: {
      backgroundPosition: '0% 50%',
    },
    animate: {
      backgroundPosition: '100% 50%',
      transition: {
        duration: 5,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden"
      style={{
        backgroundSize: '200% 200%',
      }}
    >
      <motion.div
        variants={gradientAnimation}
        initial="initial"
        animate="animate"
        className="absolute inset-0 -z-10 bg-[linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)]"
      />
      <Header />
      <div className="flex">
        <Sidebar />
        <motion.main
          className="flex-1 p-8 md:p-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
};

export default Layout;
