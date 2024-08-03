import React from 'react'
import { AnimatePresence } from 'framer-motion'
import CertificateCard from './CertificateCard'
import CertificateModal from './CertificateModal'
import CertificateFilters from './CertificateFilters'
import { useCertificates } from '@/hooks/useCertificates/useCertificates'

const Certificates: React.FC = () => {
  const {
    certificates,
    selectedCategory,
    categorySelect,
    openModal,
    closeModal,
    hoveredIndex,
    setHoveredIndex,
    showModal,
    selectedCertificate
  } = useCertificates()

  return (
    <div id="Certificates" className="flex flex-col items-center justify-center min-h-screen mt-12 rounded-lg bg-gradient-to-r from-blue-200 via-green-200 to-blue-300 hover:bg-opacity-70">
      <main className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl pt-24 pb-8 text-center font-serif text-gray-900 underline hover:animate-pulse">Certificates</h1>
        <CertificateFilters selectedCategory={selectedCategory} onSelectCategory={categorySelect} />
        <div className="flex flex-wrap justify-center">
          {certificates
            .filter(cert => selectedCategory === null || cert.category === selectedCategory)
            .map((certificate, index) => (
              <CertificateCard
                key={index}
                certificate={certificate}
                onClick={() => openModal(certificate)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                isHovered={hoveredIndex !== null && hoveredIndex !== index}
              />
            ))}
        </div>
        <AnimatePresence>
          {showModal && selectedCertificate && (
            <CertificateModal certificate={selectedCertificate} onClose={closeModal} />
          )}
        </AnimatePresence>
        <div className="text-center m-8 font-bold text-xl font-serif text-gray-900">
          Total Certificates: {certificates.length}
        </div>
      </main>
    </div>
  )
}

export default Certificates
