import React, { Component } from 'react';
import Navbar from './presentational/navBar/navBar';
import CustomDropdown from './presentational/customDropdown/customDropdown';
import CustomSearchBar from './presentational/customSearchBar/customSearchBar'
import style from './App.css';

class App extends Component {
  render() {
    return (
      <div className="background mobile-only">
        < Navbar />
        < CustomDropdown />
        < CustomSearchBar />
      </div>
    );
  }
}

export default App;
