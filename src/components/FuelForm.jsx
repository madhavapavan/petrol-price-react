import React, { useState } from "react";
import axios from "axios";

export default function FuelForm({ city, setFuelData }) {
  const [date, setDate] = useState("");
  const [fuelType, setFuelType] = useState("Petrol");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://daily-fuel-price-india1.p.rapidapi.com/api/fuel/${fuelType}/${city.lat},${city.lng}?date=${date}`,
        {
          headers: {
            "x-rapidapi-key": "7c28751bbdmsh3101697832ea434p1b4484jsn10e38fc0563f",
            "x-rapidapi-host": "daily-fuel-price-india1.p.rapidapi.com",
          },
        }
      );
      setFuelData(response.data);
    } catch (error) {
      console.error("Error fetching fuel data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow-md my-4">
      <h2 className="text-lg font-semibold mb-4">Select Fuel Type and Date</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Fuel Type</label>
        <select
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
          className="w-full border-gray-300 rounded-md"
        >
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Get Fuel Price
      </button>
    </form>
  );
}
