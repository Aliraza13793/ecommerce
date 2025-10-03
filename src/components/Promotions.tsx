"use client"
import Image from 'next/image'
import React from 'react'
import sale2 from '../components/Assets/Images/sale2.jpeg'
import sale3 from '../components/Assets/Images/sale3.jpeg'
import sale4 from '../components/Assets/Images/sale4.jpeg'


function Promotions() {
  return (
    <div className='max-w-[1220px] mx-auto px-4 md:px-6 py-16 md:py-24'>
        <div className='text-center mb-12'>
          <span className='inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4'>
            PROMOTIONS
          </span>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>Our Promotions Events</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100'>
            <div className='overflow-hidden'>
              <Image src={sale3} alt='Promotion' width={400} height={550} className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500'/>
            </div>
          </div>
          <div className='group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100'>
            <div className='overflow-hidden'>
              <Image src={sale2} alt='Promotion' width={550} height={550} className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500'/>
            </div>
          </div>
          <div className='group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 sm:col-span-2 md:col-span-1'>
            <div className='overflow-hidden'>
              <Image src={sale4} alt='Promotion' width={550} height={550} className='w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Promotions