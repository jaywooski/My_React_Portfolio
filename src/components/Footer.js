import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from 'react-external-link'

function Footer() {
  return (
    <div className=''>
       <ExternalLink className='' href='https://www.linkedin.com/in/john-wooley-545957221/'><FontAwesomeIcon icon="fa-brands fa-linkedin" /></ExternalLink>
       <ExternalLink className='' href='https://github.com/jaywooski'><FontAwesomeIcon icon="fa-brands fa-github" /></ExternalLink>
    </div>
  )
}

export default Footer
