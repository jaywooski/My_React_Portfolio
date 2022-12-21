import React from 'react'
import { Link } from 'react-router-dom'

const DropMenu = () => {
  return (
    <div>
        <div><Link to="/home">Home</Link></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/projects">Projects</Link></div>
        <div><Link to="/contact">Contact</Link></div>
    </div>
  )
}
export default DropMenu