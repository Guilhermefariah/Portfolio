import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  gifUrl: string;
  visitorBadgeUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, gifUrl, visitorBadgeUrl }) => {
  return (
    <div className="shadow-md flex flex-col sm:flex-row w-full items-center relative">
      <div className="w-full sm:w-1/2 p-4 text-left sm:text-center">
        <h2 className="text-3xl sm:text-6xl text-white font-bold mb-4">{title}</h2>
        <p className="text-lg sm:text-4xl text-white">{description}</p>
      </div>

      <div className="w-full sm:w-1/2 relative">
        <img src={gifUrl} alt="GIF do Projeto" className="w-full h-auto" />
        <div className="absolute top-0 flex justify-center w-full">
          <img src={visitorBadgeUrl} alt="Badge de Visitantes" className='w-full' />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
