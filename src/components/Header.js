import React from 'react'
import { Link } from 'react-router-dom' 
import Dropdown from './Dropdown'
import Navbar from './Navbar'
import Tester from './Tester'

function Header() {
  return (
    <div className='flex h-28 border-4 border-blue-600 drop-shadow shadow-lg bg-gradient-to-l from-black to-blue-700 sticky top-0 z-50' >
      <div className='hidden sm:block w-full '>
        <Navbar/>
      </div>
      <div className='text-center m-auto sm:hidden'>
        <Dropdown />
      </div>
    </div>
  )
}

export default Header
