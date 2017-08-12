import React, { Component } from 'react';
import style from './QueuePage.css';
import { Link } from 'react-router-dom';
import { Button, Message } from 'semantic-ui-react';
import NavBar from '../presentational/navbar/navbar.js';
import ReactCountdownClock from 'react-countdown-clock';

class QueuePage extends Component {
  constructor(){
    super()
    this.state = {
      message: false,
      extraTime: 900
    }
  }

  componentDidMount(){
    setTimeout(() => {this.setState({
      extraTime: 1000,
      message: true
    })}, 60000)
  }

  render() {
    return(
      <div className="background-grow queque">
        <NavBar />
        <h4 className="signup-text text-right">City Medical Practice</h4>
        <div className="position text-center">
          <span className="position-text">You are <span className="positioning"> 4th </span> in queue</span>
        </div>

        {this.state.message ?
          (<Message negative>
              <Message.Header>UPDATE: TIME DELAYED</Message.Header>
              <p>We apologise for the inconvenience</p>
            </Message>)
          :
          (null)
        }

        <div className="clock">
          <ReactCountdownClock seconds={this.state.extraTime}
                      timeFormat = 'hms'
                       color="#0B35D9"
                       weight={20}
                       alpha={1}
                       size={200}
           />
        </div>

        <div className="queue-subtitle find-text text-center">
          <h3>until your visit</h3>
        </div>

        <div className="signup-text center-child prefill queue-padding">
            <Button basic size='large'>
              <h4>Pre-fill your details</h4>
            </Button>
        </div>

        <div className="find-text text-center">
          <span className="italy">Pre-filling your details can save time when checking in to a centre</span>
        </div>

        <div className="signup-text float-right cancel queue-padding">
            <Link to='/review'>
              <Button basic size='large'>
                <h4>Exit Queue</h4>
              </Button>
            </Link>
        </div>

      </div>
    )
  }
}

export default QueuePage;
