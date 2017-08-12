import React, { Component } from 'react';
import style from './customDropdown.css';
import { Dropdown } from 'semantic-ui-react';

class CustomDropdown extends Component {
  render() {
    return (
      <div className="custom">
        <Dropdown placeholder={this.props.placeholder} fluid search selection options={this.props.data} />
      </div>
    );
  }
}

export default CustomDropdown;
