import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

interface BackgroundButtonProps {
  bgColor: 'black' | 'white'
  BackgroundColor: () => void
}

const BackgroundButton: React.FC<BackgroundButtonProps> = ({ bgColor, BackgroundColor }) => {
  return (
    <button
      onClick={BackgroundColor}
      className="fixed bottom-8 left-8 bg-gradient-to-r from-blue-200 via-green-200 to-blue-300 text-gray-900 font-bold p-4 rounded-full flex items-center justify-center"
    >
      {bgColor === 'black' ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default BackgroundButton
