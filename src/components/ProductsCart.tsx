"use client"
import React from 'react'
import Image,{StaticImageData} from 'next/image';
import Link from 'next/link';
import wtwehave1 from '../components/Assets/Images/wtwehave1.png';
import wtwehave2 from '../components/Assets/Images/wtwehave2.png';
import wtwehave3 from '../components/Assets/Images/wtwehave3.png';

function ProductsCart(props:{title:string, price:number,img:StaticImageData,category:string, id:number}) {
  return (
    <Link href={`/AllProducts/${props.id}`}>
    <div className='shadow-xl my-4 hover:scale-105 duration-300 rounded text-center items-center'>
    <Image src={props.img} alt='' width={550} height={550}/>
    <div className='flex justify-center mt-6 font-bold '>{props.title}</div>
    <h1 className=' flex justify-center mt-3 font-bold'>${props.price}</h1>
  </div>
  </Link>
  )
};

export default ProductsCart;