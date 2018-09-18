import {render} from "react-dom";
import React from "react";
import Map from "map/Map";

import "leaflet/dist/leaflet.css";
import "./index.scss";
import TileLayer from "../src/layers/TileLayer";

const id = 'app';
const container = document.createElement('div');
container.setAttribute('id', id);
document.body.appendChild(container);

render(
  <Map >
    <TileLayer />
  </Map>,
  container
);