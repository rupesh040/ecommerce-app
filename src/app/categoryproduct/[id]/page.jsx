"use client"
import React, { useEffect, useState } from 'react'
import { cate_data } from '../../../../Data/category';
import Navbar from '@/app/components/Navbar';
import 'remixicon/fonts/remixicon.css';
import { product_data } from '../../../../Data/data';
import Product from '@/app/components/Product';

const page = ({params}) => {
    const [data, setData] = useState({});
    const fetchproductData = () => {
      for (let i = 0; i < cate_data.length; i++) {
        if (Number(params.id) === cate_data[i].id) {
          setData(cate_data[i]);
          console.log(cate_data[i]);
          break;
        }
      }
    };

    useEffect(() => {
        fetchproductData();
    }, []);
  return (
    <>
    <Navbar/>
    <div className=" max-w-[1180px] flex flex-wrap gap-3 p-5 mx-auto">
    {
        product_data.filter((item) => item.category === data.category_name?true:"").map((elem)=> {
            return <Product img={elem.img} name={elem.name} price={elem.price} weight={elem.weight} id={elem.id}/>
        })
    }</div>
    </>
  )
}

export default page
