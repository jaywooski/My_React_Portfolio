import React from 'react'
import { Link } from 'react-router-dom' 
import Dropdown from './Dropdown'
import Navbar from './Navbar'
import Tester from './Tester'

function Header() {
  return (
    <div className='h-28 flex justify-center border-4 border-blue-600 drop-shadow shadow-lg bg-gradient-to-r from-black to-blue-700 sticky top-0 z-50' >
      <div className='hidden sm:flex w-full'>
        <Navbar/>
      </div>
      <div className='text-center my-auto sm:hidden'>
        <Dropdown />
      </div>
    </div>
  )
}

export default Header
