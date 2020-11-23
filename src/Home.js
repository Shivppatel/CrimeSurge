import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <div className="intro">
                <h3>Welcome</h3>
                <p>Welcome to the Prince George’s County Crime Tracker/Hotspot mapper. Here we document the locations where crime is concentrated most and represent it on the map of the county and in a neat bar chart that separates crime rates by street (or some other location like zipcode).</p>
            </div>

            <div className="body">
                <div className="dyk">
                    <h3>Did Your Know?</h3>
                    <p>This is example text for the DYK part of this website. It will be updated later depending on the research in and outside the dataset, and may even be randomized if possible.</p>
                </div>
                <div className="map">
                    <h3>Prince George's County Map</h3>
                    <a href="PG_County_Map.gif"><img src="../PG_County_Map.gif" alt="A map of PG County." width = "200" height = "265"/></a>
                </div>
            </div>
            
        </div>
    )
}
