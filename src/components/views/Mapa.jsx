import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Icono de perrito
let iconMascota = new L.icon({
  iconUrl: require('../../images/feliz.png'),
  iconSize: [30, 30],
  iconAnchor: [12, 41],
});

let iconPersona = new L.icon({
  iconUrl: require('../../images/persona.png'),
  iconSize: [30, 30],
  iconAnchor: [12, 41],
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
      alert('Coordenadas no válidas. Por favor, ingrese números válidos.');
    }
  };

  // Obtener y actualizar la ubicación del usuario
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      function (position) {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      },
      function (error) {
        console.error('Error al obtener la ubicación del usuario:', error);
      }
    );

    // Devolver una función de limpieza para detener el seguimiento cuando el componente se desmonta
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []); // La dependencia vacía asegura que este efecto solo se ejecute una vez

  return (
    <div className="relative w-full h-screen mb-10 max-h-[80vh] z-0">
      <div className="h-4/5">
        <MapContainer
          center={userLocation || [1.2136, -77.2811]}
          zoom={14}
          scrollWheelZoom={true}
          id='mapa'
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {userLocation && (
            <Marker position={userLocation} icon={iconPersona}>
              <Popup>
                Usted está aquí.
              </Popup>
            </Marker>
          )}

          {(!isNaN(punto2Location.lat) && !isNaN(punto2Location.lon)) && (
            <Marker position={[punto2Location.lat, punto2Location.lon]} icon={iconMascota}>
              <Popup>
                Mascota
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>

      <div className="h-2/5 bg-black p-4 text-white font-semibold">
        <form onSubmit={handlePunto2Submit}>
          <label className="block mb-2 text-lg">
            Ingrese las coordenadas (latitud, longitud):
            <input
              type="text"
              name="coords"
              placeholder="Ejemplo: 1.2136,-77.2811"
              value={inputCoords}
              onChange={handleCoordsInputChange}
              className="w-full p-2 border rounded text-black"
              required
            />
          </label>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Buscar</button>
        </form>
      </div>
    </div>
  );
}
