import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Dropdown() {
  return (
    <div>
      {/* <div >Menu </div> */}
      <label for='dropdown-menu'>Menu</label>
      <select name='options' id='dropdown-menu' >
          <option value='home'><Link className=' ' to="/">Home</Link></option>
          <option value='about' ><Link to="/about">About</Link></option>
          <option value='projects' ><Link to="/projects">Projects</Link></option>
          <option value='contact' ><Link to="/contact">Contact</Link></option>
      </select>
      {/* <button  type='button'> */}
        {/* Button icon goes here */}
        {/* <FontAwesomeIcon icon="fa-solid fa-bars" className='hover:scale-125 transition ease-in-out duration-200' /> */}
      {/* </button> */}
      {/* Dropdown menu below */}
      {/* <div id='dropdown' className='hidden z-10 transition ease-in w-full divide-y border border-green-800 bg-white'> */}
        {/* <ul className='text-gray-700 text-center h-1/2 border flex-col justify-around' aria-labelledby='dropdownDefault'> */}
        {/* </ul> */}
      {/* </div> */}
    </div>
  )
}

export default Dropdown
