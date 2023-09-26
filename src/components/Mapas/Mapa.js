import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Mapa.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-icon.png';


let iconUbicacion =new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
  isonSize: [60,55],
  iconAnchor: [22,94],
  shadowAnchor: [22,94],
  popupAnchor: [-3,-76],
})

export default function Mapa() {
  return <div className="flex justify-center items-center w-screen m-16">
  <MapContainer center={[1.2136, -77.2811]} zoom={14} scrollWheelZoom={true} id='mapa'>
    <TileLayer attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={[1.2136, -77.2811]} icon={iconUbicacion}>
      <Popup>
        Usted deberia estar aqui.
      </Popup>
    </Marker>
  </MapContainer>
</div>

}
