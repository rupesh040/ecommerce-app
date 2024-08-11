import React, { useState } from 'react'
import Product from './Product';
import { product_data } from "../../../Data/data";
const ProductCarousel  = () => {
  return (
    <>
    <div className="flex justify-between max-w-[1180px] py-1 px-3 mx-auto">
<h1 className="font-bold text-2xl">Snacks & Munchies </h1>
<a className="text-blue-500 "> see all</a></div>
    <div className=' cro max-w-[1180px]   mx-auto flex gap-3 flex-nowrap  overflow-x-scroll p-5'>
        {
            product_data.map((item) => {
                return <Product img={item.img} name={item.name} weight={item.weight} price={item.price} />
            })
        }
    </div>
    </>
  )
}

export default ProductCarousel
