import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Certificate {
    title: string
    description: string
    imageUrl: string
    link: string
}

interface CertificateCardProps {
    certificate: Certificate
    onClick: () => void
    onMouseEnter: () => void
    onMouseLeave: () => void
    isHovered: boolean
}

const CertificateCard: React.FC<CertificateCardProps> = ({
    certificate,
    onClick,
    onMouseEnter,
    onMouseLeave,
    isHovered
}) => (
    <motion.div
        className={`p-8 ${isHovered ? 'opacity-50' : 'opacity-100'}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={onClick}
    >
        <div className="bg-gray-800 p-1 border-2 rounded-lg shadow-gray-700 shadow-lg overflow-hidden flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <Image src={certificate.imageUrl} alt={certificate.title} width={200} height={100} />
            </motion.div>
            <div className="p-4 flex flex-col items-center text-center">
                <h2 className="text-xl font-semibold text-gray-200">{certificate.title}</h2>
                <p className="mt-2 text-gray-200">{certificate.description}</p>
                <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl p-2 inline-block hover:animate-pulse">View Certificate</a>
            </div>
        </div>
    </motion.div>
)

export default CertificateCard
