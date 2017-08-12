import React, { Component } from 'react';
import Navbar from './presentational/navbar/navbar';
import CustomDropdown from './presentational/customDropdown/customDropdown';
import CustomSearchBar from './presentational/customSearchBar/customSearchBar';
import Form from './presentational/Form/form';
import style from './App.css';

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
      </div>
    );
  }
}

export default App;
