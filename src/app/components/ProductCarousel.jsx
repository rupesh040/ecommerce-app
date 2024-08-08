import React from 'react'
import Product from './Product'
const ProductCarousel  = () => {
  return (
    <div className=' cro max-w-[1180px]   mx-auto flex gap-5 flex-nowrap  overflow-x-scroll p-5'>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>
  )
}

export default ProductCarousel
