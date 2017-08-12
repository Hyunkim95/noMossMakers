import React, { Component } from 'react';
import style from './navbar.css';
import profile from "../../image/user.png";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container center">
        <div className="navitem"></div>
        <div className="navtitle">Queue'd</div>
        <div className="navitem">
          <img src={profile} className="profile"/>
        </div>
      </div>
    );
  }
}

export default Navbar;