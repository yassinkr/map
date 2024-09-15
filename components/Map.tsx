// components/LeafletMap.tsx

"use client";
import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import L, { LatLngExpression, LatLngBoundsExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Button from './Button'; // Import your Button component

// Define the bounds of the image using LatLngTuple
const bounds: LatLngBoundsExpression = [
  [51.49, -0.08], // Southwest coordinates
  [51.5, -0.06]   // Northeast coordinates
];

// Define markers with relative positions (in pixels)
const markers = [
        { position: [51.493, -0.071] },
        { position: [51.495, -0.075] },
        { position: [51.496, -0.076] },
        { position: [51.4975, -0.0765] },
        { position: [51.4975, -0.074] },
        { position: [51.493, -0.0669] },
        { position: [51.496, -0.071] },
        { position: [51.496, -0.066] },
        { position: [51.415, -0.14] },
        { position: [51.405, -0.15] },
        { position: [51.395, -0.16] },
        { position: [51.385, -0.17] },
        { position: [51.375, -0.18] },
        { position: [51.365, -0.19] },
        { position: [51.355, -0.2] },
        { position: [51.345, -0.21] },
      ];
      
const LeafletMap = () => {
  useEffect(() => {
   
      // Initialize the map
      const map = L.map('map', {
        center: [51.505, -0.09],
        zoom: 13,
        crs: L.CRS.Simple, // Use Simple CRS for image-based maps
      });

      // Add image overlay
      L.imageOverlay('/background.jpg', bounds).addTo(map);
      map.fitBounds(bounds); // Adjust map to fit the image bounds

      // Add custom markers
      markers.forEach(({ position}) => {
        const [lat, lng] = position; // Lat/Lng coordinates for markers
      
        // Create a DOM element for the marker
        const markerElement = document.createElement('div');
        markerElement.className = 'w-fit h-fit'; // Custom class for styling
        // Render the Button component into the DOM element using createRoot
        const root = createRoot(markerElement);
        root.render(<Button  />);
         console.log(markerElement);
        // Create a Leaflet marker using the DOM element
       L.marker([lat, lng], {
          icon: L.divIcon({ className: 'leaflet-custom-icon', html: markerElement, iconSize: [50, 50] })
        }).addTo(map);

       
      });

      // Cleanup function
      return () => {
        map.remove();
      };
    
  }, []);

  return <div id="map" style={{ height: '70vh', width: '100%' }} />;
};

export default LeafletMap;
