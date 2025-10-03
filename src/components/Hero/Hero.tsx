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
    <div className='max-w-[1220px] px-4 md:px-6 mx-auto py-12 md:py-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center'>
        <div className='flex flex-col justify-center items-center md:items-start text-center md:text-left'>
          <span className='inline-block px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-sm font-semibold mb-6'>
            Sale Up to 70% Off
          </span>
          <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-gray-900'>
            An Industrial<br/>
            Take on<br/>
            Streetwear
          </h1>
          <p className='text-gray-600 mt-6 text-base md:text-lg max-w-md leading-relaxed'>
            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
          </p>
          <Link href="/AllProducts">
            <button className='mt-8 px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md'>
              Start Shopping
            </button>
          </Link>
          <div className='flex gap-4 flex-wrap justify-center md:justify-start mt-10'>
            <div className='w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
              <Image src={Featured1} width={80} height={80} alt='Brand 1' className='w-full h-full object-cover'/>
            </div>
            <div className='w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
              <Image src={Featured2} width={80} height={80} alt='Brand 2' className='w-full h-full object-cover'/>
            </div>
            <div className='w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
              <Image src={Featured3} width={80} height={80} alt='Brand 3' className='w-full h-full object-cover'/>
            </div>
            <div className='w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
              <Image src={Featured4} width={80} height={80} alt='Brand 4' className='w-full h-full object-cover'/>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <div className='w-full max-w-[500px] aspect-square rounded-full bg-gradient-to-br from-pink-100 to-purple-100 p-6 md:p-8 flex items-center justify-center shadow-lg'>
            <Image src={header} width={500} height={500} alt='Hero' className='rounded-full w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero