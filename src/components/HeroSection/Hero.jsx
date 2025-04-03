import React, { useState } from 'react'

import './Hero.css'
import InstructionPage from '../InstructionPage/Instruction'
import { Link, NavLink } from 'react-router-dom'
function Hero() {
  return (
    <>
      <div className='bg-image-set flex flex-col items-center justify-center'>
        <div className="flex flex-col items-center justify-center min-h-[493px] text-cnter">
          <h1 className='w-[80%] text-7xl font-medium text-white'>Create Meaningful Connections-<span className='bg-[#3c6e71]'>Start Dating Today</span></h1>
        </div>

        <NavLink to='/signup'>
            <button className='text-white text-xl cursor-pointer border-b-1'>Create a Account ♟</button>
        </NavLink>
      </div>
      <InstructionPage />
    </>

  )
}

export default Hero
