import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects: NextPage = () => {
  const [showProjects, setShowProjects] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'SmartGrid',
      description: 'This is a front-end project for an e-commerce, developed in Next.js. It includes components for displaying products and a shopping cart.',
      imageUrl: '/img/SmartGrid.jpeg',
      githubUrl: 'https://lista-de-compra-opal.vercel.app/',
    },
    {
      id: 2,
      title: 'Easy-Code-Roadmap',
      description: 'The aim is to provide an interactive and educational platform or roadmap for programming beginners and enthusiasts.',
      imageUrl: '/img/Easy-Code-Roadmap.png',
      githubUrl: 'https://easy-code-roadmap.vercel.app/',
    },
    {
      id: 3,
      title: 'GuiDeveloper',
      description: 'Bem-vindo ao repositório da minha página de desenvolvedor no GitHub! Este projeto é uma vitrine dos meus trabalhos e projetos. Aqui você pode explorar minhas habilidades e projetos em HTML, CSS, e JavaScript.',
      imageUrl: '/img/Guilhermefariah.png',
      githubUrl: 'https://guilhermefariah-github-io.vercel.app/',
    },
    {
      id: 4,
      title: 'FaceForm',
      description: 'Um projeto com um formulário desenvolvido usando Next.js, React e TypeScript, com ESLint para garantir código limpo e Tailwind CSS para estilização fácil. Essas ferramentas proporcionam uma experiência de desenvolvimento robusta e eficiente.',
      imageUrl: '/img/FaceForm.png',
      githubUrl: 'https://guilhermefariah-github-io.vercel.app/',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const elementPosition = document.getElementById('projects')?.offsetTop || 0;
    if (scrollPosition > elementPosition) {
      setShowProjects(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='Projects' className={`flex flex-col min-h-screen transition-opacity duration-300 ${showProjects ? 'opacity-100' : 'opacity-0'}`}>
      <main className="flex-grow">
        <h1 className="text-4xl p-8 text-center cursor-pointer font-serif text-gray-200">Projects</h1>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="px-2 sm:px-4 shadow-indigo-600 shadow-sm">
                <div className="relative group ">
                  <img src={project.imageUrl} alt={project.title} className="rounded-lg shadow-lg w-full" />
                  <div className="absolute inset-0 bg-black font-serif bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="bg-gray-200 opacity-90 p-4 rounded-lg shadow-lg text-center max-w-xs sm:max-w-sm md:max-w-md">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-serif">{project.title}</h2>
                      <p className="text-sm sm:text-base md:text-lg text-black">{project.description}</p>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <button className="mt-4 bg-black text-gray-200 px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300">
                          View on Deploy
                        </button>
                      </a>
                    </div>
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

export default Projects;
