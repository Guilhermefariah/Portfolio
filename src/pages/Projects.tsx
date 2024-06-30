import React, { useState } from 'react';
import { NextPage } from 'next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects: NextPage = () => {
  const [showProjects, setShowProjects] = useState(false);

  const projects = [
    { id: 1, title: 'SmartGrid', description: 'Description of Project 1', imageUrl: '/img/SmartGrid.jpeg' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2', imageUrl: '/project2.jpg' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3', imageUrl: '/project3.jpg' },
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

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${showProjects ? 'opacity-100' : 'opacity-0'}`}>
      <main className="flex-grow">
        <h1 className="text-3xl font-bold text-center">Projects</h1>
        <div className="mx-auto max-w-4xl">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="px-4">
                <img src={project.imageUrl} alt={project.title} className="rounded-lg shadow-lg" />
                <div className="bg-white p-4 mt-4 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-gray-600">{project.description}</p>
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
