import React, { Component } from 'react';
import style from './FindPage.css'
import NavBar from '../presentational/navbar/navbar.js';

class FindPage extends Component {
  render() {
    return(
<<<<<<< HEAD
      <div>
        <h1>FIND </h1>
        <Link to="/select">
          <SelectButton basic size='large'>
            <h4>SELECT CLINIC</h4>
          </SelectButton>
        </Link>
=======
      <div className="background">
        <NavBar />
        <div className="input-form find-text">
          <h2>Hi there,</h2>
          <h3 className="signup-text">Let's find you a doctor</h3>
        </div>
>>>>>>> f94d823085ea6e9db038001040a7993a9a990219
      </div>
    )
  }
}

export default FindPage;
