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
              <div className='flex flex-col w-3/5 mx-auto border-2 rounded-t-lg drop-shadow shadow-lg  hover:animate-pulse hover:bg-indigo-600 hover:-translate-y-1  transition ease-in'>
                  <div className='text-center rounded-t-lg bg-blue-500 py-4 text-white '>Catro Gaming</div>
                  <img src="./assets/Arcatro_logo_4.png" alt="Programmer-Dashboard"/>
                  <div>Catro-Gaming is a scalable arcade gaming application designed to give users a central hub to play their favorite games. The platform was based on the MERN stack, as well as using Apollo to put a GraphQL interface over the MongoDB
                     backend. Styling was accomplished with Tailwindcss and associated plugins.</div>
                  
              </div>
              </ExternalLink>
              <ExternalLink href='https://github.com/JoelKovalcson/Catro-Gaming'>
                <div className='mx-auto w-3/5 h-12 text-center border border-2 border-blue-700 text-blue-800 hover:animate-pulse hover:bg-blue-800 hover:text-white hover:-translate-y-1  transition ease-in '>Github Repo Link Here</div>
              </ExternalLink>
          </div>

          {/* Rest of projects presented below  */}
          <div className='flex flex-col pb-20'>
            <div className='text-xl text-center text-white my-8 py-4 bg-blue-500 border border-4 border-blue-800 sticky top-28  z-10'>Other Projects:</div>
            <ul className='flex flex-wrap justify-around my-8 py-8 border'>
              <li className='flex flex-col mx-auto w-3/5 border-2 rounded-t-lg drop-shadow shadow-lg  hover:-translate-y-1 hover:animate-pulse transition ease-in'>
                <ExternalLink href='https://jaywooski.github.io/Horiseon-challenge1/'>
                  <div className='text-center rounded-t-lg bg-blue-500 py-2 text-white'>Horiseon</div>
                  <img src="./assets/Screenshot 2021-11-28 192625.png" alt="Horiseon"/>
                  <div>This site is intended for consumer use to make the homepage of the site easy to read, well-organized, and aesthetically pleasing to view. 
                    Please note this is code is in the developmental stage to be cleared for approval. This project utilizes HTML and CSS general techniques.</div>
                </ExternalLink>
                {/* github link */}
                <ExternalLink href='https://github.com/jaywooski/Horiseon-challenge1'>
                  <div className='flex justify-center border border-2 border-blue-700 text-blue-800 bg:white hover:animate-pulse hover:bg-blue-800 hover:-translate-y-1 hover:text-white transition ease-in '>Github Repo Link Here</div>
                </ExternalLink>
              </li>
              <li className='flex flex-col border-2 mx-auto w-3/5 my-8 rounded-t-lg drop-shadow shadow-lg  hover:animate-pulse hover:-translate-y-1 transition ease-in'>
                <ExternalLink href='https://jaywooski.github.io/Password-Generator-Wooley-3/'>
                  <div className='text-center rounded-t-lg bg-blue-500 py-2 text-white '>Password Generator</div>
                  <img src="./assets/Screenshot 2021-11-28 192804.png" alt="Password Generator"/>
                  <div>Here, I have developed a very unique password generator which selects random data as user selected criteria to fit the needs. It takes into account the length of 
                    the password and the character types as required and selected by the user. This project includes basic HTML, JavaScript and standard CSS.</div>
                </ExternalLink>
                {/* github link */}
                <ExternalLink href='https://github.com/jaywooski/Password-Generator-Wooley-3'>
                  <div className='flex justify-center border border-2 border-blue-700 text-blue-800 bg:white hover:animate-pulse hover:bg-blue-800 hover:-translate-y-1 hover:text-white transition ease-in '>Github Repo Link Here</div>
                </ExternalLink>
              </li>
              <li className='flex flex-col mx-auto w-3/5 border-2 mb-8 rounded-t-lg drop-shadow shadow-lg  hover:animate-pulse hover:-translate-y-1 transition ease-in'>
                <ExternalLink href='https://jaywooski.github.io/Wooley-Weather-Dashboard-Chal-6/'>
                <div className='text-center rounded-t-lg bg-blue-500 py-2 text-white '>Weather Forecast</div>
                  <img src="./assets/Screenshot 2021-11-28 193337.png" alt="Weather Forecast"/>
                  <div>Here I have created a weather app to check the current weather conditions and future five-day forecast for any given city. As long as you have a city name to provide, 
                    you should be able to search the information up. This project includes the touches of HTML, TailwindCSS, Javascript, API connectivity to OpenWeather.</div>
                </ExternalLink>
                {/* github link */}
                <ExternalLink href='https://github.com/jaywooski/Wooley-Weather-Dashboard-Chal-6'>
                  <div className='flex justify-center border border-2 border-blue-700 text-blue-800 bg:white hover:animate-pulse hover:bg-blue-800 hover:-translate-y-1 hover:text-white transition ease-in '>Github Repo Link Here</div>
                </ExternalLink>
              </li>
              <li className='flex flex-col mx-auto w-3/5 border-2 mb-8 rounded-t-lg drop-shadow shadow-lg  hover:animate-pulse hover:-translate-y-1 transition ease-in'>
                <ExternalLink href='https://joelkovalcson.github.io/Programmer-Dashboard'>
                <div className='text-center rounded-t-lg bg-blue-500 py-2 text-white '>Programmer Dashboard</div>
                  <img src="./assets/Screenshot 2021-11-28 193523.png" alt="Programmer-Dashboard"/>
                  <div>This project was designed for a group to come up with an original application using 3rd party APIs. Languages used in this project include HTML, TailwindCSS, as well as JavaScript.</div>
                </ExternalLink>
                {/* Github Link */}
                <ExternalLink href='https://github.com/JoelKovalcson/Programmer-Dashboard'>
                  <div className='flex justify-center border border-2 border-blue-700 text-blue-800 bg:white hover:animate-pulse hover:-translate-y-1 hover:bg-blue-800 hover:text-white transition ease-in '>Github Repo Link Here</div>
                </ExternalLink>
              </li>
              <li className='flex flex-col mx-auto w-3/5 border-2 rounded-t-lg drop-shadow shadow-lg  hover:animate-pulse hover:-translate-y-1 transition ease-in'>
                <ExternalLink href='https://chattleship.herokuapp.com/'>
                <div className='text-center rounded-t-lg bg-blue-500 py-2 text-white '>Chattleship</div>
                  <img src="./assets/Screenshot 2022-01-30 174319.png" alt="Chattleship"/>
                  <div>Chattleship is an online game inspired by the classic game Battleship. The current game supports a few features such as chatting with your enemy in a game, board setup and previewing when creating/joining a game, 
                    persistent game sessions so you can pickup a game where you left off and no more lying friends about missing at C5. In this project we used TailwindCSS, standard CSS, HTML, JavaScript, Node.js, MySQL and Express.js. </div>
                </ExternalLink>
                {/* github link */}
                <ExternalLink href='https://github.com/JoelKovalcson/ChattleShip'>
                  <div className='flex justify-center border border-2 border-blue-700 text-blue-800 bg:white hover:animate-pulse hover:-translate-y-1 hover:bg-blue-800 hover:text-white transition ease-in '>Github Repo Link Here</div>
                </ExternalLink>
              </li>
            </ul>
          </div>

        </div>

        <Footer/>
    </div>
  )
}

export default Projects
