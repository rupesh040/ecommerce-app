"use client"
import Catenavbar from '@/app/categories/Catenavbar'
import React, { useContext, useEffect, useState } from 'react'
import { carousel_data } from '../../../../Data/carousel';
import { StoreContext } from '@/app/context/StoreContext';
import Product from '@/app/components/Product';


const page = ({params}) => {
    const {product_data} = useContext(StoreContext);
    const [data, setData] = useState({});
    const fetchproductData = () => {
      for (let i = 0; i < carousel_data.length; i++) {
        if (Number(params.id) === carousel_data[i].id) {
          setData(carousel_data[i]);
          break;
        }
      }
    };
    useEffect(() => {
        fetchproductData();
    })
    console.log(data);

  return (
    <>
      <Catenavbar category={data.cro_category}/>
      <div className=" w-full py-5 border-b-[1px] border-dashed border-zinc-400 flex flex-col justify-center items-center">
        <h1 className='text-4xl font-bold text-center py-3'>{data.name}</h1>
        <p className='text-center max-w-[800px]'>{data.p}</p>
      </div>
      <div className=" flex gap-2 flex-wrap px-2 justify-around py-5">
      {
            product_data.filter((elem) => String(data.cro_name) === elem.cro_category?true:"").map((item,ind) => {
                return <Product key={ind} id={item.id} img={item.img} name={item.name} weight={item.weight} price={item.price} />
            })
        }</div>
    </>
  )
}

export default page
