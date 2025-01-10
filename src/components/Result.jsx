import React from "react";

export default function Result({ fuelData }) {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md mt-4">
      <h2 className="text-lg font-semibold mb-2">Fuel Price Details</h2>
      <p className="text-sm">Fuel Type: {fuelData?.fuelType || "N/A"}</p>
      <p className="text-sm">Date: {fuelData?.date || "N/A"}</p>
      <p className="text-lg font-bold text-blue-600">
        Price: ₹{fuelData?.price || "N/A"}
      </p>
    </div>
  );
}
