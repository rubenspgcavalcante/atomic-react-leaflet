import React, { PureComponent, Children, cloneElement } from "react";
import { map } from "leaflet";

export default class Map extends PureComponent {
  state = {
    map: null
  }

  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const lmap = map(this.mapRef.current, {
      center: [51.505, -0.09],
      zoom: 13
    });

    this.setState({map: lmap});
  }

  render() {
    const { map } = this.state;
    const { children } = this.props;

    return (
      <div ref={this.mapRef}>
        {Children.map(children, child => cloneElement(child, { map }))}
      </div>
    );
  }
}
