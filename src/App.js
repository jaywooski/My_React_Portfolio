<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';

// Link CSS sheet
import './css/styles.css'
=======
import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
>>>>>>> feature/styling-whole-page

// FontAwesome Imports
// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


// Components/Pages imported below
import Welcome from './components/Welcome';
import EnteringPage from './components/EnteringPage';
<<<<<<< HEAD
=======
import './css/styles.css'
import { Navigate } from 'react-router-dom';
// importing components

>>>>>>> feature/styling-whole-page

// Adding fortawesome icons to project library
library.add(faBars, faLinkedin, faGithub)



const App = () => {
<<<<<<< HEAD
  const [isActive, setActive] = useState(false)

  const handleActiveState = () => {
    setActive(!isActive);
=======
  const [isNew, setNew] = useState(JSON.parse(sessionStorage.getItem('newState')));

  useEffect(() => {

    const currentState = JSON.parse(sessionStorage.getItem('newState'));
    setNew(true);
    // if(currentState){
    //   sessionStorage.setItem('newState', false);
    //   setNew(currentState)

    // }
    sessionStorage.setItem('newState', currentState);
    setNew(currentState);

    
    }
    
  , [isNew]);

  // useEffect(() => {
    
    
  // }, [])

  // useEffect(() => {
  //   setNew(JSON.parse(sessionStorage.getItem('newState')));

  // }, [isNew])

  
  // const state = JSON.parse(sessionStorage.getItem('newState'));
  // const newState = (state) ? (state) : false ;
  
  /*I want to create the ability for the state to remain the same even if the page is refreshed.*/
  

  const handleWelcoming = () => {
    sessionStorage.setItem('newState', false);
    setNew(JSON.parse(sessionStorage.getItem('newState')));
    // // window.Event.preventDefault();
    
>>>>>>> feature/styling-whole-page
  }
  
  



  return (
    <div>
<<<<<<< HEAD
      {/* <Welcome active={handleActiveState}/> */}
      {/* {!isActive ? <Welcome /> : <EnteringPage />} */}
      <EnteringPage />
=======
      {(JSON.parse(sessionStorage.getItem('newState'))) == true ? <Welcome newUser={handleWelcoming}/> : <EnteringPage />}
>>>>>>> feature/styling-whole-page
    </div>
  );
}

export default App;
