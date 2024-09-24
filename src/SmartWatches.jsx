import React from "react";
import Card from "./Card"; // Import the Card component

const SmartWatches = ({ smartWatchesData }) => {
  return (
    <div
      id="smartwatches"
      className="bg-gradient-to-r from-blue-50 to-blue-100 py-10"
    >
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-blue-800 mb-6 drop-shadow-lg">
        Smartwatches
      </h1>
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {smartWatchesData.map((watch, index) => (
          <Card key={index} {...watch} />
        ))}
      </div>
    </div>
  );
};

export default SmartWatches;
