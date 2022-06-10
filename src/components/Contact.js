import React from 'react'
import { ExternalLink } from 'react-external-link'
import Footer from './Footer'
import Header from './Header'

function Contact() {
  return (
    <div className='flex flex-col h-full' >
        <Header />
      <div className='h-full overflow my-40 sm:my-auto' >
        {/* Main content goes here */}
        <div className='mx-auto p-8 mb-12 md:mb-24 text-xl text-white drop-shadow shadow-lg border border-4 bg-gradient-to-l from-blue-500 to-blue-900 rounded-lg w-72 sm:w-96'>
          Reach out to me through these provided links included in the footer and also through email as the link is provided here below too. Hope to hear from you soon!
        </div>


        <div className='flex flex-col mx-auto text-xl text-white drop-shadow shadow-lg border border-4 bg-gradient-to-l from-blue-500 to-blue-900 rounded-lg w-72 sm:w-96' >
          <div className='flex justify-center bg-blue-500 p-12 border rounded-t-lg text-center tracking-wide text-2xl bg-gradient-to-r from-black to-blue-700 '>Contact Info</div>
          <div className='h-fit flex flex-col border rounded-b-lg flex-wrap justify-around'>
            <ExternalLink href='mailto:John.M.Wooley@gmail.com' className='text-center px-auto py-4 active:bg-indigo-800 transition ease-in-out duration-300 hover:text-white hover:bg-blue-500'>Email Me: john.m.wooley@gmail.com</ExternalLink> 
            <div className='flex flex-col text-center border-t text-center px-auto py-4 transition ease-in-out duration-300 hover:text-white hover:bg-blue-500'>
              <div>Call Me @</div>
              <div>(615) 772-3035</div>
            </div>
            <ExternalLink className='text-center px-auto py-4 border-t active:bg-indigo-800 rounded-b-lg transition ease-in-out duration-300 hover:text-white hover:bg-blue-500' href='https://my.indeed.com/p/johnw-lv6zcmi/pdf'>Download Resume</ExternalLink>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Contact
