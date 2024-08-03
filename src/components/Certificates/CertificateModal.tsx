import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Certificate {
    title: string
    description: string
    imageUrl: string
    link: string
}

interface CertificateModalProps {
    certificate: Certificate
    onClose: () => void
}

const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => (
    <motion.div
        className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <motion.div
            className="bg-gray-900 rounded-lg p-8 max-w-md w-full"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
        >
            <Image src={certificate.imageUrl} alt={certificate.title} width={200} height={100} />
            <h2 className="text-2xl font-semibold text-gray-200 mt-4">{certificate.title}</h2>
            <p className="text-gray-200">{certificate.description}</p>
            <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-lg mt-2 inline-block hover:animate-pulse">View Certificate</a>
            <button onClick={onClose} className="grid text-gray-100 mt-4 place-items-end rounded-lg px-2 bg-red-600">Close</button>
        </motion.div>
    </motion.div>
)

export default CertificateModal
