import React from 'react'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <motion.div
      className="flex items-center justify-center h-screen w-full relative"
      whileHover={{ scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center w-full p-4 sm:w-3/4 lg:w-1/2">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif pb-4 text-transparent bg-gradient-to-r from-black via-white to-black bg-clip-text bg-no-repeat bg-[length:80%] animate-shine"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl text-gray-400 font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default ProjectCard
