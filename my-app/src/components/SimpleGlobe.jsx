import React from 'react';
import Globe from 'react-globe.gl';

function SimpleGlobe() {
  function generateRandomCoordinateWithinIndia() {
    // Define the latitude and longitude boundaries for India
    const minLat = 20; // Minimum latitude
    const maxLat = 30; // Maximum latitude
    const minLng = 75; // Minimum longitude
    const maxLng = 85; // Maximum longitude
  
    // Generate random latitude and longitude values within India's boundaries
    const lat = Math.random() * (maxLat - minLat) + minLat;
    const lng = Math.random() * (maxLng - minLng) + minLng;
  
    return { lat, lng };
  }
  
  function generateRandomPointsInIndia(N) {
    const gData = Array.from({ length: N }, () => ({
      ...generateRandomCoordinateWithinIndia(),
      size: Math.random() / 3,
      color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
    }));
  
    return gData;
  }
  
  const N =40; // Number of points
  const gData = generateRandomPointsInIndia(N);
  
  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      pointsData={gData}
      pointAltitude="size"
      pointColor="color"
    />
  );
}

export default SimpleGlobe;
