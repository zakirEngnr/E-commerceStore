import React from "react";
import Card from "./Card"; // Import the Card component

const Tshirts = ({ tShirts }) => {
  return (
    <div id="mens" className="bg-gradient-to-r from-blue-50 to-blue-100 py-10">
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-blue-800 mb-6 drop-shadow-lg">
        Men's Collection
        <p className="mt-2 text-md sm:text-lg relative left-4">T-Shirts</p>
      </h1>
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tShirts.map((tshirt, index) => (
          <Card key={index} {...tshirt} />
        ))}
      </div>
    </div>
  );
};

export default Tshirts;
