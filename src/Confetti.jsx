import React from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

export default function ConfettiComponent({ setConfettiState }) {
  const { width } = useWindowSize()
  const pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight
  
  return (
    <Confetti
        width={width}
        height={pageHeight}
        numberOfPieces={400}
        recycle={false}
        onConfettiComplete={() => setConfettiState(false)}
    />
  )
}
