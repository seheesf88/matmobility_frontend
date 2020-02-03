import React, { Component } from 'react';
import LocationPicker from 'react-location-picker';

/* Default position */
const defaultPosition = {
  lat: 37.552652,
  lng: -122.313742
};


class PhotoMap extends Component {
  constructor (props) {
    super(props);

    this.state = {
      position: {
         lat: 0,
         lng: 0
      }
    };

    // Bind
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange ({ position, address, places }) {
    console.log('what is position?', position, address, places);
    // Set new location
    this.setState({ position, address });
  }

  render () {
    return (
      <div>
        <h1>{this.state.address}</h1>
        <div>
          <LocationPicker
            containerElement={ <div style={ {height: '100%'} } /> }
            mapElement={ <div style={ {height: '400px'} } /> }
            defaultPosition={defaultPosition}
            onChange={this.handleLocationChange}
            zoom={13}
          />
        </div>
      </div>
    )
  }
}

export default PhotoMap
