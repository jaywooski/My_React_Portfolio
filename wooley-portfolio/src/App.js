import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects';
import Welcome from './components/Welcome';


function App() {
  return (
    <Router>
      <div className='h-screen '>
        <main className='h-full '>
          <Welcome/>

        </main>
        
        <Footer />

      </div>
    </Router>
  );
}

export default App;
