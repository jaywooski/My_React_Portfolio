import React from 'react'
import { Link } from 'react-router-dom' 
import Dropdown from './Dropdown'
import Navbar from './Navbar'
import Tester from './Tester'

function Header() {
  return (
    <div className='header' >
      <div className='desktop'>
        <Navbar/>
      </div>
      <div className='mobile dropdown'>
        <Dropdown />
      </div>
    </div>
  )
}

export default Header
