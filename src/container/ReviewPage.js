import React, { Component } from 'react';
import hand from '../image/hand.png';
import style from './ReviewPage.css';
import { Rating, Button } from 'semantic-ui-react';
import NavBar from '../presentational/navbar/navbar.js';

class FindPage extends Component {
  render() {
    return(
      <div className="background">
        <NavBar />
        <div className="input-form text-center find-text ">
          <h2>Hi there,</h2>
          <h2 className="signup-text">Let's find you a doctor</h2>
        </div>
        <div className="bye center-child logo-container">
          <img src={hand} className="logo"/>
        </div>

        <div className="bye find-text text-center">
          <h3>How was your experience?</h3>
        </div>

        <div className="bye center-child">
          <Rating
            icon='star'
            defaultRating={3}
            maxRating={5}
            size='massive'
           />
        </div>

        <div className="center-child prefill queue-padding">
            <Button basic size='large'>
              <h4>End</h4>
            </Button>
        </div>


      </div>
    )
  }
}

export default FindPage;
