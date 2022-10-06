import React from 'react'
import { Link } from 'react-router-dom'
// import Header from './Header'


function Welcome() {
  return (
    <div className='flex flex-col justify-around h-full bg-me bg-no-repeat dark:invert-0 bg-auto bg-center md:bg-contain lg:justify-between'>
      <div className='h-full'>
        {/* <img src='../public/assets/IMG_5069 (1).jpg'/> */}
      </div>
      <h1 className=''>Welcome to My Portfolio</h1>
      <Link className='' to='/home'>
        <button type="button" 
        className="">Enter</button>

      </Link>

    </div>
  )
}

export default Welcome
