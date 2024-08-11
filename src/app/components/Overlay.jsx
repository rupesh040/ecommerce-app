import React from 'react'

const Overlay = ({btn}) => {
  return (
    <div className='w-[100vw] h-screen bg-black opacity-10  absolute z-10 top-[0%] '  onClick={btn}>
    </div>
  )
}

export default Overlay
