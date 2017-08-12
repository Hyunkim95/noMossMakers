import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PreferenceButton from '../presentational/preferenceButton/PreferenceButton';

class AppointmentPage extends Component {
  render() {
    return(
      <div>
        <h1>Appointment</h1>
        <Link to="/queue">
          <PreferenceButton
            basic size='large'
            buttonColour='blue'
            buttonText='No Preference'
          >
            <h4>SELECT CLINIC</h4>
          </PreferenceButton>

          <PreferenceButton
            basic size='large'
            buttonColour='blue'
            buttonText='Dr Khan'
            doctorImage='http://www.eurthisnthat.com/wp-content/uploads/2015/01/n-CRAZY-DOCTOR-large300.jpg'
            imgBoolean={true}
          >
            <h4>SELECT CLINIC</h4>
          </PreferenceButton>
        </Link>
      </div>
    )
  }
}

export default AppointmentPage;
