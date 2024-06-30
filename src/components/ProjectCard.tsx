import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <div className="flex items-center justify-center h-screen w-full relative transition-all duration-500 ease-in-out transform hover:scale-105">
      <div className="text-center w-full p-4 sm:w-1/2">
        <h2 className="text-6xl font-bold font-serif pb-4 text-transparent bg-gradient-to-r from-black via-white to-black bg-clip-text bg-no-repeat bg-[length:80%] animate-shine">
          {title}
        </h2>
        <p className="text-4xl text-gray-200 font-serif">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
