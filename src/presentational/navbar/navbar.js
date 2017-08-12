import React, { Component } from 'react';
import style from './navBar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container center">
        <div className="navitem"></div>
        <div className="navtitle">Queue'd</div>
        <div className="navitem">Profile</div>
      </div>
    );
  }
}

export default Navbar;