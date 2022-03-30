import React from 'react'
import { ExternalLink } from 'react-external-link'
import Footer from './Footer'
import Header from './Header'

function AboutMe() {
  return (
    <div className='h-full flex flex-col border-4 '>
      {/* bg-center bg-me_about bg-cover bg-no-repeat  */}
      <Header />
      <div className='flex flex-col bg-me_about bg-contain bg-center'>
        <div className='w-full text-center text-xl bg-blue-500 border border-4 border-blue-800 text-white sticky top-28 z-10'>About Me</div>
        <div className='h-3/5 lg:h-full py-1.5 mt-20 flex flex-col overflow-auto '> 
            {/* <div className='h-3/5 overflow-auto' > */}
              {/* <img src='./assets/IMG_3860.PNG' alt='Picture of me'/> */}
              <p className='w-5/12 backdrop-blur md:text-white md:bg-sky-800 p-2 tracking-widest sm:text-xl text-sky-800 font-sans md:mb-auto xl:mt-96'>
                  Hi, I'm John Wooley. I'm currently an up and coming full-stack developer. I'm looking for new opportunities in the job field to
                  become one of the best assets to an interested development team.
                  I'm from Nashville, Tennessee born and raised. I consider myself creative too but I'm always going 
                  to consider myself a student of the game because it is so much to learn in this field. Check out
                  my page! I'll always return here to update some things from time to time. <ExternalLink className='text-blue-600 underline' href="mailto:John.M.Wooley@gmail.com">Click Here</ExternalLink> to reach out to me about a task you need done or if you're down
                  to collaborate on a project. You can even stop by and say hi or give feedback about my page. I'm 
                  just a click away, always.
              </p>
            {/* </div> */}
        </div>

      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default AboutMe
