import React from "react";
import progress from "../../assets/Footer/farm-progress-18.svg";
import background from "../../assets/Footer/farm19.jpg";

const Farm19 = () => {
  return (
    <div>
      <img src={progress} alt="" className="h-2 w-[1900px]" />
      <div className="relative w-full h-screen flex items-center justify-center">
        <img
          src={background} // Replace with actual path
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute ml-7">
          <p className="text-white font-font1 text-3xl md:text-5xl lg:text-5xl font-bold mb-14 ">
          By   2029 , our ambition is to …
          </p>
          <p className="text-white font-font1 text-3xl md:text-5xl lg:text-6xl font-bold mb-7">
          Source 100% of our global strategic ingredients from <br/> sustainable agriculture production.*
          </p>
          <p className="text-white font-font1 text-3xl md:text-5xl lg:text-6xl font-bold mb-7">
          Reduce the climate footprint per liter of Oatly by 70% (at <br/> least).
          </p>
          <p className="text-white font-font1 text-3xl md:text-5xl lg:text-6xl font-bold mb-7 ">
          Actively increase ecosystem health, improve farmer <br/> livelihoods, and contribute to climate solutions.


          </p>
        </div>
      </div>
    </div>
  );
};

export default Farm19;
