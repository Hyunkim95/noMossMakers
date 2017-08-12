import React, { Component } from 'react';
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