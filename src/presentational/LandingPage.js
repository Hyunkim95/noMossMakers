import React, { Component } from 'react';
import Header from './Header/header';
import logo from '../image/logo.png';
import style from './LandingPage.css';

class LandingPage extends Component {
  render() {
    return(
      <div className="background1">
        <div className="center-child">
          <Header/>
        </div>
        <div className="center-child logo-container">
          <img src={logo} className="logo"/>
        </div>
          <h3 className="white text-center subheading-container">Don't wait at the queue <br/> You could be doing so much more</h3>
      </div>
    )
  }
}

export default LandingPage;