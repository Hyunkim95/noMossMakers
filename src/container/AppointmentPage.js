import React, { Component } from 'react';
import style from './AppointmentPage.css';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import CustomDropdown from '../presentational/customDropdown/customDropdown'
import NavBar from '../presentational/navbar/navbar.js';
import { sicknessType } from '../data/sicknessType';
import { doctor } from '../data/doctor';

class AppointmentPage extends Component {
  render() {
    return(
      <div className="background2 appointment-page">
        <NavBar />
        <div className="signin-padding select-page-title text-center">
          <h3>City Medical Practice</h3>
        </div>

        <div className="reduce-top-padding select-page-title text-center">
          <h4>What is the reason for your visit?</h4>
        </div>

        <div className="input-form">
          <CustomDropdown
            placeholder = "I am looking for"
            data = {sicknessType}
          />
        </div>

        <div className="select-page-title text-center">
          <h4>Do you have a preferred doctor?</h4>
        </div>

        <div className="input-form">
          <CustomDropdown
            placeholder = "I am looking for"
            data = {doctor}
           />
        </div>

        <div className="center-child signin-padding">
          <Link to="/queue">
            <Button basic size='large'>
              <h4>Get on the queue</h4>
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default AppointmentPage;
