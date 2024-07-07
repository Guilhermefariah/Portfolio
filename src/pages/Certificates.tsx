import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; 

interface Certificate {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const Certificates: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const certificates: Certificate[] = [

    {
      title: 'Google',
      description: 'Design UX',
      imageUrl: '/img/Google.jpg',
      link: 'https://drive.google.com/file/d/1DWv3Ql5tL3Ada6oLg-1mfz8iId-DgzbH/view',
    },
    {
      title: 'Cisco',
      description: 'JavaScript Essentials 1',
      imageUrl: '/img/JavaScript.jpg',
      link: 'https://www.freecodecamp.org/certification/GuilhermeFaria/front-end-development-libraries',
    },
    {
      title: 'freeCodeCamp',
      description: 'JavaScript Algorithms',
      imageUrl: '/img/JavaScript_Algorithms.jpg',
      link: 'https://www.freecodecamp.org/certification/GuilhermeFaria/javascript-algorithms-and-data-structures-v8',
    },
    {
      title: 'freeCodeCamp',
      description: 'Front-End',
      imageUrl: '/img/Front-End_Development.jpg',
      link: 'https://www.freecodecamp.org/certification/GuilhermeFaria/front-end-development-libraries',
    },
    {
      title: 'freeCodeCamp',
      description: 'Responsive Web Design',
      imageUrl: '/img/Responsive_Web_Design.jpg',
      link: 'https://www.freecodecamp.org/certification/GuilhermeFaria/responsive-web-design',
    },
    {
      title: 'HackerRank',
      description: 'JavaScript',
      imageUrl: '/img/JavaScript_HackerRank.jpg',
      link: 'https://www.hackerrank.com/certificates/13c6c9a139b0',
    },
    {
      title: 'Fundação Bradesco',
      description: 'JavaScript',
      imageUrl: '/img/Fundacao_Bradesco_JavaScript.jpg',
      link: 'https://drive.google.com/file/d/1B-vQvW7lb6xCgx9GLToaCXUkFRxCY7pv/view',
    },
    {
      title: 'Conexão Agile',
      description: 'Scrum',
      imageUrl: '/img/Conexão_Agile.jpg',
      link: 'https://drive.google.com/file/d/1fCsO2sHhH9cr7rtacZSjdS6vnTVFvz7x/view',
    },
    {
      title: 'HackerRank',
      description: 'Python',
      imageUrl: '/img/Python.jpg',
      link: 'https://www.hackerrank.com/certificates/71be6bf335af',
    },
    {
      title: 'Microsoft',
      description: 'MySQL architecture',
      imageUrl: '/img/Microsoft.jpg',
      link: 'https://drive.google.com/file/d/17AH5Lw2SOJim9EfrDuCX60isfo-_dyDy/view',
    },
    {
      title: 'Fundação Bradesco',
      description: 'Python',
      imageUrl: '/img/fundação_Bradesco_Python.jpg',
      link: 'https://drive.google.com/file/d/1J9iQQdv4DBmad4PGftpKJ7k5Mb7-k9Gh/view',
    },
    {
      title: 'Santander AWS',
      description: 'Preparatory AWS',
      imageUrl: '/img/Santander_AWS.jpg',
      link: 'https://www.dio.me/certificate/7WJUCP97/share',
    },
    {
      title: 'Python Analytics',
      description: 'Python Data Analytics.',
      imageUrl: '/img/Python_Analytics.jpg',
      link: 'https://www.dio.me/certificate/GMJKAYYB/share',
    },
  ];

  return (
    <div id="Certificates" className="flex flex-col items-center justify-center min-h-screen mt-12 rounded-lg bg-gray-900 hover:bg-opacity-70">
      <main className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl pt-24 pb-8 text-center font-serif text-gray-400 underline hover:animate-pulse">Certificates</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div 
              key={index}
              className={`p-8 ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50' : 'opacity-100'}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} 
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <div className="bg-black p-1 border-2 rounded-lg shadow-gray-900 shadow-lg overflow-hidden flex flex-col items-center">
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.3 }} 
                >
                  <Image src={certificate.imageUrl} alt={certificate.title} width={400} height={200} />
                </motion.div>
                <div className="p-4 flex flex-col items-center text-center">
                  <h2 className="text-xl font-semibold text-gray-200">{certificate.title}</h2>
                  <p className="mt-2 text-gray-200">{certificate.description}</p>
                  <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-2xl p-2 inline-block hover:animate-pulse">View Certificate</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Certificates;