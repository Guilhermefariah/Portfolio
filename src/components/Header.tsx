import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-black text-gray-200 p-4">
            <div className="flex justify-between items-center">
                <a href="https://github.com/Guilhermefariah" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.58 0-.29-.01-1.05-.015-2.06-3.338.72-4.042-1.498-4.042-1.498-.546-1.386-1.333-1.756-1.333-1.756-1.088-.744.083-.728.083-.728 1.205.085 1.837 1.24 1.837 1.24 1.07 1.834 2.806 1.305 3.49.998.108-.77.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.307-.54-1.524.105-3.176 0 0 1.005-.322 3.3 1.23a11.553 11.553 0 013.016-.41c1.025.005 2.057.138 3.016.41 2.29-1.553 3.293-1.23 3.293-1.23.645 1.652.24 2.87.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.815 1.102.815 2.22 0 1.605-.015 2.896-.015 3.286 0 .32.215.69.825.57C20.565 21.79 24 17.29 24 12c0-6.63-5.37-12-12-12z" clipRule="evenodd" />
                    </svg>
                </a>
                <nav>
                    <ul className="flex space-x-4">
                        <li className='hover:text-gray-500'><a href="#about">Sobre</a></li>
                        <li className='hover:text-gray-500'><a href="#projects">Projetos</a></li>
                        <li className='hover:text-gray-500'><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;

