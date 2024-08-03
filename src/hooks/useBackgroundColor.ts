import { useState } from 'react'

const useBackgroundColor = (): ['black' | 'white', () => void] => {
  const [bgColor, setBgColor] = useState<'black' | 'white'>('black')

  const BackgroundColor = () => {
    setBgColor((prevColor) => (prevColor === 'black' ? 'white' : 'black'))
  }

  return [bgColor, BackgroundColor]
}

export default useBackgroundColor
