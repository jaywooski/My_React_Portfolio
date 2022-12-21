import React from 'react'
import { ExternalLink } from 'react-external-link'
import Footer from './Footer'
import Header from './Header'
import Resume from '../assets/resume.pdf'

function Contact() {
  return (
    <div className='' >
      {/* <Header /> */}
      {/* <div className='h-full overflow pb-40 my-40 sm:my-auto' > */}
      <div className=''>
        {/* Main content goes here */}
        <div className=''>
          Reach out to me through these provided links included in the footer and also through email as the link is provided here below too. Hope to hear from you soon!
        </div>


        <div className='' >
          <div className=''>Contact Info</div>
          <div className=''>
            <ExternalLink href='mailto:John.M.Wooley@gmail.com' className=''>Email Me: john.m.wooley@gmail.com</ExternalLink> 
            <div className=''>
              <div>Call Me @</div>
              <div>(615) 772-3035</div>
            </div>
            <ExternalLink className='' href={Resume} download='John Wooley' >Download Resume</ExternalLink>
          </div>
        </div>

      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Contact
