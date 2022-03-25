import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router'

import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects';


function App() {
  return (
    <Router>
      <div className='h-screen '>
        <Header/>
        <main className='h-full bg-me bg-no-repeat bg-contain bg-top'>
          <Routes>
            <Route exact path ="/" component={Homepage} />
            <Route exact path ="/About" component={AboutMe} />
            <Route exact path ="/Contact" component={Contact} />
            <Route exact path ="/Projects" component={Projects} />

            <Route />
          </Routes>

        </main>
        
        <Footer />

      </div>
    </Router>
  );
}

export default App;
