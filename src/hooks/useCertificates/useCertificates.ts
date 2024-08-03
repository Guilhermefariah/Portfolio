import { useState } from 'react'

interface Certificate {
    title: string
    description: string
    category: string
    imageUrl: string
    link: string
}

export const useCertificates = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

    const certificates: Certificate[] = [
        {
            title: 'Google',
            description: 'Design UX',
            category: 'Design',
            imageUrl: '/img/Google.jpg',
            link: 'https://drive.google.com/file/d/1DWv3Ql5tL3Ada6oLg-1mfz8iId-DgzbH/view',
        },
        {
            title: 'Cisco',
            description: 'JavaScript Essentials 1',
            category: 'JavaScript',
            imageUrl: '/img/JavaScript.jpg',
            link: 'https://www.freecodecamp.org/certification/GuilhermeFaria/front-end-development-libraries',
        },
        {
            title: 'freeCodeCamp',
            description: 'JavaScript Algorithms',
            category: 'JavaScript',
            imageUrl: '/img/JavaScript_Algorithms.jpg',
            link: 'https://www.freecodecamp.org/certification/GuilhermeFaria/javascript-algorithms-and-data-structures-v8',
        },
        {
            title: 'freeCodeCamp',
            description: 'Front-End',
            category: 'Front-End',
            imageUrl: '/img/Front-End_Development.jpg',
            link: 'https://www.freecodecamp.org/certification/GuilhermeFaria/front-end-development-libraries',
        },
        {
            title: 'freeCodeCamp',
            description: 'Responsive Web Design',
            category: 'Front-End',
            imageUrl: '/img/Responsive_Web_Design.jpg',
            link: 'https://www.freecodecamp.org/certification/GuilhermeFaria/responsive-web-design',
        },
        {
            title: 'HackerRank',
            description: 'JavaScript',
            category: 'JavaScript',
            imageUrl: '/img/JavaScript_HackerRank.jpg',
            link: 'https://www.hackerrank.com/certificates/13c6c9a139b0',
        },
        {
            title: 'Fundação Bradesco',
            description: 'JavaScript',
            category: 'JavaScript',
            imageUrl: '/img/Fundacao_Bradesco_JavaScript.jpg',
            link: 'https://drive.google.com/file/d/1B-vQvW7lb6xCgx9GLToaCXUkFRxCY7pv/view',
        },
        {
            title: 'Conexão Agile',
            description: 'Scrum',
            category: 'Scrum',
            imageUrl: '/img/Conexão_Agile.jpg',
            link: 'https://drive.google.com/file/d/1fCsO2sHhH9cr7rtacZSjdS6vnTVFvz7x/view',
        },
        {
            title: 'HackerRank',
            description: 'Python',
            category: 'Python',
            imageUrl: '/img/Python.jpg',
            link: 'https://www.hackerrank.com/certificates/71be6bf335af',
        },
        {
            title: 'Microsoft',
            description: 'MySQL architecture',
            category: 'Databases',
            imageUrl: '/img/Microsoft.jpg',
            link: 'https://drive.google.com/file/d/17AH5Lw2SOJim9EfrDuCX60isfo-_dyDy/view',
        },
        {
            title: 'Fundação Bradesco',
            description: 'Python',
            category: 'Python',
            imageUrl: '/img/fundação_Bradesco_Python.jpg',
            link: 'https://drive.google.com/file/d/1J9iQQdv4DBmad4PGftpKJ7k5Mb7-k9Gh/view',
        },
        {
            title: 'Fundação Bradesco',
            description: 'Database',
            category: 'Databases',
            imageUrl: '/img/Fundacao_Bradesco_Database.jpg',
            link: 'https://drive.google.com/file/d/1EFL2Q9WGWKFd2pYKwlly4ms6OztlzyJo/view',
        },
        {
            title: 'Santander AWS',
            description: 'Preparatory AWS',
            category: 'Cloud Computing',
            imageUrl: '/img/Santander_AWS.jpg',
            link: 'https://www.dio.me/certificate/7WJUCP97/share',
        },
        {
            title: 'Python Analytics',
            description: 'Python Data Analytics.',
            category: 'Python',
            imageUrl: '/img/Python_Analytics.jpg',
            link: 'https://www.dio.me/certificate/GMJKAYYB/share',
        },
    ]

    const categorySelect = (category: string | null) => {
        setSelectedCategory(category)
        setHoveredIndex(null)
    }

    const openModal = (certificate: Certificate) => {
        setSelectedCertificate(certificate)
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
        setSelectedCertificate(null)
    }

    return {
        certificates,
        selectedCategory,
        categorySelect,
        openModal,
        closeModal,
        hoveredIndex,
        setHoveredIndex,
        showModal,
        selectedCertificate
    }
}
