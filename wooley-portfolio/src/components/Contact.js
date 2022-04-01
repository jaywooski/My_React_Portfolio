import React from 'react'
import { ExternalLink } from 'react-external-link'
import Footer from './Footer'
import Header from './Header'

function Contact() {
  return (
    <div className='flex flex-col h-full' >
        <Header />
      <div className='flex flex-col h-full bg-blue-700' >
        {/* Main content goes here */}
        <div className='border-4 m-auto' >
          <div className='bg-blue-500 p-4 text-lg text-white border-b-4 text-center'>Contact Info</div>
          <div className='h-fit flex flex-col flex-wrap justify-around'>
            <ExternalLink href='mailto:John.M.Wooley@gmail.com' className='p-4 m-auto transition ease-in-out duration-300 hover:text-white hover:bg-blue-500'>Email</ExternalLink> 
            <div className='p-4 m-auto transition ease-in-out duration-300 hover:text-white hover:bg-blue-500'>Number</div>
            <div className='p-4 m-auto transition ease-in-out duration-300 hover:text-white hover:bg-blue-500'>Resume</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
