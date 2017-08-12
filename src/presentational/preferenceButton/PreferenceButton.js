import React, { Component } from 'react';
import style from './preferenceButton.css';
import { Button, Icon } from 'semantic-ui-react'

class PreferenceButton extends Component {
  render() {
    return (
      <div>
        <Button
          className="button-container"
          fluid
          color={this.props.buttonColour}
          labelPosition='left'
          icon
        >
          <h3 className="button-text">{this.props.buttonText}</h3>
          { this.props.imgBoolean ? <img class="ui small image" src={this.props.doctorImage}/> : <Icon name='doctor' size="huge" /> }
        </Button>
      </div>
    );
  }
}

export default PreferenceButton;
