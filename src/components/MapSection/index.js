import React from 'react'
import {MapContainer, MapWrapper, MapContent, ContentTitle} from './MapElements'
fetch('https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json').then(response => response.json())
.then(data => {
    data.forEach(element => {
        crimePoints.push([element['location']['latitude'], element['location']['longitude']]);
    });
})
const crimePoints = [];
console.log(crimePoints);
const Map = () => {
    return (
        <MapContainer id="map">
            <ContentTitle>Prince George County Map</ContentTitle>
            <MapWrapper>
                <MapContent>
                    <h1>Map Will go Here</h1>
                </MapContent>
            </MapWrapper>
        </MapContainer>
    )
}

export default Map
