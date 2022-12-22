import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import DropMenu from './DropMenu'


const Dropdown = () => {
  const [toggled, setToggled] = useState(false);

  const handleDropDown = () => {
    setToggled(!toggled);
  }

  return (

    <div className='dropmenu'>
        <button onClick={handleDropDown} type='button'><FontAwesomeIcon icon="fa-solid fa-bars"/></button> Menu
        {toggled ? <div className='modal'><DropMenu /></div> : null}
    </div>
  )
}


export default Dropdown
