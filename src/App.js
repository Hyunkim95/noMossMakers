import React, { Component } from 'react';
import Navbar from './presentational/navbar/navbar';
import CustomDropdown from './presentational/customDropdown/customDropdown';
import CustomSearchBar from './presentational/customSearchBar/customSearchBar';
import Form from './presentational/Form/form';
import style from './App.css';
import PreferenceButton from './presentational/preferenceButton/PreferenceButton';

class App extends Component {
  render() {
    return (
      <div className="background mobile-only">
        <Navbar />
        <CustomDropdown />
        <CustomSearchBar />
        <Form
          icon = "mail"
          placeholder = "EMAIL"
        />
        <Form
          icon = "lock"
          placeholder = "PASSWORD"
        />
        <PreferenceButton
          buttonColour="blue"
          buttonText="No Preference"
          imgBoolean={false}
        />
        <PreferenceButton
          buttonColour="blue"
          buttonText="This Doctor"
          doctorImage="http://2.bp.blogspot.com/-SJOtTmJqj9Y/UybkheI9jAI/AAAAAAAAAAA/tJLbhxshBOQ/s1600/doctors%2Band%2Bpain%2Bperception.jpg"
          imgBoolean={true}
        />

      </div>
    );
  }
}

export default App;
