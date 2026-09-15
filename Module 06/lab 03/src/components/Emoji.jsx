import { useState } from 'react'

function Emoji() {
  const [happy, setHappy] = useState(true)

  const handleChangeMood = () => {
    setHappy(!happy)
  }

  return (
    <div className="componentBox" style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '80px' }}>
        {happy ? '😀' : '😢'}
      </div>
      <p>Current mood: {happy ? 'Happy' : 'Sad'}</p>
      <button onClick={handleChangeMood}>Change Mood</button>
    </div>
  )
}

export default Emoji
