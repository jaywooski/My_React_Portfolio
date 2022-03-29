import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navbar() {
  return (
<<<<<<< HEAD
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
=======
    <div className='h-full flex flex-col text-center'>
      
        <button id="dropdownDefault" 
            data-dropdown-toggle="dropdown" 
            type="button"
            className='text-dark'>
            <FontAwesomeIcon icon="fa-solid fa-bars" />
        </button>

        <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-placement="bottom">
            <ul className="py-1 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownDefault">
                <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                </li>
            </ul>
        </div>

>>>>>>> 2a7e436034c790ae3679347ca9a932ff8fe2e1a7
    </div>
  )
}

export default Navbar