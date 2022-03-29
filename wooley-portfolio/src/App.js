import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';

// FontAwesome Imports
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


// Components/Pages imported below
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects';
import Welcome from './components/Welcome';

// Adding fortawesome icons to project library
library.add(faBars)

function App() {
  return (
    <Router>
      <div className='h-screen '>
        <main className='h-full '>
          <Routes>
            <Route path ="/" element={ <Welcome/> } />
            <Route path ="/home" element={ <Homepage/> } />
            <Route path ="/about" element={ <AboutMe/> } />
            <Route path ="/projects" element={ <Projects/> } />
            <Route path ="/contact" element={ <Contact/> } />
          </Routes>
        </main>
        
        <Footer />

      </div>
    </Router>
  );
}

export default App;
