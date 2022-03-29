import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function Projects() {
  return (
    <div>
      <div><Header/></div>
      
      <div>
      <div >
            <h1>Here Are Just a Few of My Projects</h1>
            <div className='h-48'> 
                <h2>Featured Project</h2>
                <Link to='https://catro-gaming.herokuapp.com/'>
                <div>
                    <h3>Catro Gaming</h3>
                    <img src="./assets/Arcatro_logo_4.png" alt="Programmer-Dashboard"/>
                </div>
                </Link>
            </div>
            <div>
              <ul className='flex justify-around'>
                <li>
                  <Link to='https://jaywooski.github.io/Horiseon-challenge1/'>
                    <h3>Horiseon</h3>
                    <img src="./assets/Screenshot 2021-11-28 192625.png" alt="Horiseon"/>
                  </Link>
                </li>
              </ul>
                <div>
                    
                </div>
                {/* <div>
                    <h3>Password Generator</h3>
                    <a href="https://jaywooski.github.io/Password-Generator-Wooley-3/"><img src="./assets/Screenshot 2021-11-28 192804.png" alt="Password Generator"></a>
                </div>
                
                <div>
                    <h3>Weather Forecast</h3>
                    <a href="https://jaywooski.github.io/Wooley-Weather-Dashboard-Chal-6/"><img src="./assets/Screenshot 2021-11-28 193337.png" alt="Weather Forecast"></a>
                </div>
                <div>
                    <h3>Programmer Dashboard</h3>
                    <a href="https://joelkovalcson.github.io/Programmer-Dashboard"><img src="./assets/Screenshot 2021-11-28 193523.png" alt="Programmer-Dashboard"></a>
                </div>
                <div>
                    <h3>Chattleship</h3>
                    <a href="https://chattleship.herokuapp.com/"><img src="./assets/Screenshot 2022-01-30 174319.png" alt="Chattleship"></a>
                </div> */}
            </div>
        </div>
        <div>
          
        </div>
      </div>  
      
      <div><Footer/></div>
    </div>
  )
}

export default Projects
