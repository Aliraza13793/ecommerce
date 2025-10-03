"use client"
import React from 'react'
import Image from 'next/image'
import wtwehave4 from '../components/Assets/Images/wtwehave4.webp'
import Link from 'next/link'

function FourGrids() {
  return (
    <div className='max-w-[1220px] mx-auto px-4 md:px-6 py-16 md:py-24'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10'>
        <div className='text-center sm:text-left space-y-8'>
            <div>
              <h3 className='font-bold text-xl md:text-2xl text-gray-900 mb-3'>Using Good Quality Materials</h3>
              <p className='text-gray-600 text-sm md:text-base leading-relaxed'>Lorem lpsum is simply loren Lpsum is simply dummy text.</p>
            </div>
            <div>
              <h3 className='font-bold text-xl md:text-2xl text-gray-900 mb-3'>Modern Fashion Design</h3>
              <p className='text-gray-600 text-sm md:text-base leading-relaxed'>Lorem lpsum is simply loren Lpsum is simply dummy text.</p>
            </div>
        </div>

        <div className='text-center sm:text-left space-y-8'>
            <div>
              <h3 className='font-bold text-xl md:text-2xl text-gray-900 mb-3'>100% Handmade Product</h3>
              <p className='text-gray-600 text-sm md:text-base leading-relaxed'>Lorem lpsum is simply loren Lpsum is simply dummy text.</p>
            </div>
            <div>
              <h3 className='font-bold text-xl md:text-2xl text-gray-900 mb-3'>Discount for Bulk Orders</h3>
              <p className='text-gray-600 text-sm md:text-base leading-relaxed'>Lorem lpsum is simply loren Lpsum is simply dummy text.</p>
            </div>
        </div>

        <div className='flex justify-center items-start'>
           <div className='rounded-2xl overflow-hidden shadow-lg border border-gray-100'>
             <Image src={wtwehave4} alt='Product showcase' width={450} height={550} className='w-full h-auto object-cover'/>
           </div>
        </div>

        <div className='text-center sm:text-left'>
            <p className='text-gray-700 text-sm md:text-base leading-relaxed mb-6'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
            <Link href="/AllProducts">
              <button className='w-full sm:w-auto bg-gray-900 text-white rounded-lg px-8 py-3 font-medium hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md'>
                All Products
              </button>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default FourGrids