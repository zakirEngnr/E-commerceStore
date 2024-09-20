import React from "react";

function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-gradient-to-br from-teal-400 to-purple-600 rounded-lg shadow-2xl overflow-hidden">
      <div className="flex items-center space-x-3 mb-4 sm:mb-0">
        <div className="bg-white p-2 rounded-full shadow-lg">
          <img
            src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
            alt="Logo"
            className="h-14"
          />
        </div>
        <p className="text-4xl font-extrabold text-white">Shop Cart</p>
      </div>

      <div className="relative flex-grow mx-4 max-w-xs mb-4 sm:mb-0">
        <input
          type="text"
          placeholder="Find your favorite products"
          className="w-full h-10 pl-4 pr-10 text-gray-800 placeholder-gray-400 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
          🔍
        </span>
      </div>

      <ul className="flex flex-wrap space-x-8 mb-4 sm:mb-0">
        {["Women", "Men", "Kids", "Contact Us"].map((item) => (
          <li
            key={item}
            className="text-white hover:underline hover:text-yellow-300 cursor-pointer transition duration-300"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="flex items-center space-x-4">
        <button className="bg-white text-teal-600 font-semibold py-2 px-6 rounded-full shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-100">
          Login
        </button>
        <div className="relative">
          <div className="bg-white p-2 rounded-full shadow-md transition-transform duration-300 transform hover:scale-110">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYPsNmhIn5Fnqa_Dic3BDBz8S5qiLH_E-7Q&s"
              alt="Cart"
              className="h-10 w-10"
            />
          </div>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
