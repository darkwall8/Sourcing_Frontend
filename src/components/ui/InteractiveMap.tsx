import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

// Pour éviter un bug d'icônes manquantes
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});

function LocationMarker({ onClick }: { onClick: (lat: number, lng: number) => void }) {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition({ lat, lng });
      onClick(lat, lng);
    },
  });

  return position === null ? null : <Marker position={position} />;
}

function InteractiveMap() {
  const [selectedPosition, setSelectedPosition] = useState<{ lat: number; lng: number } | null>(null);

  return (
    <div className="h-[500px] rounded-xl w-full overflow-hidden">
      <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true} className="h-full w-full">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          onClick={(lat, lng) => {
            console.log("Coordonnées sélectionnées :", lat, lng);
            setSelectedPosition({ lat, lng });
          }}
        />
      </MapContainer>

      {selectedPosition && (
        <div className="mt-4 text-sm">
          Coordonnées sélectionnées :<br />
          <strong>Latitude:</strong> {selectedPosition.lat}<br />
          <strong>Longitude:</strong> {selectedPosition.lng}
        </div>
      )}
    </div>
  );
}

export default InteractiveMap;
