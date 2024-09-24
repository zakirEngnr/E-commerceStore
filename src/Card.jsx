import React from "react";
import Button from "./Button";

const Card = ({ title, imgSrc, description, price }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow[10px 10px 10px 0px rgba(46,74,117,1)] p-4 transition-transform transform hover:scale-105 hover:shadow-2xl m-4">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-32 sm:h-40 object-cover mb-2 rounded-lg transition-transform transform hover:scale-110"
      />
      <h3 className="font-semibold text-lg text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600 text-center mb-1 text-sm">{description}</p>
      <p className="font-bold text-blue-600 mb-2 text-md">{price}</p>
      <Button
        label="View Details"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 text-sm w-full"
      />
    </div>
  );
};

export default Card;
