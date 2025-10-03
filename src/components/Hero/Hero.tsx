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
    <div className='max-w-[1220px] px-4 md:px-6 mx-auto md:grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
        <div className='col-span-1 flex flex-col justify-center px-4 md:px-0'>
          <h1 className='text-green-400 font-bold my-2 md:my-3 text-xl md:text-2xl mt-6 md:mt-12'>
            Sale Upto 70%
          </h1>
          <h2 className='my-1 md:my-2 text-left md:text-justify font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 md:mt-6'>
          An Industrial
          </h2>
          <h2 className='my-1 md:my-2 text-left md:text-justify font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
          Take on
          </h2>
          <h2 className='my-1 md:my-2 text-left md:text-justify font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
          Streetwear
          </h2>
          <p className='text-gray-500 text-left md:text-center mt-4 md:mt-10 text-sm md:text-base'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
          <button className='w-full sm:w-[50%] md:w-[40%] lg:w-[30%] bg-black text-white rounded p-3 md:p-5 mt-6 md:mt-10 mb-4 hover:bg-gray-800 transition-colors'><Link href="/AllProducts"> Start Shopping</Link></button>
          <div className='flex justify-start gap-2 md:gap-0 flex-wrap'>
            <Image src={Featured1} width={100} height={100} objectFit='cover' alt='brands' className='w-16 h-16 md:w-24 md:h-24 mr-2 md:mr-3 mt-3'/>
            <Image src={Featured2} width={100} height={100} objectFit='cover' alt='brands' className='w-16 h-16 md:w-24 md:h-24 mr-2 md:mr-3 mt-3'/>
            <Image src={Featured3} width={100} height={100} objectFit='cover' alt='brands' className='w-16 h-16 md:w-24 md:h-24 mr-2 md:mr-3 mt-3'/>
            <Image src={Featured4} width={100} height={100} objectFit='cover' alt='brands' className='w-16 h-16 md:w-24 md:h-24 mr-2 md:mr-3 mt-3'/>
          </div>

        </div>
        <div className='col-span-1 w-full md:w-[90%] flex justify-center items-center text-center border rounded-full bg-pink-100 mt-8 md:mt-4 ml-0 md:ml-8 p-4 md:p-0'>
            <Image src={header} width={1200} height={700} objectFit='cover' alt='Hero' className='rounded-full w-full h-auto' />

        </div>
    </div>
  )
}

export default Hero