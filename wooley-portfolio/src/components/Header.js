import React from 'react'
import { Link } from 'react-router-dom' 
import Dropdown from './Dropdown'
import Navbar from './Navbar'
import Tester from './Tester'

function Header() {
  return (
    <div className='h-36 flex justify-center border-2 border-yellow-400'>
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
