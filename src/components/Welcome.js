import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Header from './Header'


class Welcome extends Component {

  
  // const shouldRedirect = true;
  // const navigate = useNavigate();
  
  // useEffect(() => {
    // (shouldRedirect) ? navigate('/home') : null
  // })
  
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
      <div className='welcome'>
        <div className=''>
          {/* <img src='../public/assets/IMG_5069 (1).jpg'/> */}
        </div>
        <h1 className=''>Welcome to My Portfolio</h1>
        {/* <Link className='' to='/home'> */}
          <button id='welcome-btn' type="button" className="" onClick={this.props.active}>Enter</button>
        {/* </Link> */}
  
      </div>
    )
  }
}

export default Welcome
