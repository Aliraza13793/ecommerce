"use client"
import React from 'react'
import Image,{StaticImageData} from 'next/image';
import ProductsCart from './ProductsCart';
import { Productss } from '@/utils/mocks';

const Products=()=> { 
  const productschecks= Productss.slice(0,3)
  return (
    <div className='mt-20'>
        <div className='flex justify-center  text-blue-700 font-bold mb-2'> PRODUCTS</div>
        <div className='flex justify-center text-4xl font-bold'>Check What We Have</div>
       <div className=' max-w-[1220px] mx-auto grid md:grid-cols-3 mt-6 gap-3 '>
        {
          productschecks.map((product)=>(
            <ProductsCart key={product.id} title={product.name} price={product.price} img={product.image as StaticImageData} category={product.category} id={product.id}/>))
        }
             
        </div>
        
        </div>
  )
}

export default Products;