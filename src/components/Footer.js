import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from 'react-external-link'

function Footer() {
  return (
    <div className='h-28 text-5xl flex justify-around border-4 border-blue-600 drop-shadow shadow-lg bg-gradient-to-r from-black to-blue-700 sticky bottom-0 z-50'>
       <ExternalLink className='p-8' href='https://www.linkedin.com/in/john-wooley-545957221/'><FontAwesomeIcon icon="fa-brands fa-linkedin" /></ExternalLink>
       <ExternalLink className='p-8' href='https://github.com/jaywooski'><FontAwesomeIcon icon="fa-brands fa-github" /></ExternalLink>
    </div>
  )
}

export default Footer
