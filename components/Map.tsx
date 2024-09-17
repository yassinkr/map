"use client";
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import L, { LatLngBoundsExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Button from './Button';
import './Map.css';

const bounds: LatLngBoundsExpression = [
  [51.49, -0.08], // Southwest coordinates
  [51.5, -0.06],  // Northeast coordinates
];

const markers = [
  { position: [51.494, -0.071], text: "100" },
  { position: [51.495, -0.075], text: "200" },
  { position: [51.498, -0.074], text: "300" },
  { position: [51.4975, -0.0765], text: "400" },
  { position: [51.4965, -0.0735], text: "500" },
  { position: [51.494, -0.0669], text: "600" },
  { position: [51.4968, -0.071], text: "700" },
  { position: [51.4965, -0.068], text: "800" },
  { position: [51.496, -0.064], text: "900" },
  { position: [51.498, -0.066], text: "100" },
  { position: [51.4978, -0.0635], text: "101" },
  { position: [51.4997, -0.064], text: "102" },
];

const LeafletMap = () => {
  useEffect(() => {
    const map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 13,
      crs: L.CRS.Simple,
    });

    // Create a custom pane for buttons
    const buttonPane = map.createPane('buttonPane');
    buttonPane.style.zIndex = '500'; // Set a common z-index for all buttons in this pane

    // Add image overlay
    L.imageOverlay('/background.jpg', bounds).addTo(map);
    map.fitBounds(bounds);

    // Sort markers by their y position (in ascending order)
    markers.sort((a, b) => a.position[0] - b.position[0]);

    // Add custom markers with buttons in the same pane
    markers.forEach((marker) => {
      const [lat, lng] = marker.position;

      const markerElement = document.createElement('div');
      markerElement.className = 'w-fit h-fit relative z-0';

      const root = createRoot(markerElement);
      root.render(<Button text={marker.text} />);

      L.marker([lat, lng], {
        icon: L.divIcon({
          className: 'leaflet-custom-icon',
          html: markerElement,
          iconSize: [50, 50],
        }),
        pane: 'buttonPane', // Assign to custom pane
        zIndexOffset: 1000,  // Set a high z-index offset
      }).addTo(map);
    });

    // Reapply z-index after map zoom or move
    const enforceZIndex = () => {
      const elements = document.querySelectorAll<HTMLDivElement>(
        '.leaflet-marker-icon.leaflet-custom-icon.leaflet-zoom-animated.leaflet-interactive'
      );
      elements.forEach((element) => {
        element.style.setProperty('z-index', '10', 'important');
      });
    };

    enforceZIndex();

    map.on('zoomend', enforceZIndex);
    map.on('moveend', enforceZIndex);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '70vh', width: '100%' }} />;
};

export default LeafletMap;
