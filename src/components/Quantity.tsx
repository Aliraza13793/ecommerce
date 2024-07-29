"use client"
import React, { useState } from 'react'

function Quantity() {
  const[num, setNum]  =useState(1)
  return (
    <div className='flex gap-x-2 items-center'>
        <button className='border bg-green-400 h-8 w-8 rounded-full flex justify-center items-center' onClick={()=> setNum(num <=1 ? 1 : num-1)}>-</button>
        <span>{num}</span>
        <button className='border h-8 w-8  bg-green-400 rounded-full flex justify-center items-center' onClick={()=> setNum(num+1)}>+</button>
        </div>
  )
}

export default Quantity;