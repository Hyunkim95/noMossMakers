import React, { Component } from 'react';

class FindPage extends Component {
  render() {
    return(
      <div>
        <h1>FIND </h1>
        <Link to="/select">
          <SelectButton basic size='large'>
            <h4>SELECT CLINIC</h4>
          </SelectButton>
        </Link>
      </div>
    )
  }
}

export default FindPage;
