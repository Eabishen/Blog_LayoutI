import React from "react";
import Adbanner from "../assets/images/adbanner.jpg";

const AdBanner = () => {
  return (
    <div className="relative py-6 px-1 mb-8 min-h-[400px] w-full flex items-center justify-center flex-col text-white text-center">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={Adbanner}
          alt="AD Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-20 flex flex-col items-center justify-center gap-4">
        <div className="p-1 rounded-sm bg-white/25 backdrop-blur-sm text-sm tracking-wide w-fit">
          Travel
        </div>
        <h2 className="cust-mainHeading text-2xl md:text-4xl font-medium md:w-3/4 ">
          Richird Norton photorealistic rendering as real photos
        </h2>
        <p className="md:w-3/4 text-balance">
          Progressively incentivize cooperative systems through technically
          sound functionalities. The credibly productivate seamless data.
        </p>

        <button className="bg-white px-6 py-3 text-black font-semibold hover:bg-white/90 rounded transition-colors duration-300">
          <a href="">Start planning your trip</a>
        </button>
      </div>
    </div>
  );
};

export default AdBanner;
