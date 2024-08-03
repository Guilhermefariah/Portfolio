import React from 'react'
import { NextPage } from 'next'
import ProjectCard from '@/components/ProjectCard/ProjectCard'

const Projects: NextPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Sneakers Eccomerce',
      description: 'Welcome to Sneaker Store! This is a simple project for an online sneaker store, implemented with JavaScript. The application features a list of products and a shopping cart.',
      imageUrl: '/img/sneakers-eccomerce.jpeg',
      githubUrl: 'https://sneakers-eccomerce.vercel.app/',
    },
    {
      id: 2,
      title: 'Zero Accident',
      description: 'The Project is a panel to report problems in the city related to the lack of sidewalks and speed bumps. It aims to increase the safety of pedestrians and drivers, allowing citizens to report dangerous and unsafe locations.',
      imageUrl: '/img/Zero_Accident.jpeg',
      githubUrl: 'https://acidente-zero.vercel.app/',
    },
    {
      id: 3,
      title: 'Landing-page',
      description: 'This project is an interactive and animated landing page built with Next.js, TypeScript, React and Tailwind CSS. It includes various components and features to provide a pleasant experience to users.',
      imageUrl: '/img/Landing-page.jpeg',
      githubUrl: 'https://freela-comercio.vercel.app/',
    },
    {
      id: 4,
      title: 'SmartGrid',
      description: 'This is a front-end project for an e-commerce, developed in Next.js. It includes components for displaying products and a shopping cart.',
      imageUrl: '/img/SmartGrid.jpeg',
      githubUrl: 'https://lista-de-compra-opal.vercel.app/',
    },
    {
      id: 5,
      title: 'Easy-Code-Roadmap',
      description: 'The aim is to provide an interactive and educational platform or roadmap for programming beginners and enthusiasts.',
      imageUrl: '/img/Easy-Code-Roadmap.png',
      githubUrl: 'https://easy-code-roadmap.vercel.app/',
    },
    {
      id: 6,
      title: 'GuiDeveloper',
      description: 'Welcome to my developer page repository on GitHub! This project is a showcase of my work and projects. Here you can explore my skills and projects in HTML, CSS and JavaScript.',
      imageUrl: '/img/Guilhermefariah.png',
      githubUrl: 'https://guilhermefariah-github-io.vercel.app/',
    },
    {
      id: 7,
      title: 'FaceForm',
      description: 'A project with a form developed in Next.js, React and TypeScript, with ESLint to ensure clean code and Tailwind CSS for easy styling. These tools provide a robust and efficient development experience.',
      imageUrl: '/img/FaceForm.png',
      githubUrl: 'https://guilhermefariah-github-io.vercel.app/',
    },
    {
      id: 8,
      title: 'Shopping',
      description: 'This project is a simple shopping cart application developed using HTML, CSS, and JavaScript. The application allows users to add products to their cart, view the cart, and proceed to checkout.',
      imageUrl: '/img/ScreenShopping.jpeg',
      githubUrl: 'https://shopping-tan-nine.vercel.app/',
    },
  ]

  return (
    <div id="Projects" className="flex flex-col items-center justify-center min-h-screen py-12 rounded-lg bg-gradient-to-r from-blue-200 via-green-200 to-blue-300 hover:bg-opacity-70">
      <main className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl pt-28 pb-8 text-center underline hover:animate-pulse font-serif text-gray-900">Projects</h1>
        <div className="mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-8 font-bold text-xl font-serif text-gray-200">
          Total Projects: {projects.length}
        </div>
      </main>
    </div>
  )
}

export default Projects
