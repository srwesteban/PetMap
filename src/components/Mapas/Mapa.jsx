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
  const [punto2Location, setPunto2Location] = useState({ lat: 1.22, lon: -77.29 });
  const [inputCoords, setInputCoords] = useState('');

  const handleCoordsInputChange = (e) => {
    setInputCoords(e.target.value);
  };

  const handlePunto2Submit = (e) => {
    e.preventDefault();

    // Dividir las coordenadas por coma y convertirlas a números
    const [lat, lon] = inputCoords.split(',').map(coord => parseFloat(coord.trim()));

    // Verificar si las coordenadas son válidas
    if (!isNaN(lat) && !isNaN(lon)) {
      setPunto2Location({ lat, lon });
      // Puedes realizar acciones adicionales aquí si es necesario
    } else {
      console.error('Coordenadas no válidas. Por favor, ingrese números válidos.');
    }
  };

  return (
    <div className="relative w-full h-screen mb-10 max-h-[76vh] z-0">
      <MapContainer
        center={userLocation || [1.2136, -77.2811]}
        zoom={14}
        scrollWheelZoom={true}
        id='mapa'
        style={{ width: '100%', height: '60vh' }}
      >
        <TileLayer attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {userLocation && (
          <Marker position={userLocation} icon={iconUbicacion}>
            <Popup>
              Usted está aquí.
            </Popup>
          </Marker>
        )}

        {(!isNaN(punto2Location.lat) && !isNaN(punto2Location.lon)) && (
          <Marker position={[punto2Location.lat, punto2Location.lon]} icon={iconUbicacion}>
            <Popup>
              Punto 2
            </Popup>
          </Marker>
        )}
      </MapContainer>

      <div className="absolute bottom-0 left-0 w-full bg-black p-4 text-white">
        <form onSubmit={handlePunto2Submit}>
          <label className="block mb-2 text-lg">
            Ingrese las coordenadas (latitud, longitud):
            <input
              type="text"
              name="coords"
              placeholder="Ejemplo: 1.2136,-77.2811"
              value={inputCoords}
              onChange={handleCoordsInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </label>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Actualizar Punto 2</button>
        </form>
      </div>
    </div>
  );
}
