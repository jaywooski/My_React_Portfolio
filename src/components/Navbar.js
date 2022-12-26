import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navbar() {
  return (
    <div className=''>
        <NavLink to='/home'>
            <div className=''>
                Home
            </div>
        </NavLink>
        <Link to='/about'>
            <div className=''>
                About
            </div>
        </Link>
        <Link to='/contact'>
            <div className=''>
                Contact
            </div>
        </Link>
        <Link to='/projects'>
            <div className=''>
                Projects
            </div>
        </Link>
    </div>
  )
}

export default Navbar