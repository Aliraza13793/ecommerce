"use client"
import React from 'react'
import Image,{StaticImageData} from 'next/image';
import Link from 'next/link';


function ProductsCart(props:{title:string, price:number,img:StaticImageData,category:string, id:number}) {
  return (
    <Link href={`/AllProducts/${props.id}`}>
      <div className='group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100'>
        <div className='overflow-hidden'>
          <Image
            src={props.img}
            alt={props.title}
            width={550}
            height={550}
            className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500'
          />
        </div>
        <div className='p-4'>
          <h3 className='text-gray-800 font-semibold text-base md:text-lg mb-2 line-clamp-2'>{props.title}</h3>
          <p className='text-gray-900 font-bold text-lg'>${props.price}</p>
        </div>
      </div>
    </Link>
  )
};

export default ProductsCart;