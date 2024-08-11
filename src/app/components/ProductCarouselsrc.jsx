import React, { useState } from 'react'
import Product from './Product';
const ProductCarouselsrc  = ({img,name,weight,price,id}) => {
  return (
    <>
       <Product img={img} name={name} weight={weight} id={id} price={price} />
    </>
  )
}

export default ProductCarouselsrc
