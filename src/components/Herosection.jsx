import React from "react";

const Herosection = () => {
  return (
    <div className="text-white h-full grid place-content-center text-center cust-mainHeading">
      <h1 className="text-3xl font-medium md:text-[2.5rem] xxl:text-[60px] uppercase leading-normal">
        Inspiration for travel by real people
      </h1>
      <p className="text-lg">Book smart, Travel simple</p>
      <div className="mt-4">
        <button className="bg-white px-6 py-3 text-black font-bold hover:bg-white/90 rounded transition-colors duration-300">
          <a href="">Start planning your trip</a>
        </button>
      </div>
    </div>
  );
};

export default Herosection;
