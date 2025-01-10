import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ setCity }) {
  const [clickedLocation, setClickedLocation] = useState(""); // State to store the name of the state

  function LocationMarker() {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;

        // Fetch location details using a reverse geocoding API
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
        );
        const data = await response.json();

        const { address } = data;
        const state = address?.state || "Unknown State";
        const city = address?.city || address?.town || address?.village || "Unknown City";
        const country = address?.country || "Unknown Country";

        // Update state for displaying on the webpage
        setClickedLocation(state);

        // Log details to the console
        console.log("Coordinates:", { lat, lng });
        console.log("City:", city);
        console.log("State:", state);
        console.log("Country:", country);

        // Update city state if needed
        setCity({ lat, lng });
      },
    });
    return null;
  }

  useEffect(() => {
    // Trigger map resize if needed
    const handleResize = () => {
      const map = document.querySelector(".leaflet-container");
      if (map) {
        map._leaflet_map.invalidateSize(); // Forces the map to update its dimensions
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="relative w-full md:w-2/3 lg:w-1/2 h-96 rounded-md shadow-lg border border-gray-200 bg-white">
        <h2 className="text-xl font-semibold text-center mb-4">Select City on Map</h2>
        <MapContainer
          center={[20.5937, 78.9629]} // India’s approximate center
          zoom={5}
          className="h-full w-full"
          whenReady={(map) => map.target.invalidateSize()} // Ensures proper rendering when ready
        >
          <TileLayer
            url={`https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=ZhtMLn6IC0Ci4gtc93hA`}
            attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> contributors'
          />
          <LocationMarker />
        </MapContainer>
        {clickedLocation && (
          <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow">
            <p className="text-sm font-semibold">
              <span className="text-gray-600">State: </span>
              {clickedLocation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
