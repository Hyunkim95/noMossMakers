import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'

class Form extends Component {
  render() {
    return (
      <div>
        <Input icon={this.props.icon} iconPosition='left' placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default Form;