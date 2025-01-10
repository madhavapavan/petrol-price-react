import React, { useState } from "react";
import Map from "./components/Map";
import FuelForm from "./components/FuelForm";
import Result from "./components/Result";

export default function App() {
  const [city, setCity] = useState(null);
  const [fuelData, setFuelData] = useState(null);

  return (
    
    <div className="min-h-screen bg-gray-50">
      <header className="text-center py-6 bg-blue-600 text-white">
        <h1 className="text-3xl font-bold">Fuel Prices in India</h1>
      </header>
      <main className="container mx-auto p-4">
        <Map setCity={setCity} />
        {city && (
          <>
            <FuelForm city={city} setFuelData={setFuelData} />
            {fuelData && <Result fuelData={fuelData} />}
          </>
        )}
      </main>
      
    </div>
  );
}
