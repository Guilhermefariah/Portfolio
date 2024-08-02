import React from 'react'

interface MenuButtonProps {
    isOpen: boolean
    onClick: () => void
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onClick }) => (
    <button
        className="sm:hidden text-gray-900 hover:text-white transition duration-300"
        onClick={onClick}
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
)

export default MenuButton
