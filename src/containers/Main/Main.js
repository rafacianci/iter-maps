import React from 'react';
import GoogleMapReact from 'google-map-react';
import './style.css';

const AnyReactComponent = ({ text }) => <div className='marker'>{text}</div>;

const Main = () => (
  <div className='map-container'>
    <GoogleMapReact
      defaultZoom={11}
      defaultCenter={{ lat: 59.955413, lng: 30.337844 }}
    >
      <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text='Kreyser Avrora'
      />
    </GoogleMapReact>
  </div>
);

export default Main;
