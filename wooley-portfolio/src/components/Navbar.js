import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navbar() {
  return (
    <div className='flex justify-around text-xl mt-auto p-2 w-full'>
        <Link to='/home'>
            <div className=' hover:bg-blue-700 hover:text-white active:bg-indigo-800 rounded-xl p-4 transition ease-in'>
                Home
            </div>
        </Link>
        <Link to='/about'>
            <div className=' hover:bg-blue-700 hover:text-white active:bg-indigo-800 rounded-xl p-4 transition ease-in'>
                About
            </div>
        </Link>
        <Link to='/contact'>
            <div className=' hover:bg-blue-700 hover:text-white active:bg-indigo-800 rounded-xl p-4 transition ease-in'>
                Contact
            </div>
        </Link>
    </div>
  )
}

export default Navbar