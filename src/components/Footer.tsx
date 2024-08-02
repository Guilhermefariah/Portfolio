import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="bg-gradient-to-r from-blue-200 via-green-200 to-blue-300 text-gray-900 p-4 text-2xl text-center w-full flex justify-center items-center space-x-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p>&copy {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      <>
        <a href="https://www.linkedin.com/in/-guilherme-faria/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-gray-900 hover:text-white transition duration-300" /></a>
        <a href="https://github.com/Guilhermefariah" target="_blank" rel="noopener noreferrer"><FaGithub className="text-gray-900 hover:text-white transition duration-300" /></a>
      </>
    </motion.footer>
  )
}

export default Footer
