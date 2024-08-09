import React, { useState } from 'react'
import Product from './Product';
const ProductCarousel  = () => {
    const[product,setProduct] = useState([
        {
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7bc1df93-0002-47c3-bea3-7b92bcf09c8c.jpg?ts=1720514361",
            name:`Lay's India's Magic Masala Potato Chips`,
            weight:"48g",
            price:20,
        },
        {
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/19266a.jpg?ts=1688625382",
            name:`Haldiram Bhujia`,
            weight:"400g",
            price:111,
        },
        {
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/829ffbff-3516-4323-84ce-a6a3f21ff022.jpg?ts=1707313057",
            name:`Haldiram's Nut Cracker / Peanuts`,
            weight:"200g",
            price:54,
        },
        {
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/432818a.jpg?ts=1688444559",
            name:`Doritos Cheese Nachos`,
            weight:"30g",
            price:53,
        },
        {
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7bc1df93-0002-47c3-bea3-7b92bcf09c8c.jpg?ts=1720514361",
            name:`Lay's India's Magic Masala Potato Chips`,
            weight:"48g",
            price:20,
        },
        {
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/19266a.jpg?ts=1688625382",
            name:`Haldiram Bhujia`,
            weight:"400g",
            price:111,
        },
        {
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/829ffbff-3516-4323-84ce-a6a3f21ff022.jpg?ts=1707313057",
            name:`Haldiram's Nut Cracker / Peanuts`,
            weight:"200g",
            price:54,
        },
        {
            img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/432818a.jpg?ts=1688444559",
            name:`Doritos Cheese Nachos`,
            weight:"30g",
            price:53,
        },
    ]);
  return (
    <>
    <div className="flex justify-between max-w-[1180px] py-1 px-3 mx-auto">
<h1 className="font-bold text-2xl">Snacks & Munchies </h1>
<a className="text-blue-500 "> see all</a></div>
    <div className=' cro max-w-[1180px]   mx-auto flex gap-3 flex-nowrap  overflow-x-scroll p-5'>
        {
            product.map((item) => {
                return <Product img={item.img} name={item.name} weight={item.weight} price={item.price} />
            })
        }
    </div>
    </>
  )
}

export default ProductCarousel
