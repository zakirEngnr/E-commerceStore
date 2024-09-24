import React from "react";

const Button = () => {
  return (
    <div className="flex space-x-2">
      <button className="flex items-center justify-center px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md shadow-md transition-transform duration-300 hover:bg-blue-700 hover:scale-105">
        <span className="mr-1">🛒</span>
        Buy Now
      </button>
      <button className="flex items-center justify-center px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-md shadow-sm transition-transform duration-300 hover:bg-green-700 hover:scale-105">
        <span className="mr-1">➕</span>
        Add to Cart
      </button>
    </div>
  );
};

export default Button;
