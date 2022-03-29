import React from 'react'
import { Link } from 'react-router-dom' 
import Dropdown from './Dropdown'
import Navbar from './Navbar'
import Tester from './Tester'

function Header() {
  return (
<<<<<<< HEAD
    <div className='h-36 flex justify-center border-2 border-yellow-400'>
      <div className='hidden sm:flex w-full'>
        <Navbar/>
      </div>
      <div className='text-center my-auto sm:hidden'>
        <Dropdown />
      </div>
=======
    <div className='h-48 border-2 border-yellow-400'>
        <Navbar/>
>>>>>>> 2a7e436034c790ae3679347ca9a932ff8fe2e1a7
    </div>
  )
}

export default Header
