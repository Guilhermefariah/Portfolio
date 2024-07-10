import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';

const Projects: NextPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Landing-page',
      description: 'This project is an interactive and animated landing page built with Next.js, TypeScript, React and Tailwind CSS. It includes various components and features to provide a pleasant experience to users.',
      imageUrl: '/img/Landing-page.jpeg',
      githubUrl: 'https://freela-comercio.vercel.app/',
    },
    {
      id: 2,
      title: 'SmartGrid',
      description: 'This is a front-end project for an e-commerce, developed in Next.js. It includes components for displaying products and a shopping cart.',
      imageUrl: '/img/SmartGrid.jpeg',
      githubUrl: 'https://lista-de-compra-opal.vercel.app/',
    },
    {
      id: 3,
      title: 'Easy-Code-Roadmap',
      description: 'The aim is to provide an interactive and educational platform or roadmap for programming beginners and enthusiasts.',
      imageUrl: '/img/Easy-Code-Roadmap.png',
      githubUrl: 'https://easy-code-roadmap.vercel.app/',
    },
    {
      id: 4,
      title: 'GuiDeveloper',
      description: 'Welcome to my developer page repository on GitHub! This project is a showcase of my work and projects. Here you can explore my skills and projects in HTML, CSS and JavaScript.',
      imageUrl: '/img/Guilhermefariah.png',
      githubUrl: 'https://guilhermefariah-github-io.vercel.app/',
    },
    {
      id: 5,
      title: 'FaceForm',
      description: 'A project with a form developed in Next.js, React and TypeScript, with ESLint to ensure clean code and Tailwind CSS for easy styling. These tools provide a robust and efficient development experience.',
      imageUrl: '/img/FaceForm.png',
      githubUrl: 'https://guilhermefariah-github-io.vercel.app/',
    },
    {
      id: 6,
      title: 'Shopping',
      description: 'This project is a simple shopping cart application developed using HTML, CSS, and JavaScript. The application allows users to add products to their cart, view the cart, and proceed to checkout.',
      imageUrl: '/img/ScreenShopping.jpeg',
      githubUrl: 'https://shopping-tan-nine.vercel.app/',
    },
  ];

  return (
    <div id="Projects" className="flex flex-col items-center justify-center min-h-screen py-12 rounded-lg bg-gray-900 hover:bg-opacity-70">
      <main className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl pt-28 pb-8 text-center underline hover:animate-pulse font-serif text-gray-400">Projects</h1>
        <div className="mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800 p-1 border-2 rounded-lg shadow-gray-200 shadow-md">
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
        <div className="text-center mt-8 font-bold text-xl font-serif text-gray-200">
          Total Projects: {projects.length}
        </div>
      </main>
    </div>
  );
};

export default Projects;
