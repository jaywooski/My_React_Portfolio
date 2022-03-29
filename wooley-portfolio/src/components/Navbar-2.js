import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navbar_2() {
  return (
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

    </div>
  )
}

export default Navbar_2
