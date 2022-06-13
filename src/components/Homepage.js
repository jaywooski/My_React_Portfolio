import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Homepage() {
  return (
    <section className=''>
      < Header/>
        <div className='h-screen bg-me_2 bg-cover bg-center sm:bg-contain md:bg-repeat-x bg-fixed'>
          {/* <img className='w-2/3 ' src='./assets/DSC06953_Original.jpg'/> */}
          <div className='fixed backdrop-contrast-50 w-full top-28 z-10'>
            <p className='text-center text-3xl uppercase tracking-widest'>Welcome to My Portfolio</p>
            <p className='text-center uppercase tracking-widest'>Navigating through my pages, you should be able to see my work, contact info and just a touch of my style. I hope you enjoy..</p>
          </div>
          {/* <div className='bg-me_2 bg-center bg-cover bg-fixed mt-16 py-6 sm:w-1/2 outline outline-blue-600'>
            <img src='./assets/DSC06953_Original.jpg' alt='Picture of me' />
          </div> */}
        </div>
      <Footer />
    </section>
    
  )
}

export default Homepage
