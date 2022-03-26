import React from 'react'
import Header from './Header'


function Welcome() {
  return (
    <div className='flex flex-col justify-center h-full bg-me bg-no-repeat bg-auto bg-center'>
      <div className='h-1/3 mb-40 text-3xl text-center '>Welcome to My Portfolio</div>
      <button type="button" 
      className="text-gray-900 
                mx-auto
                bg-white 
                border 
                border-gray-300 
                focus:outline-none
                hover:bg-gray-100 
                focus:ring-4 
                focus:ring-gray-200 
                font-medium 
                rounded-lg 
                text-sm 
                px-2 
                py-2 
                mt-40 
                h-12
                w-24
                dark:bg-gray-800 
                dark:text-white 
                dark:border-gray-600 
                dark:hover:bg-gray-700 
                dark:hover:border-gray-600 
                dark:focus:ring-gray-700">Enter</button>


    </div>
  )
}

export default Welcome
