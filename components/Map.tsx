
"use client";
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client'; 
import L, {  LatLngBoundsExpression } from 'leaflet';
import Button from './Button'; 

// Define the bounds of the image using LatLngTuple
const bounds: LatLngBoundsExpression = [
  [51.49, -0.08], // Southwest coordinates
  [51.5, -0.06]   // Northeast coordinates
];

// Define markers with relative positions (in pixels)
const markers = [
        { position: [51.494, -0.071] , text: "100" },
        { position: [51.495, -0.075] , text: "200" },
        { position: [51.498, -0.074] , text: "300" },
        { position: [51.4975, -0.0765] , text: "400" },
        { position: [51.4965, -0.0735] , text: "500" },
        { position: [51.494, -0.0669], text: "600" },
        { position: [51.4968, -0.071] , text: "700" },
        { position: [51.4965, -0.068]  , text: "800" },
        { position: [51.496, -0.064] , text: "900" },
        { position: [51.498, -0.066] , text: "100" },
        { position: [51.4978, -0.0635], text: "101" },
        { position: [51.4997, -0.064] , text: "102" },

      ];
      
const LeafletMap = () => {
  useEffect(() => {
   if(typeof window === 'undefined') return;
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
      markers.forEach((marker) => {
        const [lat, lng] = marker.position; // Lat/Lng coordinates for markers
      
        // Create a DOM element for the marker
        const markerElement = document.createElement('div');
        markerElement.className = 'w-fit h-fit'; // Custom class for styling
        // Render the Button component into the DOM element using createRoot
        const root = createRoot(markerElement);
        root.render(<Button text ={marker.text}  />);
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
