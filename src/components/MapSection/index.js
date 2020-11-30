import React from 'react'
import {MapContainer, MapWrapper, MapContent, ContentTitle} from './MapElements'

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
