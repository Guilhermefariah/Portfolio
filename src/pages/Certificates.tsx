import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Certificate {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

const Certificates: React.FC = () => {
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
            description: 'JavaSript',
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div id="Certificates" className="flex flex-col min-h-screen transition-opacity duration-300">
            <main className="flex-grow">
                <h1 className="text-4xl p-8 text-center cursor-pointer font-serif text-gray-200">Certificates</h1>
                <div className="max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                    <Slider {...settings}>
                        {certificates.map((certificate, index) => (
                            <div key={index} className="p-4">
                                <div className="bg-gray-800 rounded-lg border-l-indigo-600 shadow-indigo-600 shadow-sm overflow-hidden w-full h-full flex flex-col items-center">
                                    <img src={certificate.imageUrl} alt={certificate.title} className="w-full h-48 object-cover" />
                                    <div className="p-4 flex flex-col items-center text-center">
                                        <h2 className="text-xl font-semibold text-gray-200">{certificate.title}</h2>
                                        <p className="mt-2 text-gray-200">{certificate.description}</p>
                                        <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-2xl p-2 inline-block">View Certificate</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </main>
        </div>
    );
};

export default Certificates;
