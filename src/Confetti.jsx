import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

export default function ConfettiComponent({ setConfettiState }) {
  const { width } = useWindowSize()
  const pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight
  
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10000, pointerEvents: 'none' }}>
      <Confetti
        width={width}
        height={pageHeight}
        numberOfPieces={400}
        recycle={false}
        onConfettiComplete={() => setConfettiState(false)}
        className='confetti'
      />
    </div>
  )
}
