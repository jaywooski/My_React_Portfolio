import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link';

// Imported components
import Footer from './Footer'
import Header from './Header'

function Projects() {
  return (
    <div>
      {/* <Header/> */}
      
      <div className=''>
          <div className=''>Here Are Some of My Projects</div>
          {/* Featured Project Display */}
          <div className=''> 
              <div className=''>Featured Project</div>
              <ExternalLink href='https://catro-gaming.herokuapp.com/'>
              <div className=''>
                  <div className=''>Catro Gaming</div>
                  <img src="./assets/Arcatro_logo_4.png" alt="Programmer-Dashboard"/>
                  
              </div>
              </ExternalLink>
              <ExternalLink href='https://github.com/JoelKovalcson/Catro-Gaming'>
                <div className=''>Github Repo Link Here</div>
              </ExternalLink>
          </div>

          {/* Rest of projects presented below  */}
          <div className=''>
            <div className=''>Other Projects:</div>
            <ul className=''>
              <li className=''>
                <ExternalLink href='https://jaywooski.github.io/Horiseon-challenge1/'>
                  <div className=''>Horiseon</div>
                  <img src="./assets/Screenshot 2021-11-28 192625.png" alt="Horiseon"/>
                </ExternalLink>
                {/* github link */}
                <ExternalLink href='https://github.com/jaywooski/Horiseon-challenge1'>
                  <div className=''>Github Repo Link Here</div>
                </ExternalLink>
              </li>
              <li className=''>
                <ExternalLink href='"https://jaywooski.github.io/Password-Generator-Wooley-3/'>
                  <div className=''>Password Generator</div>
                  <img src="./assets/Screenshot 2021-11-28 192804.png" alt="Password Generator"/>
                </ExternalLink>
                {/* github link */}
                <ExternalLink href='https://github.com/jaywooski/Password-Generator-Wooley-3'>
                  <div className=''>Github Repo Link Here</div>
                </ExternalLink>
              </li>
              <li className=''>
                <ExternalLink href='https://jaywooski.github.io/Wooley-Weather-Dashboard-Chal-6/'>
                <div className=''>Weather Forecast</div>
                  <img src="./assets/Screenshot 2021-11-28 193337.png" alt="Weather Forecast"/>
                </ExternalLink>
                {/* github link */}
                <ExternalLink href='https://github.com/jaywooski/Wooley-Weather-Dashboard-Chal-6'>
                  <div className=''>Github Repo Link Here</div>
                </ExternalLink>
              </li>
              <li className=''>
                <ExternalLink href='https://joelkovalcson.github.io/Programmer-Dashboard'>
                <div className=''>Programmer Dashboard</div>
                  <img src="./assets/Screenshot 2021-11-28 193523.png" alt="Programmer-Dashboard"/>
                </ExternalLink>
                {/* Github Link */}
                <ExternalLink href='https://github.com/JoelKovalcson/Programmer-Dashboard'>
                  <div className=''>Github Repo Link Here</div>
                </ExternalLink>
              </li>
              <li className=''>
                <ExternalLink href='https://chattleship.herokuapp.com/'>
                <div className=''>Chattleship</div>
                  <img src="./assets/Screenshot 2022-01-30 174319.png" alt="Chattleship"/>
                </ExternalLink>
                {/* github link */}
                <ExternalLink href='https://github.com/JoelKovalcson/ChattleShip'>
                  <div className=''>Github Repo Link Here</div>
                </ExternalLink>
              </li>
            </ul>
          </div>

        </div>

        {/* <Footer/> */}
    </div>
  )
}

export default Projects
