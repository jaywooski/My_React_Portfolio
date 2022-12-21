import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Header from './Header'


class Welcome extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {isActive: true};
  //   this.handleActive = this.handleActive.bind(this);
  // }

  // handleActive(){
  //   this.setState({isActive: !isActive})
  // }

  render() {
    return (
      <div className=''>
        <div className=''>
          {/* <img src='../public/assets/IMG_5069 (1).jpg'/> */}
        </div>
        <h1 className=''>Welcome to My Portfolio</h1>
        <Link className='' to='/home'>
          <button type="button" className="" onClick={this.props.active}>Enter</button>
        </Link>
  
      </div>
    )
  }
}

export default Welcome
