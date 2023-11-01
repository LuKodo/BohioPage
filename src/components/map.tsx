import { Component } from 'preact';
import mapboxgl from 'mapbox-gl';

type MapboxMapProps = {
  accessToken: string;
};

class MapboxMap extends Component<MapboxMapProps> {
  private mapContainer: HTMLDivElement | null = null;
  private map?: mapboxgl.Map;

  componentDidMount() {
    mapboxgl.accessToken = this.props.accessToken;

    if (this.mapContainer) {
      this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40],
        zoom: 9,
      });
    }
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }

  render() {
    return (
      <div
        ref={(el) => (this.mapContainer = el)}
        style={{ width: '100%', height: '400px' }}
      />
    );
  }
}

export default MapboxMap;
