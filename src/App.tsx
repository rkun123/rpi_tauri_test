import Map from 'react-map-gl'
import "./App.css";
import { useState } from 'react';

function App() {
  const [loaded, setLoaded] = useState(false)
  return (
    <main className="container relative">
      <Map
        mapboxAccessToken="pk.eyJ1Ijoicmt1biIsImEiOiJjbHhqMWhwNnkxeDEyMnFxejdxMXU5ZjJ4In0.r7_OfUis_FNyA2ZLtb3g-A"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh"
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onLoad={(e) => setLoaded(true)}
      ></Map>
    </main >
  );
}




export default App