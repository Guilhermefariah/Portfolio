import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiInfo, FiAward, FiBox, FiMail } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import NavItem from './NavItem'
import MenuButton from './MenuButton'

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(prev => !prev)

    return (
        <header className="fixed z-50 bg-gradient-to-r from-blue-200 via-green-200 to-blue-300 text-gray-900 p-4 text-2xl w-full">
            <motion.div
                className="flex justify-between items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <a href="https://github.com/Guilhermefariah" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-10 w-10 text-gray-900 hover:text-white transition duration-300" />
                </a>
                <nav className="hidden sm:flex items-center space-x-4">
                    <NavItem href="About" icon={FiInfo} label="About" />
                    <NavItem href="Projects" icon={FiBox} label="Projects" />
                    <NavItem href="Certificates" icon={FiAward} label="Certificates" />
                    <NavItem href="Contact" icon={FiMail} label="Contact" />
                </nav>
                <MenuButton isOpen={isOpen} onClick={toggleMenu} />
            </motion.div>
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="sm:hidden"
                    >
                        <ul className="flex flex-col space-y-2">
                            <NavItem href="About" icon={FiInfo} label="About" />
                            <NavItem href="Projects" icon={FiBox} label="Projects" />
                            <NavItem href="Certificates" icon={FiAward} label="Certificates" />
                            <NavItem href="Contact" icon={FiMail} label="Contact" />
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header
