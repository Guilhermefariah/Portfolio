import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="bg-black opacity-70 text-gray-200 p-4 text-2xl text-center w-full flex justify-center items-center space-x-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      <>
        <a href="https://www.linkedin.com/in/-guilherme-faria/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-gray-200 hover:text-indigo-600 transition duration-300" /></a>
        <a href="https://github.com/Guilhermefariah" target="_blank" rel="noopener noreferrer"><FaGithub className="text-gray-200 hover:text-indigo-600 transition duration-300" /></a>
      </>
    </motion.footer>
  );
};

export default Footer;
