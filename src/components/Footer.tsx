import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Adidas Shoes</h3>
            <p className="text-muted-foreground">Providing quality footwear since forever.</p>
            <p className="text-muted-foreground">Contact: support@adidasshoes.com</p>
            <p className="text-muted-foreground">123 Main Street, Anytown USA</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors duration-300 block"
                  whileHover={{ scale: 1.05 }}
                >
                  Privacy Policy
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/terms-of-service"
                  className="hover:text-primary transition-colors duration-300 block"
                  whileHover={{ scale: 1.05 }}
                >
                  Terms of Service
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/shipping-returns"
                  className="hover:text-primary transition-colors duration-300 block"
                  whileHover={{ scale: 1.05 }}
                >
                  Shipping & Returns
                </motion.a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <FaFacebook size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <FaYoutube size={24} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Adidas Shoes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
