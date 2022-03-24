import React from 'react'
import { Link } from 'react-dom' 

function Header() {
  return (
    <div className='h-96 bg-red-500 border-2 border-yellow-400'>
      < Link to='Projects'> Click here</Link>
    </div>
  )
}

export default Header
