import React, { Component } from 'react';
<<<<<<< HEAD
import style from './navbar.css'
=======
import style from './navbar.css';
import profile from "../../image/user.png";
>>>>>>> 09c68b223fb150e141c0a4753c7de8300fad2936

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container center">
        <div className="navitem"></div>
        <div className="navtitle">
          <h2 className="white">Queue'd</h2>
        </div>
        <div className="navitem">
          <img src={profile} className="profile"/>
        </div>
      </div>
    );
  }
}

export default Navbar;
