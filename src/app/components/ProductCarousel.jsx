"use client"
import React, { useContext, useEffect, useState } from 'react'
import Product from './Product';
import { StoreContext } from '../context/StoreContext';
import Link from 'next/link';

const ProductCarousel  = ({category,id}) => {
    const {product_data} = useContext(StoreContext)
  return (
    <>
    <div className="flex justify-between max-w-[1180px] py-1 px-3 mx-auto">
<h1 className="font-bold text-2xl">{category} </h1>
<Link href={`/categoryproduct/${id}`} className="text-blue-500 "> see all</Link></div>
    <div className=' cro max-w-[1180px]   mx-auto flex gap-3 flex-nowrap  overflow-x-scroll p-5'>
    {
            product_data.filter((elem) => String(category) === elem.category?true:"").map((item,ind) => {
                return <Product key={ind} id={item.id} img={item.img} name={item.name} weight={item.weight} price={item.price} />
            })
        }
    </div>
    </>
  )
}

export default ProductCarousel
