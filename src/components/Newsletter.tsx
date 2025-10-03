import React from 'react'

function Newsletter() {
  return (
    <div className='mt-10 md:mt-16 px-4'>
        <div className='text-center font-bold text-2xl md:text-4xl mb-4 md:mb-6'>Subscribe Our Newsletter</div>
        <div className='text-center text-sm md:text-base text-gray-600'>Get the latest information and promo offers directly</div>
        <div className='max-w-[1240px] mx-auto flex flex-col sm:flex-row justify-center gap-2 md:gap-3 mt-6 px-4'>
          <div className='flex-1 sm:flex-none'>
            <input type='text' placeholder='Enter your email' className='border-2 border-gray-300 rounded-lg p-2 md:p-3 w-full sm:w-[300px] md:w-[440px]' />
          </div>
          <div>
            <button className='border-2 border-gray-300 rounded-lg p-2 md:p-3 w-full sm:w-auto hover:bg-black hover:text-white transition-colors'>Subscribe</button>
          </div>
        </div>



        </div>
  )
}

export default Newsletter