import React from 'react'
import { Link } from 'react-router-dom' 
import Navbar from './Navbar'

function Header() {
  return (
    <div className='h-48 border-2 border-yellow-400'>
        <Navbar/>
    </div>
  )
}

export default Header
