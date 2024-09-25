import React from "react";
import ImgeSlider from "./imgeSlider/ImgeSlider";
import Navbar from "./Navbar/Navbar";
import Delivery from "./Delivery";
import Tshirts from "./Tshirts";
import SmartWatches from "./SmartWatches";

function App() {
  const tShirts = [
    {
      imgSrc:
        "https://essentia.com.pk/cdn/shop/products/FST1246-016-MBL_1.jpg?v=1669803912",
      title: "Graphic Tee",
      description: "A stylish graphic t-shirt for casual wear.",
      price: "$30",
    },
    {
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0504/2028/5634/products/FST1247-015-SKY_3_1770x.jpg?v=1669803890",
      title: "Graphic Tee - Black",
      description: "A black graphic tee for a bold statement.",
      price: "$30",
    },
    {
      imgSrc:
        "https://essentia.com.pk/cdn/shop/products/FST1246-016-MBL_1.jpg?v=1669803912",
      title: "Graphic Tee",
      description: "A stylish graphic t-shirt for casual wear.",
      price: "$30",
    },
    {
      imgSrc:
        "https://outfitters.com.pk/cdn/shop/files/F0941106901_2.jpg?v=1719997503",
      title: "Plain White Tee",
      description: "The perfect plain white t-shirt for layering.",
      price: "$90",
    },
    {
      imgSrc:
        "https://outfitters.com.pk/cdn/shop/files/F1121106128_3.jpg?v=1725605419&width=533",
      title: "Cotton Crew Neck",
      description: "Soft cotton crew neck for all-day comfort.",
      price: "$40",
    },
    {
      imgSrc:
        "https://outfitters.com.pk/cdn/shop/files/F1132106817_1.jpg?v=1724837201",
      title: "Sports Tee",
      description: "A lightweight t-shirt perfect for workouts.",
      price: "$50",
    },
    {
      imgSrc:
        "https://essentia.com.pk/cdn/shop/products/FST1246-016-MBL_1.jpg?v=1669803912",
      title: "Graphic Tee",
      description: "A stylish graphic t-shirt for casual wear.",
      price: "$30",
    },
    {
      imgSrc:
        "https://outfitters.com.pk/cdn/shop/files/F0113125628_2.jpg?v=1721286950&width=533",
      title: "Long Sleeve Tee",
      description: "Perfect for layering in cooler weather.",
      price: "$30",
    },
    {
      imgSrc:
        "https://outfitters.com.pk/cdn/shop/files/F1125106001_2.jpg?v=1724836918&width=533",
      title: "Eco-Friendly Tee",
      description: "Made from organic materials for sustainability.",
      price: "$80",
    },
    {
      imgSrc:
        "https://outfitters.com.pk/cdn/shop/files/F1003106705_2.jpg?v=1721277366&width=533",
      title: "Hooded Tee",
      description: "A comfy hooded t-shirt for a sporty look.",
      price: "$30",
    },
    {
      imgSrc:
        "https://outfitters.com.pk/cdn/shop/files/F1128106901_2.jpg?v=1724215809&width=533",
      title: "Striped T-Shirt",
      description: "A trendy striped t-shirt for casual outings.",
      price: "$70",
    },
    {
      imgSrc:
        "https://outfitters.com.pk/cdn/shop/files/F1125106117_3.jpg?v=1724836918&width=533",
      title: "Vintage Logo Tee",
      description: "A retro logo tee for a classic look.",
      price: "$20",
    },
  ];

  const smartWatchesData = [
    {
      imgSrc:
        "https://en-pk.svestonwatches.com/cdn/shop/files/Nitro_Cam003V1.webp?v=1717227422&width=720g",
      title: "Apple Watch Series 8",
      description: "Smartwatch with advanced health features and GPS.",
      price: "$399",
    },
    {
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/Legend_Cam002V2.webp?v=1719309018",
      title: "Amazfit GTR 3",
      description:
        "Stylish smartwatch with long battery life and fitness tracking.",
      price: "$199",
    },
    {
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/Primo_Cam002V1.webp?v=1716294842",
      title: "Samsung Galaxy Watch 5",
      description:
        "Stylish smartwatch with fitness tracking and heart rate monitoring.",
      price: "$279",
    },
    {
      imgSrc:
        "https://en-pk.svestonwatches.com/cdn/shop/files/Nitro_Cam003V1.webp?v=1717227422&width=720g",
      title: "Apple Watch Series 8",
      description: "Smartwatch with advanced health features and GPS.",
      price: "$399",
    },
    {
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/Torque_Cam002_V3.png?v=1720090509",
      title: "Garmin Forerunner 245",
      description:
        "Running smartwatch with GPS and advanced training features.",
      price: "$349",
    },
    {
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/2222_1.webp?v=1716014353",
      title: "Fitbit Versa 4",
      description: "Versatile smartwatch with fitness and health tracking.",
      price: "$229",
    },
    {
      imgSrc:
        "https://en-pk.svestonwatches.com/cdn/shop/files/Nitro_Cam003V1.webp?v=1717227422&width=720g",
      title: "Apple Watch Series 8",
      description: "Smartwatch with advanced health features and GPS.",
      price: "$399",
    },
    {
      imgSrc:
        "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/Nitro_Cam002_V4_78aa0751-d553-4aaa-86a4-e02d8dd721ec.webp?v=1719580799",
      title: "TicWatch Pro 3",
      description: "Dual-layer display smartwatch with extensive features.",
      price: "$299",
    },
  ];

  return (
    <div className="bg-white text-black">
      <Navbar />
      <ImgeSlider />
      <Delivery />
      <Tshirts tShirts={tShirts} />
      <SmartWatches smartWatchesData={smartWatchesData} />
    </div>
  );
}

export default App;
