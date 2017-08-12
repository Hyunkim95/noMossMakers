import React, { Component } from 'react';
import style from './squareButton.css';
import next from "../../image/next.png";


class SquareButton extends Component {
  render() {
    return (
      <div className="square-button">
        <div className="square-text text-center">
          <p className="signup-text">You Selected</p>
          <h3 className="signup-text">{this.props.centre}</h3>
        </div>
        <div className="square-next">
          <img src={next} className="profile"/>
        </div>
      </div>
    );
  }
}

export default SquareButton;
