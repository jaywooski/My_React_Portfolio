import React from 'react'
import { ExternalLink } from 'react-external-link'
import Footer from './Footer'
import Header from './Header'

function AboutMe() {
  return (
    <div className='h-full md:h-max lg:h-full flex flex-col border-4 bg-me_about bg-cover bg-repeat-y bg-center '>
      {/* bg-center bg-me_about bg-cover bg-no-repeat  */}
      <Header />
      <div className='flex flex-col h-full '>
        <div className='w-full text-center text-xl bg-blue-500 border border-4 border-blue-800 text-white top-12  z-10'>About Me</div>
        <div className='h-full md:h-fit lg:py-auto flex flex-col justify-center '> 
            {/* <div className='h-3/5 overflow-auto' > */}
              {/* <img src='./assets/IMG_3860.PNG' alt='Picture of me'/> */}
              <p className='h-80 overflow-auto sm:h-3/5 xl:h-fit w-1/2 sm:w-1/3 backdrop-blur text-white bg-sky-800 p-2 tracking-widest sm:text-xl font-sans md:pb-auto'>
                  Hi, I'm John Wooley. I'm currently an up and coming full-stack developer. I'm looking for new opportunities in the job field to
                  become one of the best assets to an interested development team.
                  I'm from Nashville, Tennessee born and raised. I consider myself creative too but I'm always going 
                  to consider myself a student of the game because it is so much to learn in this field. Check out
                  my page! I'll always return here to update some things from time to time. <ExternalLink className='text-blue-700 bg-white underline transition ease-in-out duration-300 hover:text-white hover:bg-blue-500' href="mailto:John.M.Wooley@gmail.com">Click Here</ExternalLink> to reach out to me about a task you need done or if you're down
                  to collaborate on a project. You can even stop by and say hi or give feedback about my page. I'm 
                  just a click away, always.
              </p>
            {/* </div> */}
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default AboutMe
