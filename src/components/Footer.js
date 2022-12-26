import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from 'react-external-link'

function Footer() {

  const f_style = {
    fontSize: '30px',
    backgroundColor: 'white',
    marginTop: '5px'
  }

  return (
    <div className='footer'>
       <ExternalLink className='' href='https://www.linkedin.com/in/john-wooley-545957221/'><FontAwesomeIcon style={f_style} icon="fa-brands fa-linkedin" /></ExternalLink>
       <ExternalLink className='' href='https://github.com/jaywooski'><FontAwesomeIcon style={f_style} icon="fa-brands fa-github" /></ExternalLink>
    </div>
  )
}

export default Footer
