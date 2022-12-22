import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';

// Link CSS sheet
import './css/styles.css'

// FontAwesome Imports
// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


// Components/Pages imported below
import Welcome from './components/Welcome';
import EnteringPage from './components/EnteringPage';

// Adding fortawesome icons to project library
library.add(faBars, faLinkedin, faGithub)



const App = () => {
  const [isActive, setActive] = useState(false)

  const handleActiveState = () => {
    setActive(!isActive);
  }


  return (
    <div>
      {/* <Welcome active={handleActiveState}/> */}
      {/* {!isActive ? <Welcome /> : <EnteringPage />} */}
      <EnteringPage />
    </div>
  );
}

export default App;
