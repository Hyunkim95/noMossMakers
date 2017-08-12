import React, { Component } from 'react';
import style from './Marker.css';

class Marker extends Component {
  render() {
    return (
      <div onClick={this.props.selectCentre}>
        <div className="marker-text  pin-padding">
          <b>{this.props.title}</b>
          <br/>
          <p>{this.props.time}</p>
        </div>
        <div className='pin bounce'></div>
        <div className='pulse'></div>
      </div>
    );
  }
}

export default Marker;
