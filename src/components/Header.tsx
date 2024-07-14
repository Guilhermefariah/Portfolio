import React, { useState } from 'react';
import { FiInfo, FiAward, FiBox, FiMail } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed z-50 bg-opacity-70 bg-gradient-to-r from-blue-800 via-gray-800 to-gray-900 text-gray-200 p-4 text-2xl w-full">
            <motion.div
                className="flex justify-between items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <a href="https://github.com/Guilhermefariah" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-10 w-10 text-gray-200" />
                </a>
                <nav className="hidden sm:flex items-center space-x-4">
                    <NavItem href="#About"><FiInfo className="inline-block h-6 w-6" /> About</NavItem>
                    <NavItem href="#Projects"><FiBox className="inline-block h-6 w-6" /> Projects</NavItem>
                    <NavItem href="#Certificates"><FiAward className="inline-block h-6 w-6" /> Certificates</NavItem>
                    <NavItem href="#Contact"><FiMail className="inline-block h-6 w-6" /> Contact</NavItem>
                </nav>
                <button
                    className="sm:hidden text-gray-200 hover:text-gray-500 focus:text-gray-200"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
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
                            <NavItem href="#About"><FiInfo className="inline-block h-6 w-6" /> About</NavItem>
                            <NavItem href="#Projects"><FiBox className="inline-block h-6 w-6" /> Projects</NavItem>
                            <NavItem href="#Certificates"><FiAward className="inline-block h-6 w-6" /> Certificates</NavItem>
                            <NavItem href="#Contact"><FiMail className="inline-block h-6 w-6" /> Contact</NavItem>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

interface NavItemProps {
    href: string;
    children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
    <li className="font-serif">
        <a href={href} className="inline-block text-gray-200 hover:text-gray-500 hover:underline hover:animate-pulse">
            {children}
        </a>
    </li>
);

export default Header;
