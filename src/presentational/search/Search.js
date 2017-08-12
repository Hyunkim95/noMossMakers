import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'
import './App.css';

class SearchBox extends Component {
  render() {
    return (
      <div className="">
        <Input icon='search' placeholder='Search...' />
      </div>
    );
  }
}

export default SearchBox;
