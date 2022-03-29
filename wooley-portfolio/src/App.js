import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';

// FontAwesome Imports
=======
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
>>>>>>> 2a7e436034c790ae3679347ca9a932ff8fe2e1a7
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

<<<<<<< HEAD

// Components/Pages imported below
=======
// Imported Components
>>>>>>> 2a7e436034c790ae3679347ca9a932ff8fe2e1a7
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects';
import Welcome from './components/Welcome';

<<<<<<< HEAD
// Adding fortawesome icons to project library
library.add(faBars)
=======
library.add( /*fab,*/faBars)
>>>>>>> 2a7e436034c790ae3679347ca9a932ff8fe2e1a7

function App() {
  return (
    <Router>
      <div className='h-screen '>
        <main className='h-full '>
<<<<<<< HEAD
          <Routes>
            <Route path ="/" element={ <Welcome/> } />
            <Route path ="/home" element={ <Homepage/> } />
            <Route path ="/about" element={ <AboutMe/> } />
            <Route path ="/contact" element={ <Contact/> } />
          </Routes>
=======
          <Homepage/>
          
          {/* <Switch>
            <Route>
              <Welcome/>
            </Route>
            <Route>
            </Route>
          </Switch> */}

>>>>>>> 2a7e436034c790ae3679347ca9a932ff8fe2e1a7
        </main>
        
        <Footer />

      </div>
    </Router>
  );
}

export default App;
