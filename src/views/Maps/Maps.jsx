import React, { Component, Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import { Locations } from './LocationService';
import LocationIcon from '../../assets/img/location-icon.jpg';

export default class Maps extends Component {
	onMarkerClick = (props, marker) => {
		console.log(marker);
	};
	render() {
		return (
			<div style={{ width: '100%', height: '100vh' }}>
				<GoogleMapReact
					defaultCenter={{ lat: 10.850516, lng: 76.27108 }}
					defaultZoom={8}
					onChildClick={this.onMarkerClick}
				>
					{Object.values(Locations).map(data => {
						return (
							<img
								name={data.title}
								lat={data.lat}
								lng={data.lng}
								style={{ width: '24px', height: '31px' }}
								src={LocationIcon}
							/>
						);
					})}
				</GoogleMapReact>
			</div>
		);
	}
}
