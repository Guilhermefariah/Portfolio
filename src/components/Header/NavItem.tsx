import React from 'react'
import { Link } from 'react-scroll'
import { IconType } from 'react-icons'

interface NavItemProps {
    href: string
    icon: IconType
    label: string
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label }) => (
    <li className="font-serif">
        <Link to={href} smooth={true} duration={500} className="inline-block text-gray-900 hover:text-white transition duration-300 hover:underline hover:animate-pulse">
            <Icon className="inline-block h-6 w-6" /> {label}
        </Link>
    </li>
)

export default NavItem
