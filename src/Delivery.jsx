import React from "react";

const Delivery = () => {
  const deliveryOptions = [
    {
      imgSrc:
        "https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-fast-delivery-icon-delivery-icon-png-image_2047531.jpg",
      title: "Free Delivery",
      description: "When you spend $80 or more",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7J2fXn-LGc7O2l1JlVreaaXFRq8StlORHw&s",
      title: "We're Available",
      description: "Need help? Contact any time",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXm1jmiUTYV2Jwt1RYNGfI5k1KIEYuLfTfqg&s",
      title: "Satisfied or Return",
      description: "30 days easy return",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlYhnFoUNW_HZHOzQqPK2dMHBN6k1I6P2gA&s",
      title: "Secure Payment",
      description: "Visa, Mastercard, Stripe, PayPal",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 py-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-700 drop-shadow-lg">
        Our Delivery Promise
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {deliveryOptions.map(({ imgSrc, title, description }) => (
          <div
            key={title}
            className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              className="w-20 h-20 mb-4 transition-transform transform hover:scale-125"
              src={imgSrc}
              alt={`${title} icon`}
            />
            <h3 className="font-semibold text-xl text-gray-800 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 text-center text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delivery;
