import React from 'react'
import {MapContainer, ContentTitle} from './MapElements'

class Map extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data: null,
            isLoaded: false,
            crimeList:  []
        }; 
    }

    async componentDidMount(){
        try{
            const response = await fetch('https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json');
            const value = await response.json();
            const crimes = [];
            value.forEach(element => {
                //crimePoints.push([element['location']['latitude'], element['location']['longitude']]);
                crimes.push([element['clearance_code_inc_type'], element['location']['latitude'], element['location']['longitude']]);
            })
            this.setState({
                isLoaded: true,
                data: value,
                crimeList: crimes
            })
        } catch(err){
            console.log(err);
        }
    }
    render() {
        const crimeList = this.state.crimeList;
        return(
        <MapContainer id="map">

        </MapContainer>
        )}
}

export default Map
