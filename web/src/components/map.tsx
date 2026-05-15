import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function Map() {
  return (
    <MapContainer
    key={"driver-overview-map"}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='
        &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> 
        &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> 
        &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
      />

      {/* Tooltip must be attached to a layer */}
      <Marker position={[51.505, -0.09]}>
        <Tooltip>Bus 1</Tooltip>
      </Marker>
    </MapContainer>
  );
}