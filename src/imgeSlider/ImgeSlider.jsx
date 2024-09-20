import React from "react";

const ImgeSlider = () => {
  const data = [
    "https://www.cloudways.com/blog/wp-content/uploads/Top-Ecommerce-Websites.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOblG7eKeNBPV2qaqv2XIcA65azYBESHIb4il1n5V7LkrCj41U0n4wK02fu0mftXz72I&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RWlHO4Kv2O_RtSZ8m6w-2Ace1dP2fP-arY_Pi5TJyacYC3e_ryjz89pONMf7hyW86pg&usqp=CAU",
    "https://5.imimg.com/data5/SELLER/Default/2021/2/XU/KB/ZE/36610008/online-store-development-500x500.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEFxwUDNa6twGBKn_oJ4eBkebdJ2X2jAgixDd_FBAnoW-XGRnebUIU7D0tOQ2A-R8Qhw&usqp=CAU",
  ];
  return (
    <div className="flex justify-center">
      {data.map((item) => {
        return <img src={item} key={item} alt="" />;
      })}
    </div>
  );
};

export default ImgeSlider;
