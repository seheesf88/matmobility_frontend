import React, { Component } from 'react'
import chargepoints from '../data/chargepoints.json'
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
    //console.log(this.props.google)
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

    // const location = () => {
    //   let nearStation = [];
    //
    //   for(let i = 0; i < chargepoints.length; i++){
    //     let each = chargepoints[i]
    //     //console.log('each', each.AddressInfo.Latitude);
    //     nearStation.push({lat: each.AddressInfo.Latitude, lng: each.AddressInfo.Longitude})
    //     //console.log('is?', nearStation);
    //   }
    //   console.log('hhii', nearStation)
    //   return nearStation
    // }



  var location = chargepoints.map(each => {
    var nearStation = {las : each.AddressInfo.Latitude, lng: each.AddressInfo.Longitude }
      console.log('--->', nearStation);

    return(
      <div>

      </div>
    )
  })


    return (
      <div>
        <Map google={this.props.google}
            style={{width: '100%', height: '100%', position: 'relative'}}
            className={'map'}
            zoom={14}
            initialCenter={{ lat: 37.552652, lng: -122.313742}}
          >
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCS1lOgJq4suPIvO1iBshAQ7PHEAt5QKzQ')
})(GoogleMap)



// <InfoWindow
//  marker={this.state.activeMarker}
//  visible={this.state.showingInfoWindow}>
//    <div>
//      <h1>{this.state.selectedPlace.name}</h1>
//    </div>
// </InfoWindow>
//
//  {location}
// <Marker
// name={'Dolores park'}
// position={{lat: 37.759703, lng: -122.428093}} />
//
// <Marker
// name={'Your position'}
// position={{lat: 37.762391, lng: -122.439192}}
// icon={{
//   url: "/path/to/custom_icon.png",
//   }}
// />
// <Marker onClick={this.onMarkerClick}/>
