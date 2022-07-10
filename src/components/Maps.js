import React from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2VyaW5hcnlvIiwiYSI6ImNsNTlzeHV1MDAyb2EzZW8xMmVzbHVuem4ifQ.Uz7f43R-FFlsXt_vxgdGwg";

// Sample data
const data = [
  {
    location: "Manhattan Ave & Norman Ave at NE corner",
    city: "Brooklyn",
    state: "New York",
    coordinates: [-73.9516030004786, 40.72557300071668],
  },
  {
    location: "6th Ave & 42nd St at NW corner",
    city: "Manhattan",
    state: "New York",
    coordinates: [-73.98393399979334, 40.75533300052329],
  },
  {
    location: "Essex St & Delancey St at SE corner",
    city: "Manhattan",
    state: "New York",
    coordinates: [-73.9882730001973, 40.718207001246554],
  },
];

class Mapp extends React.Component {
  // Set up states for updating map
  constructor(props) {
    super(props);
    this.state = {
      lng: -74,
      lat: 40.7128,
      zoom: 12,
    };
  }

  // Create map and lay over markers
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/shiy/ckjg4xi1r158y19maqdzjkqjx",
      center: [107.66181141924545, -6.916480182803706],
      zoom: this.state.zoom,
    });
  }

  render() {
    return (
      <div>
        <div
          ref={(el) => (this.mapContainer = el)}
          style={{ width: "100%", height: "100vh" }}
        />
      </div>
    );
  }
}

export default Mapp;
