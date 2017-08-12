import React, { Component } from 'react';
import Navbar from './presentational/navbar/navbar'
import style from './App.css'

class App extends Component {
  render() {
    return (
      <div className="background mobile-only">
        <Navbar />
      </div>
    );
  }
}

export default App;
