import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Header from './Header'


const Welcome = () => {

    return (
      <div className=''>
        {/* <div className=''> */}
          {/* <img src='../public/assets/IMG_5069 (1).jpg'/> */}
        {/* </div> */}
        <h1 className=''>Welcome to My Portfolio</h1>
        <Link className='' to='/home'>
          <button type="button" className="" onClick={this.props.active}>Enter</button>
        </Link>
  
      </div>
    )
}

export default Welcome
