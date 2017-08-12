import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import style from './form.css';

class Form extends Component {
  render() {
    return (
      <div className="custom-form">
        <Input className="text-form" icon={this.props.icon} iconPosition='left' placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default Form;