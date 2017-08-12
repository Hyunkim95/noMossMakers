import React, { Component } from 'react';
import style from './customDropdown.css';
import { Dropdown } from 'semantic-ui-react';
import { sicknessType } from '../../data/sicknessType';

class CustomDropdown extends Component {
  render() {
    return (
      <div className="custom">
        <Dropdown placeholder='I am looking for' fluid search selection options={sicknessType} />
      </div>
    );
  }
}

export default CustomDropdown;
