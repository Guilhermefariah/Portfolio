import React from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, githubUrl }) => {
  return (
    <div className="bg-gray-800 p-2 border-none rounded-lg shadow-gray-600 shadow-lg transition-transform duration-300 transform hover:scale-105">
      <div className="relative group">
        <Image src={imageUrl} alt={title} width={400} height={300} className="rounded-lg" />
        <div className="absolute inset-0 bg-black font-serif bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <div className="bg-white opacity-90 p-2 rounded-lg shadow-lg text-center max-w-xs sm:max-w-sm md:max-w-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif">{title}</h2>
            <p className="text-sm sm:text-base md:text-lg text-black line-clamp-3">{description}</p>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
                View on Deploy
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
