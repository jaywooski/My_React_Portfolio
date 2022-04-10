import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link';

// Imported components
import Footer from './Footer'
import Header from './Header'

function Projects() {
  return (
    <div>
      <Header/>
      
      <div className='flex flex-col justify-center '>
          <div className='py-8 text-center text-2xl border-b-4 border-blue-600'>Here Are Some of My Projects</div>
          {/* Featured Project Display */}
          <div className='h-max flex flex-col justify-center my-4 py-8'> 
              <div className='text-center text-xl text-white p-6 my-8 bg-blue-500 border border-4 border-blue-800 sticky top-28 z-10'>Featured Project</div>
              <ExternalLink href='https://catro-gaming.herokuapp.com/'>
              <div className='flex flex-col border-2 rounded-t-lg drop-shadow shadow-lg active:scale-50 hover:animate-pulse hover:bg-indigo-600 hover:-translate-y-1  transition ease-in'>
                  <div className='text-center rounded-t-lg bg-blue-500 py-4 text-white '>Catro Gaming</div>
                  <img src="./assets/Arcatro_logo_4.png" alt="Programmer-Dashboard"/>
              </div>
              </ExternalLink>
          </div>

          {/* Rest of projects presented below  */}
          <div className='flex flex-col'>
            <div className='text-xl text-center text-white my-8 py-4 bg-blue-500 border border-4 border-blue-800 sticky top-28  z-10'>Other Projects:</div>
            <ul className='flex flex-wrap justify-around my-8 py-8 border'>
              <li className='flex flex-col border-2 rounded-t-lg drop-shadow shadow-lg active:scale-50 hover:animate-pulse hover:bg-indigo-600 hover:-translate-y-1  transition ease-in'>
                <ExternalLink href='https://jaywooski.github.io/Horiseon-challenge1/'>
                  <div className='text-center rounded-t-lg bg-blue-500 py-2 text-white'>Horiseon</div>
                  <img src="./assets/Screenshot 2021-11-28 192625.png" alt="Horiseon"/>
                </ExternalLink>
              </li>
              <li className='flex flex-col border-2 rounded-t-lg drop-shadow shadow-lg active:scale-50 hover:animate-pulse hover:bg-indigo-600 hover:-translate-y-1  transition ease-in'>
                <ExternalLink href='"https://jaywooski.github.io/Password-Generator-Wooley-3/'>
                  <div className='text-center rounded-t-lg bg-blue-500 py-2 text-white'>Password Generator</div>
                  <img src="./assets/Screenshot 2021-11-28 192804.png" alt="Password Generator"/>
                </ExternalLink>
              </li>
              <li className='flex flex-col border-2 rounded-t-lg drop-shadow shadow-lg active:scale-50 hover:animate-pulse hover:bg-indigo-600 hover:-translate-y-1  transition ease-in'>
                <ExternalLink href='https://jaywooski.github.io/Wooley-Weather-Dashboard-Chal-6/'>
                <div className='text-center rounded-t-lg bg-blue-500 py-2 text-white'>Weather Forecast</div>
                  <img src="./assets/Screenshot 2021-11-28 193337.png" alt="Weather Forecast"/>
                </ExternalLink>
              </li>
              <li className='flex flex-col border-2 rounded-t-lg drop-shadow shadow-lg active:scale-50 hover:animate-pulse hover:bg-indigo-600 hover:-translate-y-1  transition ease-in'>
                <ExternalLink href='https://joelkovalcson.github.io/Programmer-Dashboard'>
                <div className='text-center rounded-t-lg bg-blue-500 py-2 text-white'>Programmer Dashboard</div>
                  <img src="./assets/Screenshot 2021-11-28 193523.png" alt="Programmer-Dashboard"/>
                </ExternalLink>
              </li>
              <li className='flex flex-col border-2 rounded-t-lg drop-shadow shadow-lg active:scale-50 hover:animate-pulse hover:bg-indigo-600 hover:-translate-y-1  transition ease-in'>
                <ExternalLink href='https://chattleship.herokuapp.com/'>
                <div className='text-center rounded-t-lg bg-blue-500 py-2 text-white'>Chattleship</div>
                  <img src="./assets/Screenshot 2022-01-30 174319.png" alt="Chattleship"/>
                </ExternalLink>
              </li>
            </ul>
          </div>

        </div>

        {/* <div><Footer/></div> */}
    </div>
  )
}

export default Projects
