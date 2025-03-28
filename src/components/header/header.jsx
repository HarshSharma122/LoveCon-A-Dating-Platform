import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import light from '../../assets/summer.png'
import dark from '../../assets/moon.png'
export default function Header() {

    return (
        <header className="shadow  z-50 top-0">
            <nav className="border-gray-200 px-4 lg:px-6 py-6">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <h1 className='flex text-black-700  text-2xl font-medium logoh1'>The <h1 className='text-[#3c6e71]'> Confess</h1></h1>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <select className='mr-5'>
                            <option value="default"> <img src={light} alt="" />Default</option>
                            <option value="default">White</option>
                            <option value="default">Black</option>
                        </select>
                        <div className="flex">
                        <button className='text-white bg-[#3c6e71] w-[60px] h-[34px] flex items-center justify-center cursor-pointer hover:bg-[#458a8f] rounded mr-2'>Login</button>
                        <button className='text-white bg-[#3c6e71] w-[60px] h-[34px] flex items-center justify-center cursor-pointer hover:bg-[#458a8f] rounded mr-2'>Signup</button>
                        </div>
                    </div>
                  
                </div>
            </nav>
        </header>
    );
}