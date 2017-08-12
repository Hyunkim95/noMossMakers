import React, { Component } from 'react';
import Navbar from './presentational/navbar/navbar';
import CustomDropdown from './presentational/customDropdown/customDropdown';
import CustomSearchBar from './presentational/customSearchBar/customSearchBar';
import {clinic} from './data/clinic';
import Form from './presentational/Form/form';
import style from './App.css';
import LandingPage from './presentational/LandingPage';
import SignUpPage from './container/SignUpPage';
import FindPage from './container/FindPage';
import SelectPage from './container/SelectPage';
import AppointmentPage from './container/AppointmentPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="mobile-only">
            <Route exact path="/" component={LandingPage}/>
            <Route path="/signup" component={SignUpPage}/>
            <Route path="/find" component={FindPage}/>
            <Route path="/select" component={SelectPage}/>
            <Route path="/appointment" component={AppointmentPage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
