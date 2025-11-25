import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-gray-900 to-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold"
        >
          {/* Replace with your logo component or image */}
          <Link to="/" className="hover:text-primary transition-colors duration-300">My Portfolio</Link>
        </motion.div>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <MotionLink to="/" label="Home" />
            </li>
            <li>
              <MotionLink to="/projects" label="Projects" />
            </li>
            <li>
              <MotionLink to="/about" label="About" />
            </li>
            <li>
              <MotionLink to="/contact" label="Contact" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

const MotionLink = ({ to, label }: { to: string; label: string }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link to={to} className="hover:text-primary transition-colors duration-300">
        {label}
      </Link>
    </motion.li>
  )
}

export default Header
