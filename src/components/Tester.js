import React from 'react'

function Tester() {
  return (
    <div>
        
        <div>
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="">Dropdown button </button>
        </div>
        {/* <!-- Dropdown menu --> */} 
        <div id="dropdown" className="">
            <ul className="" aria-labelledby="dropdownDefault">
                <li>
                    <a href="#" className="">Dashboard</a>
                </li>
                <li>
                    <a href="#" className="">Settings</a>
                </li>
                <li>
                    <a href="#" className="">Earnings</a>
                </li>
                <li>
                    <a href="#" className="">Sign out</a>
                </li>
            </ul>
        </div>
    </div>
    )
}


export default Tester