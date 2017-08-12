import React, { Component } from 'react';
import Navbar from './presentational/navbar/navbar'
import style from './App.css'
import Search from './presentational/search/SearchBox'

class App extends Component {
  render() {
    return (
      <div className="background mobile-only">
        <Navbar />
        <Search />
      </div>
    );
  }
}

export default App;
