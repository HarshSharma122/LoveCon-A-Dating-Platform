import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


import light from '../../assets/summer.png'
import dark from '../../assets/moon.png'



export default function Header() {
    const [selected, setselected] = useState("default");
    const [show, setshow] = useState(false);
    const [changeColor, setchangeColor] = useState('black')

    const options = [
        { value: "default", label: "Default", icon: light },
        { value: "white", label: "white", icon: light },
        { value: "black", label: "Black", icon: dark },
    ]

    return (
        <header className="shadow  z-50 top-0">
            <nav className="border-gray-200 px-4 lg:px-6 py-6" >
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <h1 className='flex text-black-700  text-2xl font-medium logoh1'>Love<h1 className='text-[#3c6e71]'>Con</h1></h1>
                    </Link>
                    <div className="flex items-center lg:order-2">


                        <button onClick={() => setshow(true)} className='mr-8 border-1 p-1 rounded-xl'>
                            {

                                options.find((opt) => opt.value === selected)?.label

                            }
                        </button>
                        <button>

                            {
                                show && (
                                    <ul onClick={() => setshow(false)} className='absolute bg-white shadow-md w-32 mt-2 rounded'>
                                        {options.map((opt) => (
                                            <li key={opt.value}
                                                className='p-2 cursor-pointer flex items-center'
                                                onClick={() => setselected(opt.value)}
                                            >{opt.icon && <img src={opt.icon} className='w-5 h-5 mr-2'></img>}
                                                {opt.label}
                                            </li>
                                        ))}
                                    </ul>
                                )

                            }

                        </button>



                        <div className="flex">
                            <button className='text-white bg-[#3c6e71] w-[60px] h-[34px] flex items-center justify-center cursor-pointer hover:bg-[#458a8f] rounded mr-2'>Login</button>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    );
}