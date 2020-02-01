import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper,Polygon} from 'google-maps-react';

export class GoogleMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      address: {},
    }
    console.log(this.props.google)
    this.onMapClicked = this.onMapClicked.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMapClicked = (e) => {
      console.log(e)
      this.setState({
        address: e.initialCenter,
      })

  }

  onMarkerClick = (props, marker, e) => {
    console.log('---->',e)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

render() {
    let nearStation = {lat: 37.779529, lng: -122.405640}
    // use database to find nearStation position

    console.log(this.state.address);
    // if(nearStation.lat - this.whereClicked.lat < 100){
    //
    // }

    return (
      <div>
        <Map google={this.props.google}
            style={{width: '100%', height: '100%', position: 'relative'}}
            className={'map'}
            zoom={14}
      
            >
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={nearStation}
            onClick={this.onMarkerClick}
            />

            <InfoWindow
             marker={this.state.activeMarker}
             visible={this.state.showingInfoWindow}>
               <div>
                 <h1>{this.state.selectedPlace.name}</h1>
               </div>
           </InfoWindow>
          <Marker
            name={'Dolores park'}
            position={{lat: 37.759703, lng: -122.428093}} />

          <Marker
            name={'Your position'}
            position={{lat: 37.762391, lng: -122.439192}}
            icon={{
              url: "/path/to/custom_icon.png",
              }}
          />
          <Marker onClick={this.onMarkerClick}/>

        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCS1lOgJq4suPIvO1iBshAQ7PHEAt5QKzQ')
})(GoogleMap)
