import React, { Component } from 'react';
import style from './FindPage.css'
import NavBar from '../presentational/navbar/navbar.js';

class FindPage extends Component {
  render() {
    return(
      <div className="background">
        <NavBar />
        <div className="input-form find-text">
          <h2>Hi there,</h2>
          <h3 className="signup-text">Let's find you a doctor</h3>
        </div>
      </div>
    )
  }
}

export default FindPage;
