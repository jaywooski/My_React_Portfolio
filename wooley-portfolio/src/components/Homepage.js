import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Homepage() {
  return (
    <section className='h-full flex flex-col '>
      {/* bg-me_2 bg-cover bg-top sm:bg-cover   bg-no-repeat */}
        < Header/>
          <div className='flex h-full bg-me_2 bg-contain bg-center bg-repeat lg:bg-repeat-x border-4 justify-center text-white text-center'>
            {/* <img className='w-2/3 ' src='./assets/DSC06953_Original.jpg'/> */}
            <div className="h-full lg:mt-auto">
              <p className='text-3xl backdrop-contrast-50 uppercase tracking-widest'>Welcome to My Portfolio</p>
              <p className='backdrop-contrast-50 uppercase tracking-widest'>Navigating through my pages, you should be able to see my work, contact info and just a touch of my style. I hope you enjoy..</p>
              {/* <img src='./assets/DSC06953_Original.jpg' alt='Picture of me' /> */}
            </div>
          </div>
        {/* <Footer /> */}
    </section>
    
  )
}

export default Homepage
