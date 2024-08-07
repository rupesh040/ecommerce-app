import React from 'react'

const Overlay = ({btn}) => {
  return (
    <div className='w-[100vw] h-screen bg-black opacity-5  absolute z-10 '  onClick={btn}>
    </div>
  )
}

export default Overlay
