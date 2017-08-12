import React, { Component } from 'react';
import style from './SignUpPage.css';
import Form from '../presentational/Form/form';
import { Button } from 'semantic-ui-react';
import logo from '../image/logo.png';
import Header from '../presentational/Header/header'

class LandingPage extends Component {
  render() {
    return(
      <div className="background1 signuppage">
        <div className="center-child">
          <Header/>
        </div>

        <div className="center-child logo-container2">
          <img src={logo} className="logo"/>
        </div>

        <div className="input-form input-form-padding">
          <Form
            icon = "mail"
            placeholder = "Email"
          />
        </div>

        <div className="input-form password-input">
          <Form
            icon = "lock"
            placeholder = "Password"
          />
        </div>

        <div className="center-child signin-padding">
          <Button basic size='large'>
            <h4>SIGN IN</h4>
          </Button>
        </div>

        <div className="center-child password-input">
          <p className="white">Forgot Password?</p>
        </div>

        <div className="center-child signin-padding">
          <h3 className="white signup-text">Sign Up</h3>
        </div>

      </div>
    )
  }
}

export default LandingPage;
