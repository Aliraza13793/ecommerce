import React from 'react'

function Newsletter() {
  return (
    <div className='mt-10'>
        <div className='text-center font-bold text-4xl mb-6'>Subscribe Our Newsletter</div>
        <div className='text-center'>Get the latest information and promo offers directly</div>
        <div className='max-w-[1240px] mx-auto flex justify-center gap-2 mt-6 '>
          <div className='text-end'>
            <input type='text' placeholder='Enter your email' className='border-2 border-gray-300 rounded-lg p-2 w-[440px]' />
          </div>
          <div className='text-start'>
            <button className='border-2 border-gray-300 rounded-lg p-2  hover:bg-black hover:text-white'>Subscribe</button>
          </div>
        </div>

        
        
        </div>
  )
}

export default Newsletter