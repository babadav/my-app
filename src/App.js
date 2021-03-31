import ReactDOM from "react-dom";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

import fetchFakeData from "./Components/Data/fetchFakeData";
import Popup from "./Components/Pop_Up/PopUp";

import WelcomeAdmin from "./Components/Welcome_Admin/WelcomeAdmin";
import ActiveVehicles from "./Components/Active_Vehicles/ActiveVehicles";

import "../src/scss/vehicle-map.scss";
import "./App.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const App = () => {
  const mapContainerRef = useRef(null);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));
  let vehicleData = [];

  const [data, setData] = useState([]);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });

    // add navigation control (zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("load", () => {
      // add the data source for new a feature collection with no features
      map.addSource("random-points-data", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });
      // now add the layer, and reference the data source above by name
      map.addLayer({
        id: "random-points-layer",
        source: "random-points-data",
        type: "symbol",
        layout: {
          // full list of icons here: https://labs.mapbox.com/maki-icons
          "icon-image": "car-15", // this will put little cars on our map
          "icon-padding": 0,
          "icon-allow-overlap": true,
        },
      });
    });

    map.on("load", async () => {
      // get new center coordinates
      const { lng, lat } = map.getCenter();
      // fetch new data
      const results = await fetchFakeData({ longitude: lng, latitude: lat });
      // update "random-points-data" source with new data
      // all layers that consume the "random-points-data" data source will be updated automatically
      map.getSource("random-points-data").setData(results);

      if (results.features) {
        // vehicleData = results.features
        setData(results.features);
        console.log(vehicleData, "i suck");
      }
    });

    // change cursor to pointer when user hovers over a clickable feature
    map.on("mouseenter", "random-points-layer", (e) => {
      if (e.features.length) {
        map.getCanvas().style.cursor = "pointer";
      }
    });

    // reset cursor to default when user is no longer hovering over a clickable feature
    map.on("mouseleave", "random-points-layer", () => {
      map.getCanvas().style.cursor = "";
    });

    // add popup when user clicks a point
    map.on("click", "random-points-layer", (e) => {
      if (e.features.length) {
        const feature = e.features[0];
        // create popup node
        const popupNode = document.createElement("div");
        ReactDOM.render(<Popup feature={feature} />, popupNode);
        // set popup on map
        popUpRef.current
          .setLngLat(feature.geometry.coordinates)
          .setDOMContent(popupNode)
          .addTo(map);
      }
    });

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  console.log(vehicleData, "dat");
  return (
    <>
      <div className="App">
        <header className="App-header">
          <WelcomeAdmin />
          <ActiveVehicles data={data} />
        </header>
      </div>
      <>
        <div className="map-container" ref={mapContainerRef} />
      </>
    </>
  );
};

export default App;
