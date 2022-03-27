import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// Imported Components
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects';
import Welcome from './components/Welcome';

library.add( /*fab,*/faBars)

function App() {
  return (
    <Router>
      <div className='h-screen '>
        <main className='h-full '>
          <Homepage/>
          
          {/* <Switch>
            <Route>
              <Welcome/>
            </Route>
            <Route>
            </Route>
          </Switch> */}

        </main>
        
        <Footer />

      </div>
    </Router>
  );
}

export default App;
