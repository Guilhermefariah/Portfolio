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
      <div className="w-full p-4 text-left sm:text-center sm:w-1/2">
        <h2 className="text-6xl text-white font-bold mb-4">{title}</h2>
        <p className="text-4xl text-white">{description}</p>
      </div>

      <div className="relative w-full border-none sm:ml-4 mt-4 sm:mt-0 flex justify-center items-center sm:w-1/2">
        <div className="max-lg relative">
          <img src={gifUrl} alt="GIF" className="rounded-lg object-cover w-full sm:h-auto sm:w-full" />
          <div className="absolute top-0 left-0 flex justify-start items-start p-4">
            <img src={visitorBadgeUrl} alt="Badge de Visitantes" className="w-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
