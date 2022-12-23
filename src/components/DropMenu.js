import React from 'react'
import { Link } from 'react-router-dom'

const DropMenu = () => {
  
  const style_A = {
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none'
    
  }

  return (
    <div className='dropdown-list '>
        <div><Link to="/home" style={style_A}>Home</Link></div>
        <div><Link to="/about" style={style_A}>About</Link></div>
        <div><Link to="/projects" style={style_A}>Projects</Link></div>
        <div><Link to="/contact" style={style_A}>Contact</Link></div>
    </div>
  )
}
export default DropMenu