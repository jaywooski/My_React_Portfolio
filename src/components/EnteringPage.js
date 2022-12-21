import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';

// importing components
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects';


class EnteringPage extends Component {
    
  render() {
    return (
        <Router>
        <div className='h-screen '>
          <main className='h-full '>
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