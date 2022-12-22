import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navbar() {
  return (
    <div className=''>
        <Link to='/home'>
            <div className=''>
                Home
            </div>
        </Link>
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