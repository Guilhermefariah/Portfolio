import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  gifUrl: string;
  visitorBadgeUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, gifUrl, visitorBadgeUrl }) => {
  return (
    <div className="shadow-md flex flex-col sm:flex-row w-full items-center relative py-44 gap-8 transition-all duration-500 ease-in-out transform hover:scale-105">
      <div className="w-full p-4 text-left sm:text-center sm:w-1/2">
        <h2 className="text-6xl font-bold font-serif pb-4 text-transparent bg-gradient-to-r from-black via-white to-black bg-clip-text bg-no-repeat bg-[length:80%] animate-shine">
          {title}
        </h2>
        <p className="text-4xl text-gray-200 font-serif">{description}</p>
      </div>

      <div className="sm:w-1/2 relative overflow-hidden ">
        <img
          src={gifUrl}
          alt="GIF"
          className="w-11/12 transition-all duration-300 ease-in-out transform hover:scale-110"
        />
        <div className="absolute top-0 flex justify-center w-11/12 transition-all duration-500 ease-in-out transform hover:scale-105">
          <img
            src={visitorBadgeUrl}
            alt="Badge de Visitantes"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
