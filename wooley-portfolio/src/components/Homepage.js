import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Homepage() {
  return (
    <section className='h-screen bg-me_2 bg-contain lg:bg-cover bg-bottom  bg-no-repeat'>
        < Header/>
      <div className='flex flex-col justify-start text-white text-center lg:py-40 p-12'>
        <div className="flex flex-col md:py-96">
          <p className='backdrop-contrast-50 uppercase tracking-widest'>Welcome to My Portfolio</p>
          <p className='backdrop-contrast-50 uppercase tracking-widest'>Navigating through my pages, you should be able to see my work, contact info and just a touch of my style. I hope you enjoy..</p>
          {/* <img src='./assets/DSC06953_Original.jpg' alt='Picture of me' /> */}
        </div>
      </div>
        {/* <Footer /> */}
    </section>
    
  )
}

export default Homepage
