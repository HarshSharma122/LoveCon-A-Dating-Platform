import React from 'react'
import linkdin from '../../assets/linkdin.png'
function Footer() {
  return (
    <div className='pt-2 pb-3 text-white text-l  font-medium bg-[#3c6e71] flex items-center justify-between pr-[25px] pl-[19px]'>
      <h1 className='flex items-center justify-center'>@2025 LoveCon.com. All Rights Reserved</h1>
      <div className="links">
        <a href="www.linkedin.com/in/harsh-sharma016"><img className='w-13 border-2 rounded-full' src={linkdin} alt="" /></a>
      </div>
    </div>

  )
}

export default Footer