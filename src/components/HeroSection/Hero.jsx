import React from 'react'
import gif from '../../assets/to-write-6621_256.gif'
import './Hero.css'
import InstructionPage from '../InstructionPage/Instruction'
function Hero() {
  return (
    <>
    <div className='bg-image-set flex flex-col items-center justify-center'>
      <div className="flex flex-col items-center justify-center min-h-[493px] text-cnter">
        {/* <h1 className='text-6xl font-medium text-white'>Hi, Write your </h1> */}
        <h1 className='w-[80%] text-7xl font-medium text-white'>Create Meaningful Connections-<span className='bg-[#3c6e71]'> Start Dating Today</span></h1>
      </div>
        <button className='text-white text-xl cursor-pointer border-b-1'>Create a Account ♟</button>
      {/* <img className='w-14 ml-5 mt-3 cursor-pointer' src={gif} alt="" /> */}
    </div>

    <InstructionPage/>
    </>
  )
}

export default Hero
