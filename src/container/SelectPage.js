import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SelectButton from '../presentational/preferenceButton/PreferenceButton';

class SelectPage extends Component {
  render() {
    return(
      <div>
        <h1>Select</h1>
        <Link to="/appointment">
          <SelectButton basic size='large'>
            <h4>SELECT CLINIC</h4>
          </SelectButton>
        </Link>
      </div>
    )
  }
}

export default SelectPage;
