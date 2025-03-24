import React from "react";
import progress from "../../assets/Footer/farm-progress-26.svg";
import background from "../../assets/Footer/farm27.jpg";

const Farm27 = () => {
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

<div className="relative text-white max-w-5xl text-left md:mt-[170px] md:ml-[200px]">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-font1 font-bold uppercase leading-tight">
          We can even get more specific about outcomes if you’d like.
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl  font-font1 font-bold uppercase my-8">
          We are focused on:
        </p>
        <ul className="text-sm sm:text-lg md:text-2xl font-font1 font-bold mt-6 space-y-3">
          <li>• Sequestering carbon in soil and perennials.</li>
          <li>• Improving downstream water quality.</li>
          <li>• Enabling farmers to trial and develop new practices.</li>
          <li>• Building generational security in farm families.</li>
          <li>• And a lot more that can’t fit on this slide.</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Farm27;
