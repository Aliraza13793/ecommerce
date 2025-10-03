import React from 'react'

function Newsletter() {
  return (
    <div className='max-w-[1220px] mx-auto px-4 md:px-6 py-16 md:py-24'>
      <div className='bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 text-center border border-gray-200'>
        <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4'>Subscribe Our Newsletter</h2>
        <p className='text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto'>Get the latest information and promo offers directly</p>
        <div className='flex flex-col sm:flex-row justify-center gap-3 max-w-2xl mx-auto'>
          <input
            type='email'
            placeholder='Enter your email address'
            className='flex-1 bg-white border border-gray-300 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all shadow-sm'
          />
          <button className='bg-gray-900 text-white rounded-lg px-8 py-4 font-medium hover:bg-gray-800 transition-colors whitespace-nowrap shadow-sm hover:shadow-md'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter