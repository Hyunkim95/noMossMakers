import React, { Component } from 'react';
import Navbar from './presentational/navbar/navbar';
import CustomDropdown from './presentational/customDropdown/customDropdown';
import CustomSearchBar from './presentational/customSearchBar/customSearchBar';
import { sicknessType } from './data/sicknessType';
import { test } from './data/test'
import style from './App.css';

class App extends Component {
  render() {
    return (
      <div className="background mobile-only">
        <Navbar />
        <CustomDropdown />
        <CustomSearchBar
          search={test}
        />
      </div>
    );
  }
}

export default App;
