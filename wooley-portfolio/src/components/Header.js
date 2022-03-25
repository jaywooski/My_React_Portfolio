import React from 'react'
import { Link } from 'react-router-dom' 

function Header() {
  return (
    <div className='h-48 border-2 border-yellow-400'>
      < Link to='/Projects'> Click here</Link>
    </div>
  )
}

export default Header
