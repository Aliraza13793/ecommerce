"use client"
import React from 'react';
import { Productss } from '@/utils/mocks';
import Image, { StaticImageData } from 'next/image';
import ProductsCart from '@/components/ProductsCart';

function AllProducts() {
  return (
    <div className=" max-w-[1220px] mx-auto grid md:grid-cols-4 mt-6 gap-3">
      {
          Productss.map((product)=>(
            <ProductsCart key={product.id} title={product.name} price={product.price} img={product.image as StaticImageData} category={product.category} id={product.id}/>))
        }
      
         </div>
  )
}

export default AllProducts