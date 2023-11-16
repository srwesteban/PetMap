import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import axios from 'axios';

let iconUbicacion = new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41],
});

export default function Mapa() {
  const [userLocation, setUserLocation] = useState(null);

  // Función para obtener la ubicación del usuario
  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
        // Enviar las coordenadas al servidor mediante una solicitud POST
        sendCoordinatesToServer(latitude, longitude);
      });
    }
  };

  // Función para enviar las coordenadas al servidor
  const sendCoordinatesToServer = (latitude, longitude) => {
    axios.post('http://localhost:3000/api/coordenadas', {
      id: 1,
      name: 'Punto 1',
      lat: latitude,
      lon: longitude
    })
    .then(response => {
      console.log('Coordenadas enviadas al servidor con éxito');
    })
    .catch(error => {
      console.error('Error al enviar coordenadas al servidor', error);
    });
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div className="w-full h-screen mb-10 max-h-[76vh] z-0">
      <MapContainer
        center={userLocation || [1.2136, -77.2811]}
        zoom={14}
        scrollWheelZoom={true}
        id='mapa'
        style={{ maxWidth: '100%', height: '100%' }}
      >
        <TileLayer attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {userLocation && (
          <Marker position={userLocation} icon={iconUbicacion}>
            <Popup>
              Usted está aquí.
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
