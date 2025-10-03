"use client"
import React from 'react';
import { Productss } from '@/utils/mocks';
import Image, { StaticImageData } from 'next/image';
import ProductsCart from '@/components/ProductsCart';

function AllProducts() {
  return (
    <div className="max-w-[1220px] mx-auto px-4 mt-8 md:mt-12 mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {
          Productss.map((product)=>(
            <ProductsCart key={product.id} title={product.name} price={product.price} img={product.image as StaticImageData} category={product.category} id={product.id}/>))
        }

         </div>
         </div>
  )
}

export default AllProducts