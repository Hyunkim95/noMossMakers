import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PreferenceButton from '../presentational/preferenceButton/PreferenceButton';

class AppointmentPage extends Component {
  render() {
    return(
      <div>
        <h1>Appointment</h1>
        <Link to="/queue">
          <PreferenceButton basic size='large'>
            <h4>SELECT NO DOCTOR</h4>
          </PreferenceButton>
        </Link>
        <Link to="/queue">
          <PreferenceButton basic size='large'>
            <h4>SELECT DOCTOR</h4>
          </PreferenceButton>
        </Link>
      </div>
    )
  }
}

export default AppointmentPage;
