import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Homepage() {
  return (
    <section className=''>
      {/* < Header/> */}
        <div className=''>
          {/* <img className='w-2/3 ' src='./assets/DSC06953_Original.jpg'/> */}
          <div className='homepage'>
            <p className=''>Welcome to My Portfolio</p>
            <p className=''>Navigating through my pages, you should be able to see my work, contact info and just a touch of my style. I hope you enjoy..</p>
          </div>
          {/* <div className='bg-me_2 bg-center bg-cover bg-fixed mt-16 py-6 sm:w-1/2 outline outline-blue-600'>
            <img src='./assets/DSC06953_Original.jpg' alt='Picture of me' />
          </div> */}
        </div>
      {/* <Footer /> */}
    </section>
    
  )
}

export default Homepage
