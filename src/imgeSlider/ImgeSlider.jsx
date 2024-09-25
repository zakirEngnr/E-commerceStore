/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = () => {
  const images = [
    {
      url: "https://media.istockphoto.com/id/1457075246/vector/cleaning-service-hand-holding-phone-to-call-to-cleaning-company-order-housekeeping-work.jpg?s=2048x2048&w=is&k=20&c=sWkL5fkkTXkE-6KKSNcvPDKpM7N6fb3SupSPu7bKVzc=",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png",
    },
    {
      url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    },
    {
      url: "https://images.unsplash.com/photo-1586880244406-556ebe35f282",
    },
    {
      url: "https://images.unsplash.com/photo-1557821552-17105176677c",
    },
    {
      url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    setCurrentIndex((Index) => (Index === 0 ? images.length - 1 : Index - 1));
  };

  const goToNext = () => {
    setCurrentIndex((Index) => (Index === images.length - 1 ? 0 : Index + 1));
  };
  useEffect(() => {
    setTimeout(() => {
      goToNext();
    }, 20000);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-2xl">
      <div
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={`${image.url}`}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
              <p className="text-white text-xl font-semibold p-4">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
        aria-label="Previous Slide"
      >
        <FaChevronLeft className="text-gray-800" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
        aria-label="Next Slide"
      >
        <FaChevronRight className="text-gray-800" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-white scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
