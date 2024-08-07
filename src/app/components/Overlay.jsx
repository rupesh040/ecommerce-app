import React from 'react'

const Overlay = ({btn}) => {
  return (
    <div className='w-[100vw] h-screen bg-black opacity-10  absolute z-10 top-[12%] max-[1080px]:top-[8%] '  onClick={btn}>
    </div>
  )
}

export default Overlay
