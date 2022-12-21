import React from 'react'
import { Link } from 'react-router-dom' 
import Dropdown from './Dropdown'
import Navbar from './Navbar'
import Tester from './Tester'

function Header() {
  return (
    <div className='' >
      <div className=''>
        <Navbar/>
      </div>
      <div className=''>
        <Dropdown />
      </div>
    </div>
  )
}

export default Header
