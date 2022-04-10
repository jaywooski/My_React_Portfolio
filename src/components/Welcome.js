import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'


function Welcome() {
  return (
    <div className='flex flex-col justify-around h-full bg-me bg-no-repeat bg-auto bg-center md:bg-contain lg:justify-between'>
      <div className='h-1/3 pb-40 text-4xl font-semibold tracking-widest text-center lg:p-24 lg:text-5xl transition-transform ease-in-out duration-700 hover:-translate-y-7'>Welcome to My Portfolio</div>
      <Link className='mx-auto' to='/home'>
        <button type="button" 
        className="text-gray-900 
                  bg-white 
                  border 
                  border-gray-300 
                  focus:outline-none
                  hover:bg-gray-100
                  hover:scale-125
                  hover: transition
                  hover: ease-in-out
                  hover:duration-400 
                  active:bg-gray-600
                  active:text-white
                  focus:ring-4 
                  focus:ring-gray-200 
                  font-medium 
                  rounded-lg 
                  text-sm

                  px-2 
                  py-2 
                  mt-40 
                  lg:mb-40
                  lg:text-xl
                  lg:w-36
                  h-12
                  w-24
                  dark:bg-gray-800 
                  dark:text-white 
                  dark:border-gray-600 
                  dark:hover:bg-gray-700 
                  dark:hover:border-gray-600 
                  dark:focus:ring-gray-700">Enter</button>

      </Link>

    </div>
  )
}

export default Welcome
