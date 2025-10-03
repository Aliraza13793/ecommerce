"use client"
import React from 'react'
import Image,{StaticImageData} from 'next/image';
import ProductsCart from './ProductsCart';
import { Productss } from '@/utils/mocks';

const Products=()=> {
  const productschecks= Productss.slice(0,3)
  return (
    <div className='max-w-[1220px] mx-auto px-4 md:px-6 py-16 md:py-24'>
        <div className='text-center mb-12'>
          <span className='inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-semibold mb-4'>
            PRODUCTS
          </span>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>Check What We Have</h2>
        </div>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {
          productschecks.map((product)=>(
            <ProductsCart key={product.id} title={product.name} price={product.price} img={product.image as StaticImageData} category={product.category} id={product.id}/>))
        }
        </div>
        </div>
  )
}

export default Products;