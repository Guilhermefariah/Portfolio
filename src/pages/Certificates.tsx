import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface Certificate {
  title: string
  description: string
  category: string
  imageUrl: string
  link: string
}

const Certificates: React.FC = () => {
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

  return (
    <div id="Certificates" className="flex flex-col items-center justify-center min-h-screen mt-12 rounded-lg bg-gradient-to-r from-blue-200 via-green-200 to-blue-300 hover:bg-opacity-70">
      <main className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl pt-24 pb-8 text-center font-serif text-gray-200 underline hover:animate-pulse">Certificates</h1>
        <div className="flex justify-center flex-wrap mb-8 space-x-2 space-y-2">
          <button
            onClick={() => categorySelect(null)}
            className={`mx-2 px-4 py-2 rounded-lg text-gray-200 ${selectedCategory === null ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}
          >
            All
          </button>
          <button
            onClick={() => categorySelect('Design')}
            className={`mx-2 px-4 py-2 rounded-lg text-gray-200 ${selectedCategory === 'Design' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}
          >
            Design
          </button>
          <button
            onClick={() => categorySelect('JavaScript')}
            className={`mx-2 px-4 py-2 rounded-lg text-gray-200 ${selectedCategory === 'JavaScript' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}
          >
            JavaScript
          </button>
          <button
            onClick={() => categorySelect('Front-End')}
            className={`mx-2 px-4 py-2 rounded-lg text-gray-200 ${selectedCategory === 'Front-End' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}
          >
            Front-End
          </button>
          <button
            onClick={() => categorySelect('Python')}
            className={`mx-2 px-4 py-2 rounded-lg text-gray-200 ${selectedCategory === 'Python' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}
          >
            Python
          </button>
          <button
            onClick={() => categorySelect('Databases')}
            className={`mx-2 px-4 py-2 rounded-lg text-gray-200 ${selectedCategory === 'Databases' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}
          >
            Databases
          </button>
          <button
            onClick={() => categorySelect('Scrum')}
            className={`mx-2 px-4 py-2 rounded-lg text-gray-200 ${selectedCategory === 'Scrum' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}
          >
            Scrum
          </button>
          <button
            onClick={() => categorySelect('Cloud Computing')}
            className={`mx-2 px-4 py-2 rounded-lg text-gray-200 ${selectedCategory === 'Cloud Computing' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-blue-600'}`}
          >
            Cloud Computing
          </button>
        </div>
        <div className="flex flex-wrap justify-center">
          {certificates
            .filter(cert => selectedCategory === null || cert.category === selectedCategory)
            .map((certificate, index) => (
              <motion.div
                key={index}
                className={`p-8 ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50' : 'opacity-100'}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                onClick={() => openModal(certificate)}
              >
                <div className="bg-gray-800 p-1 border-2 rounded-lg shadow-gray-700 shadow-lg overflow-hidden flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <Image src={certificate.imageUrl} alt={certificate.title} width={200} height={100} />
                  </motion.div>
                  <div className="p-4 flex flex-col items-center text-center">
                    <h2 className="text-xl font-semibold text-gray-200">{certificate.title}</h2>
                    <p className="mt-2 text-gray-200">{certificate.description}</p>
                    <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl p-2 inline-block hover:animate-pulse">View Certificate</a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
        <AnimatePresence>
          {showModal && selectedCertificate && (
            <motion.div
              className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gray-900 rounded-lg p-8 max-w-md w-full"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
              >
                <Image src={selectedCertificate.imageUrl} alt={selectedCertificate.title} width={200} height={100} />
                <h2 className="text-2xl font-semibold text-gray-200 mt-4">{selectedCertificate.title}</h2>
                <p className="text-gray-200">{selectedCertificate.description}</p>
                <a href={selectedCertificate.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-lg mt-2 inline-block hover:animate-pulse">View Certificate</a>
                <button onClick={closeModal} className="grid text-gray-100 mt-4 place-items-end rounded-lg px-2 bg-red-600">Close</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="text-center m-8 font-bold text-xl font-serif text-gray-200">
          Total Certificates: {certificates.length}
        </div>
      </main>
    </div>
  )
}

export default Certificates
