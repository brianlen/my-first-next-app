"use client";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Typography, Box } from "@mui/material";

// Custom colored icons for lived vs visited
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const livedIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

const visitedIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

interface PlaceLived {
    id: number; city: string; description: string; years: string; lat: number; lng: number;
}
interface CityVisited {
    id: number; city: string; country: string; lat: number; lng: number;
}

interface TravelMapProps {
    placesLived: PlaceLived[];
    citiesVisited: CityVisited[];
}

export default function TravelMap({ placesLived, citiesVisited }: TravelMapProps) {
    useEffect(() => {
        // Fix Leaflet's broken marker icons in webpack
        const DefaultIcon = L.Icon.Default.prototype as L.Icon.Default & { _getIconUrl?: unknown };
        delete DefaultIcon._getIconUrl; L.Icon.Default.mergeOptions({
            iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
            iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
            shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        });
    }, []);

    return (
        <MapContainer
            center={[30, 10]}
            zoom={2}
            style={{ height: "500px", width: "100%", borderRadius: "8px" }}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {placesLived.map((place) => (
                <Marker key={`lived-${place.id}`} position={[place.lat, place.lng]} icon={livedIcon}>
                    <Popup>
                        <Box sx={{ minWidth: 150 }}>
                            <Typography variant="subtitle2" fontWeight="bold">{place.city}</Typography>
                            <Typography variant="body2">{place.description}</Typography>
                            <Typography variant="caption" color="text.secondary">{place.years}</Typography>
                        </Box>
                    </Popup>
                </Marker>
            ))}

            {citiesVisited.map((city) => (
                <Marker key={`visited-${city.id}`} position={[city.lat, city.lng]} icon={visitedIcon}>
                    <Popup>
                        <Box sx={{ minWidth: 150 }}>
                            <Typography variant="subtitle2" fontWeight="bold">{city.city}</Typography>
                            <Typography variant="body2" color="text.secondary">{city.country}</Typography>
                        </Box>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
