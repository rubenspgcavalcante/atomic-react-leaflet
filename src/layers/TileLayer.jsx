import React, {PureComponent} from "react";
import {tileLayer} from "leaflet";

export default class TileLayer extends PureComponent {
  state = {

  }

  constructor(props) {
    super(props);
    this.tileLayer = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    if(props.map){
      this.tileLayer.addTo(props.map);
    }
  }

  componentWillReceiveProps(props){
    if(props.map) {
      this.tileLayer.addTo(props.map);
    }
  }

  render() {
    return null;
  }
}