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
  { position: [51.495, -0.07], buttonPosition: 'absolute' }, // Example position on the image
  { position: [51.495, -0.075], buttonPosition: 'relative' }  // Another example position
];

const LeafletMap = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
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
        markerElement.className = 'leaflet-marker'; // Ensure the className for styling

        // Render the Button component into the DOM element using createRoot
        const root = createRoot(markerElement);
        root.render(<Button  />);

        // Create a Leaflet marker using the DOM element
        const leafletMarker = L.marker([lat, lng], {
          icon: L.divIcon({ className: 'leaflet-custom-icon', html: markerElement.outerHTML, iconSize: [50, 50] })
        }).addTo(map);

        // Append the marker element to the map's container
        map.getPanes().overlayPane.appendChild(markerElement);

        // Handle button click events directly
       
      });

      // Cleanup function
      return () => {
        map.remove();
      };
    }
  }, []);

  return <div id="map" style={{ height: '70vh', width: '100%' }} />;
};

export default LeafletMap;
