import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';

// importing components
import Header from './Header';
import Footer from './Footer';
import Homepage from './Homepage';
import Contact from './Contact';
import AboutMe from './AboutMe'
import Projects from './Projects';


class EnteringPage extends Component {
    
  render() {
    return (
        <Router>
        <div className=''>
          <main className=''>
            <Header />
            <Routes>
              <Route path ="/home" element={ <Homepage/> } />
              <Route path ="/about" element={ <AboutMe/> } />
              <Route path ="/projects" element={ <Projects/> } />
              <Route path ="/contact" element={ <Contact/> } />
            </Routes>
          <Footer />
          </main>
  
        </div>
      </Router>
    )
  }
}

export default EnteringPage