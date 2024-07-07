import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';

const Projects: NextPage = () => {
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

  return (
    <div id="Projects" className="flex flex-col items-center justify-center min-h-screen py-12 rounded-lg bg-gray-900 hover:bg-opacity-70">
      <main className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl pt-28 pb-8 text-center underline hover:animate-pulse font-serif text-gray-400">Projects</h1>
        <div className="mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-black p-1 border-2 rounded-lg shadow-gray-900 shadow-lg">
                <div className="relative group">
                  <Image src={project.imageUrl} alt={project.title} width={400} height={300} className="rounded-lg" />
                  <div className="absolute inset-0 bg-black font-serif bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="bg-gray-200 opacity-90 p-2 rounded-lg shadow-lg text-center max-w-xs sm:max-w-sm md:max-w-md">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-serif">{project.title}</h2>
                      <p className="text-sm sm:text-base md:text-lg text-black">{project.description}</p>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <button className="mt-4 bg-black text-gray-200 px-4 py-2 rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-300">
                          View on Deploy
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
