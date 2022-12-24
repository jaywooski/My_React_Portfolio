import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';

// FontAwesome Imports
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


// Components/Pages imported below
import Welcome from './components/Welcome';
import EnteringPage from './components/EnteringPage';
import './css/styles.css'
// importing components


// Adding fortawesome icons to project library
library.add(faBars, faLinkedin, faGithub)

const App = () => {
  const [isActive, setActive] = useState(true)

  // useEffect(() => {
    
    // (!isActive) ? null : alert('isActive is set to true!')
    // return () => {
    //   second
    // }
  // }, [isActive])
  
  /*I want to create the ability for the state to remain the same even if the page is refreshed.*/


  const handleWelcoming = () => {
    setActive(!isActive)
  }

  return (
    <div>
      {isActive ? <Welcome active={handleWelcoming}/> : <EnteringPage />}
    </div>
  );
}

export default App;
