import { Component } from "preact";
import mapboxgl from "mapbox-gl";

type MapboxMapProps = {
  latitude: string;
  longitude: string;
};

class MapboxMap extends Component<MapboxMapProps> {
  private mapContainer: HTMLDivElement | null = null;
  private map?: mapboxgl.Map;

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWVwaGlzdG9wczEiLCJhIjoiY2xvZjd6NnZlMDk3ODJxbDVnY3RmNjNlOCJ9.J7uBGEv2uJIQNtDpMf0u3g";

    if (this.mapContainer) {
      if (this.props.longitude && this.props.latitude) {
        this.map = new mapboxgl.Map({
          container: this.mapContainer,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [
            parseFloat(this.props.latitude.split(",")[0]),
            parseFloat(this.props.longitude.split(",")[0]),
          ],
          zoom: 12,
        });

        new mapboxgl.Marker({
          color: 'red'
        })
        .setLngLat([parseFloat(this.props.latitude.split(",")[0]), parseFloat(this.props.longitude.split(",")[0])])
        .addTo(this.map)

      }
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
        style={{ width: "100%", height: "400px" }}
      />
    );
  }
}

export default MapboxMap;
