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
      description: 'Este é um projeto de frontend para um e-commerce simples, desenvolvido em Next.js. Ele inclui componentes para exibir produtos e um carrinho de compras.',
      imageUrl: '/img/SmartGrid.jpeg',
      githubUrl: 'https://github.com/Guilhermefariah/SmartGrid',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      imageUrl: '/project2.jpg',
      githubUrl: 'https://github.com/username/project2',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of Project 3',
      imageUrl: '/project3.jpg',
      githubUrl: 'https://github.com/username/project3',
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
    <div id="projects" className={`flex flex-col min-h-screen transition-opacity duration-300 ${showProjects ? 'opacity-100' : 'opacity-0'}`}>
      <main className="flex-grow">
        <h1 className="text-4xl mb-4 text-center cursor-pointer text-gray-200">Projects</h1>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="px-2 sm:px-4">
                <div className="relative group">
                  <img src={project.imageUrl} alt={project.title} className="rounded-lg shadow-lg w-full" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="bg-gray-200 opacity-90 p-4 rounded-lg shadow-lg text-center max-w-xs sm:max-w-sm md:max-w-md">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">{project.title}</h2>
                      <p className="text-sm sm:text-base md:text-lg text-black">{project.description}</p>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <button className="mt-4 bg-black text-gray-200 px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300">
                          View on GitHub
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
