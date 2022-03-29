import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Dropdown() {
  return (
    <div className='flex justify-center'>
      <div className='flex justify-center text-xl my-auto p-2'>Menu </div>
      <button id='dropdownDefault' data-dropdown-toggle='dropdown' className='my-auto text-center text-xl inline-flex items-center' type='button'>
        {/* Button icon goes here */}
        <FontAwesomeIcon icon="fa-solid fa-bars" className='hover:scale-125 transition ease-in-out duration-200' />
      </button>
      {/* Dropdown menu below */}
      <div id='dropdown' className='hidden z-10 transition ease-in-out w-full divide-y border border-green-800 bg-white'>
        <ul className='text-gray-700 text-center h-1/2 border flex-col justify-around' aria-labelledby='dropdownDefault'>
          <Link className=' ' to="/home">
            <li className='block py-2 px-4 border transition ease-in-out duration-300 hover:text-white hover:bg-blue-500'>Home</li>
          </Link>
          <Link to="/about">
            <li className='block py-2 px-4 border transition ease-in-out duration-300 hover:text-white hover:bg-blue-500'>About</li>
          </Link>
          <Link to="/projects">
            <li className='block py-2 px-4 border transition ease-in-out duration-300 hover:text-white hover:bg-blue-500'>Projects</li>
          </Link>
          <Link to="/contact">
            <li className='block py-2 px-4 border transition ease-in-out duration-300 hover:text-white hover:bg-blue-500'>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
