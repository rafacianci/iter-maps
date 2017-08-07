import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import { getCurrentLocation } from '../../actions/map';
import './style.css';

const AnyReactComponent = ({ text }) => <div className='marker'>{text}</div>;

class Main extends Component {
  componentWillMount() {
    this.props.getCurrentLocation();
  }

  render() {
    const { map } = this.props;
    return (
      <div className='map-container'>
        <GoogleMapReact
          defaultZoom={15}
          center={map.myLocation}
        >
          <AnyReactComponent
            lat={-26.3048093}
            lng={-48.844771}
            text='Home'
          />
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateProps = ({ map }) => ({
  map,
});

export default connect(mapStateProps, {
  getCurrentLocation,
})(Main);
