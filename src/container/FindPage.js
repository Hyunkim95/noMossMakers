import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import style from './FindPage.css'
import NavBar from '../presentational/navbar/navbar.js';
import Search from '../presentational/customSearchBar/customSearchBar'

class FindPage extends Component {
  render() {
    return(
      <div className="background">
        <NavBar />
        <div className="input-form find-text">
          <h2>Hi there,</h2>
          <h3 className="signup-text">Let's find you a doctor</h3>
        </div>

        <Search />

        <Link to="/select">
          <Button basic size='large'>
            <h4>SELECT</h4>
          </Button>
        </Link>



      </div>
    )
  }
}

export default FindPage;
