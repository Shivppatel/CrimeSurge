import React from 'react'
import {MapContainer, ContentTitle} from './MapElements'
import GoogleMapReact from 'google-map-react';

class Map extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data: null,
            isLoaded: false,
            crimeList:  {    
                positions: [
                ],
                options: {   
                  radius: 20,   
                  opacity: 0.6,
              }
        }}; 
    }

    async componentDidMount(){
        try{
            const response = await fetch('https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json');
            const value = await response.json();
            const crimes = [];
            value.forEach(element => {
                //crimePoints.push([element['location']['latitude'], element['location']['longitude']]);
                //crimes.push([element['clearance_code_inc_type'], element['location']['latitude'], element['location']['longitude']]);
                crimes.push({lat:element['location']['latitude'], lng:element['location']['longitude']});
            })
            this.setState({
                isLoaded: true,
                data: crimes
            })
            console.log('Did Component Mount', crimes);
        } catch(err){
            console.log(err);
        }
    }

    render() {
        const crimeList = this.state.data;
        return(
        <MapContainer id="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAZ8RBpp3vhVQbAv_WZTWu-FQhH8EOTtTM', libraries:['visualization']}}
                defaultCenter={{lat: 38.98, lng: -76.94}}
                defaultZoom={15}       
                yesIWantToUseGoogleMapApiInternals
                options={{minZoom:11, maxZoom:18, styles: [
                    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                    {
                      featureType: "administrative.locality",
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#d59563" }],
                    },
                    {
                      featureType: "poi",
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#d59563" }],
                    },
                    {
                      featureType: "poi.park",
                      elementType: "geometry",
                      stylers: [{ color: "#263c3f" }],
                    },
                    {
                      featureType: "poi.park",
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#6b9a76" }],
                    },
                    {
                      featureType: "road",
                      elementType: "geometry",
                      stylers: [{ color: "#38414e" }],
                    },
                    {
                      featureType: "road",
                      elementType: "geometry.stroke",
                      stylers: [{ color: "#212a37" }],
                    },
                    {
                      featureType: "road",
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#9ca5b3" }],
                    },
                    {
                      featureType: "road.highway",
                      elementType: "geometry",
                      stylers: [{ color: "#746855" }],
                    },
                    {
                      featureType: "road.highway",
                      elementType: "geometry.stroke",
                      stylers: [{ color: "#1f2835" }],
                    },
                    {
                      featureType: "road.highway",
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#f3d19c" }],
                    },
                    {
                      featureType: "transit",
                      elementType: "geometry",
                      stylers: [{ color: "#2f3948" }],
                    },
                    {
                      featureType: "transit.station",
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#d59563" }],
                    },
                    {
                      featureType: "water",
                      elementType: "geometry",
                      stylers: [{ color: "#17263c" }],
                    },
                    {
                      featureType: "water",
                      elementType: "labels.text.fill",
                      stylers: [{ color: "#515c6d" }],
                    },
                    {
                      featureType: "water",
                      elementType: "labels.text.stroke",
                      stylers: [{ color: "#17263c" }],
                    },
                  ]}}
                onGoogleApiLoaded={({map, maps}) => {
                    const heatmap = new maps.visualization.HeatmapLayer({
                      data: crimeList?.map(point => (
                        {location: new maps.LatLng(point['lat'], point['lng']), weight:3}))
                    ,radius: 20
                        
                    });
                    heatmap.setMap(map);
                  }}
                >
            </GoogleMapReact>
        </MapContainer>
        )}
}

export default Map
