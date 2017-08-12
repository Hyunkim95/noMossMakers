import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import style from './header.css';

class Header extends Component {
  render() {
    return (
      <h1 className="top-padding white text-center title">Queue'd</h1>
    );
  }
}

export default Header;
