import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleScroll = () => {
    setShowButton(window.scrollY > 200)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!showButton) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-200 via-green-200 to-blue-300 text-gray-900 font-bold p-4 rounded-full flex items-center justify-center"
    >
      <FaArrowUp className="animate-bounce" />
    </button>
  )
}

export default ScrollToTopButton
