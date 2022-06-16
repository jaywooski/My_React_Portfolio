import React from 'react'
import { ExternalLink } from 'react-external-link'
import Footer from './Footer'
import Header from './Header'

function AboutMe() {
  return (
    <div className=''>
      {/* bg-center bg-me_about bg-cover bg-no-repeat  */}
      <Header />
      <div className='w-full text-center text-xl bg-blue-500 outline outline-blue-800 text-white fixed top-28 z-10'>About Me</div>
      <div className='py-36 bg-me_about overflow-auto bg-center bg-cover bg-fixed 2xl:h-screen'> 
          {/* <div className='h-3/5 overflow-auto' > */}
          {/* <img src='./assets/IMG_3860.PNG' alt='Picture of me'/> */}
          <p className=' w-1/2 sm:w-1/3 text-white bg-sky-800/70 p-2 tracking-widest sm:text-xl font-sans pb-auto '>
              Hi, I'm John Wooley. I'm currently an up and coming full-stack developer. I'm looking for new opportunities in the job field to
              become one of the best assets to an interested development team.
              I'm from Nashville, Tennessee born and raised. I consider myself creative too but I'm always going 
              to consider myself a student of the game because it is so much to learn in this field. I’m a full-stack developer, with history in computer engineering looking to help build more dynamic experiences for users on the web. I earned my certificate in full stack development from Vanderbilt University, which has furthered my skills in Javascript, CSS, React.js, and responsiveness for web design. 
              I’m known as a great leader, problem solver, and role/team player.  I’m excited to showcase my skills as a developer which will challenge me based on quality, with members who have as strong a passion for coding as myself. Check out my page! I'll always return here to update some things from time to time. <ExternalLink className='text-blue-700 bg-white underline transition ease-in-out duration-300 hover:text-white hover:bg-blue-500' href="mailto:John.M.Wooley@gmail.com">Click Here</ExternalLink> to reach out to me about a task you need done or if you're down
              to collaborate on a project. You can even stop by and say hi or give feedback about my page. I'm just a click away, always.
          </p>
          {/* </div> */}
      </div>
      <Footer/>
    </div>
  )
}

export default AboutMe
