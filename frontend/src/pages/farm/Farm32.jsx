import React from "react";
import progress from "../../assets/Footer/farm-progress-31.svg";
import background from "../../assets/Footer/farm31.jpg";

const Farm32 = () => {
  return (
    <div>
      <img src={progress} alt="" className="h-2 w-[1900px]" />
      <div className="relative w-full h-screen flex ">
        {/* Background Image */}
        <img
          src={background}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative text-white max-w-7xl text-left md:mt-[200px] md:ml-[200px]">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-font1 font-bold uppercase leading-tight">
          “The whole idea of planting clover and other cover crops kind of got lost through the generations. These are actually all things my grandpa and great grandpa did, so it’s cool that the old has become new again.”
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl  font-font1 font-bold uppercase my-8">
           
—Ben Dwire
          </p>
        </div>
      </div>
    </div>
  );
};

export default Farm32;
