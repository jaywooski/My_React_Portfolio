import React from 'react';
import { browserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects';


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <main>
          <Switch>
            <Route exact path ="/" component={Homepage} />
            <Route exact path ="/About" component={AboutMe} />
            <Route exact path ="/Contact" component={Contact} />
            <Route exact path ="/Projects" component={Projects} />

            <Route component={None} />
          </Switch>

        </main>
        
        <Footer />

      </div>
    </Router>
  );
}

export default App;
