import React, { useState } from 'react'
import Product from './Product';
import { product_data } from "../../../Data/data";
const ProductCarouselsrc  = ({img,name,weight,price}) => {
  return (
    <>
       <Product img={img} name={name} weight={weight} price={price} />
    </>
  )
}

export default ProductCarouselsrc
