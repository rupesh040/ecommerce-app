
import React, { useState } from 'react'
import { cate_data } from "../../../Data/category";
const Catecard = () => {
    const [cate,setCate] = useState()
  return (

    <div className=' max-w-[1180px]  mx-auto gap-5 my-5 '>
     <h1 className=" max-w-[1180px] mx-auto p-1 mb-5 px-3 text-2xl font-bold ">Category</h1>
       <div className="max-w-[1180px] rounded-xl overflow-hidden cursor-pointer  flex flex-wrap flex-row justify-around">
          {
            cate_data.map((item) => <img src={item} alt="" className='Category hover:scale-90 transition-all ease-in-out'/>)
          }
      </div>
    </div>
  )
}

export default Catecard
