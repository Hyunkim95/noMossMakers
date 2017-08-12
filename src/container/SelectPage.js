import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './SelectPage.css';
import NavBar from '../presentational/navbar/navbar.js';
import GoogleMapReact from 'google-map-react';
import Marker from '../presentational/marker/Marker';
import SquareButton from '../presentational/squareButton/squareButton';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class SelectPage extends Component {
  constructor(){
    super()
    this.state = {
      centre: null,
      default:{
        center: {lat: -33.869485, lng: 151.212383},
        zoom: 15
      }
    }
  }
  handleMapLoad = (map) => {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }

  selectCentre = (centre) => {
    this.setState({ centre: centre})
  }

  render() {
    return(
      <div className="background2 select-page">
        <NavBar />

        <div className="select-page-title text-center">
          <h3>Pick your centre</h3>
        </div>

        <div className="google-map">
          <GoogleMapReact
            defaultCenter={this.state.default.center}
            defaultZoom={this.state.default.zoom}
          >
            <Marker
              selectCentre = {() => this.selectCentre('Sydney Premier Medical and Health Centre')}
              lat={-33.868620}
              lng={151.216945}
              title={'Sydney Premier Medical and Health Centre'}
              time={'45min'}
            />

            <Marker
              selectCentre = {() => this.selectCentre('MyHealth Medical Centre')}
              lat={-33.867373}
              lng={151.209983}
              title={'MyHealth Medical Centre'}
              time={'15min'}
            />

          </GoogleMapReact>
        </div>

        {this.state.centre == null ?
          (null)
          :
          (
            <div className="select-padding">
              <Link to="/appointment">
                <SquareButton
                  centre = {this.state.centre}
                />
              </Link>
            </div>
          )
        }

      </div>
    )
  }
}

export default SelectPage;
