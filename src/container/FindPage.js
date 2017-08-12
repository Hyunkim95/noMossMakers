import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input} from 'semantic-ui-react';
import style from './FindPage.css'
import NavBar from '../presentational/navbar/navbar.js';
import CustomSearchBar from '../presentational/customSearchBar/customSearchBar';
import { clinic } from '../data/clinic'

class FindPage extends Component {
  render() {
    return(
      <div className="background findpage">
        <NavBar />

        <div className="input-form find-text findpage-top-padding">
          <h2>Hi there,</h2>
          <h3 className="signup-text">Let's find you a doctor</h3>
        </div>

        <div className="find-text text-center">
          <h4>Know your centre?</h4>
        </div>

        <div className="input-form find-text">
          <CustomSearchBar
            selector = "title"
            search = {clinic}
            content = "medical centre"
          />
        </div>

        <div className="find-text text-center">
          <h4>Or</h4>
        </div>

        <div className="find-text text-center">
          <h4>Search next available centre near you</h4>
        </div>

        <div className="input-form find-text">
          <CustomSearchBar
            selector = "title"
            boolean = {false}
            content = "enter postcode"
          />
        </div>

        <div className="center-child signin-padding">
          <Link to="/select">
            <Button basic size='large'>
              <h4>SEARCH</h4>
            </Button>
          </Link>
        </div>

      </div>
    )
  }
}

export default FindPage;
