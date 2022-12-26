import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import DropMenu from './DropMenu'


const Dropdown = () => {
  const [toggled, setToggled] = useState(false);

  const handleDropDown = (e) => {
    setToggled(!toggled);
    // const area = e.target.value;
    // !area ? setToggled(!toggled) : setToggled(toggled);
  }

  return (
    <div className='header-fmt'>
      <div className='dropmenu'>
          <button onClick={handleDropDown} type='button'><FontAwesomeIcon icon="fa-solid fa-bars"/></button>
          <div className='menu-hdr' style={{fontSize: 'larger'}}>Menu</div>
      </div>
        
        {toggled ? <div className='modal'><DropMenu /></div> : null}
    </div>
  )
}


export default Dropdown
