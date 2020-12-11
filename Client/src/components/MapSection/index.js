import React from "react";
import { MapContainer, ContentTitle } from "./MapElements";
import GoogleMapReact from "google-map-react";

import MarkerImage from '../../images/marker.png'
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoaded: false,
    };
  }

  async componentDidMount() {
    if (!this.state.isLoaded) {
      try {
        const response = await fetch("/api/incident-data");
        const value = await response.json();
        this.setState({
          isLoaded: true,
          data: value,
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
  
  render() {
    const crimeList = this.state.data;

    return (
      <MapContainer id="map">
        {this.state.isLoaded ? (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAZ8RBpp3vhVQbAv_WZTWu-FQhH8EOTtTM",
              libraries: ["visualization"],
            }}
            defaultCenter={{ lat: 38.98, lng: -76.94 }}
            defaultZoom={12}
            scaleControl={true}
            yesIWantToUseGoogleMapApiInternals
            options={{
              minZoom: 11,
              maxZoom: 18,
              styles: [
                { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                {
                  elementType: "labels.text.stroke",
                  stylers: [{ color: "#242f3e" }],
                },
                {
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#746855" }],
                },
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
              ],
            }}
            onGoogleApiLoaded={({ map, maps }) => {
              const heatmap = new maps.visualization.HeatmapLayer({
                data: crimeList?.map((point) => ({
                  location: new maps.LatLng(
                    point["location"]["lat"],
                    point["location"]["lng"]
                  ),
                  weight: 3,
                })),
                radius: 20,
              });
              heatmap.setMap(map);
              crimeList?.forEach((point) => {
                var type = point["type"];
                var date = new Date(point["date"]).toLocaleDateString();
                var contentString =
                  '<div id="content">' +
                  '<div id="siteNotice">' +
                  "</div>" +
                  '<h2 id="firstHeading" class="firstHeading">' +
                  type +
                  "</h2>" +
                  '<div id="bodyContent">' +
                  "<p><b>" +
                  date +
                  "</b></p>" +
                  "</div>" +
                  "</div>";
                const infowindow = new maps.InfoWindow({
                  content: contentString,
                });
                const marker = new maps.Marker({
                  position: new maps.LatLng(
                    point["location"]["lat"],
                    point["location"]["lng"]
                  ),
                  map,
                  title: point["type"],
                  icon: MarkerImage
                });
                marker.addListener("click", () => {
                  infowindow.open(map, marker);
                });
              });
            }}
          ></GoogleMapReact>
        ) : (
          <MapContainer id="map">
            <ContentTitle>
              Sorry we had a problem retrieving the crime data...
            </ContentTitle>
          </MapContainer>
        )}
      </MapContainer>
    );
  }
}

export default Map;
