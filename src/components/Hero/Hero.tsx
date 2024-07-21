"use client"
import Image from 'next/image'
import React from 'react'
import './Hero.css'
import header from '../Assets/Images/header.webp'
import Featured1 from '../Assets/Images/Featured1.webp'
import Featured2 from '../Assets/Images/Featured2.webp'
import Featured3 from '../Assets/Images/Featured3.webp'
import Featured4 from '../Assets/Images/Featured4.webp'
import Link from 'next/link'




function Hero() {
  return (
    <div className='max-w-[1220px] p-2 mx-auto md:grid grid-cols-2'>
        <div className=' col-span-1 flex flex-col justify-center'>
          <h1 className='text-green-400 font-bold my-3 text-2xl mt-12'>
            Sale Upto 70%
          </h1>
          <h2 className='my-2 text-justify font-bold text-6xl mt-6'>
          An Industrial 
          </h2>
          <h2 className='my-2 text-justify font-bold text-6xl'>
          Take on
          </h2>
          <h2 className='my-2 text-justify font-bold text-6xl'>
          Streetwear
          </h2>
          <p className='flex flex-wrap text-gray-500 justify-center mt-10'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
          <button className=' w-[30%] bg-black text-white rounded p-5 mt-10 mb-4 '><Link href="/AllProducts"> Start Shopping</Link></button>
          <div className='flex justify-start'>
            <Image src={Featured1} width={100} height={100} objectFit='cover' alt='brands ' className='mr-3 mt-3'/>
            <Image src={Featured2} width={100} height={100} objectFit='cover' alt='brands'className='mr-3 mt-3'/>
            <Image src={Featured3} width={100} height={100} objectFit='cover' alt='brands'className='mr-3 mt-3'/>
            <Image src={Featured4} width={100} height={100} objectFit='cover' alt='brands'className='mr-3 mt-3'/>
          </div>    

        </div>
        <div className=' col-span-1 md:w-[90%] flex text-center border rounded-full bg-pink-100 ml-8 mt-4'>
            <Image src={header} width={1200} height={700} objectFit='cover' alt='Hero' className='rounded-full ml-4' />
        
        </div>
    </div>
  )
}

export default Hero