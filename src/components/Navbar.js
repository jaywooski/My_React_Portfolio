import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navbar() {
  return (
    <div className='text-xl text-white mt-4 p-2 w-full'>
        <Link to='/'>
            <div className=' inline-block w-1/4 text-center hover:bg-blue-700 hover:text-white active:bg-indigo-800 rounded-xl p-4 transition ease-in'>
                Home
            </div>
        </Link>
        <Link to='/about'>
            <div className=' inline-block w-1/4 text-center hover:bg-blue-700 hover:text-white active:bg-indigo-800 rounded-xl p-4 transition ease-in'>
                About
            </div>
        </Link>
        <Link to='/contact'>
            <div className=' inline-block w-1/4 text-center hover:bg-blue-700 hover:text-white active:bg-indigo-800 rounded-xl p-4 transition ease-in'>
                Contact
            </div>
        </Link>
        <Link to='/projects'>
            <div className=' inline-block w-1/4 text-center hover:bg-blue-700 hover:text-white active:bg-indigo-800 rounded-xl p-4 transition ease-in'>
                Projects
            </div>
        </Link>
    </div>
  )
}

export default Navbar