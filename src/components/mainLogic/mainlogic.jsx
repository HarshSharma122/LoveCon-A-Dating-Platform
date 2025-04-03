import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


import light from '../../assets/summer.png'
import dark from '../../assets/moon.png'
import accoutImg from '../../assets/account.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MainLogicHero from './mainLogicHero'



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
    <>
      <header className="shadow  z-50 top-0">
        <nav className="border-gray-200 px-4 lg:px-6 py-6" >
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <h1 className='flex text-black-700  text-2xl font-medium logoh1'>Love<h1 className='text-[#3c6e71]'>Con</h1></h1>
            </Link>
            {/* <Link className='flex font-medium text-l'>
              <li className='list-none mr-3'><AnchorLink offset={50} href='#about'><a>Profies</a></AnchorLink></li>
              <li className='list-none mr-3'><AnchorLink offset={50} href='#about'><a>About</a></AnchorLink></li>
            </Link> */}


            <div className="flex items-center lg:order-2">
              <div className="flex">
                
                <NavLink to='/dateingProfileCrea'>
                <button className='mr-3 bg-[#3c6e71] text-white p-2 cursor-pointer'> Create Dating Profile</button>
                </NavLink>
                <NavLink to="/account">
                  <div class="account_section">
                    <div class="account_section_butto" id="account_section_button">
                      
                      <img className='w-8' src= {accoutImg} alt="" />
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>

          </div>
        </nav>
      </header>

      <MainLogicHero/>
    </>
  );
}