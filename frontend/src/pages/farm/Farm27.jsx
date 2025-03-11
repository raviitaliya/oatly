import React from "react";
import progress from "../../assets/Footer/farm-progress-26.svg";
import background from "../../assets/Footer/farm27.jpg";

const Farm27 = () => {
  return (
    <div>
      <img src={progress} alt="" className="h-2 w-[1900px]" />
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Background Image */}
        <img
          src={background} // Replace with actual path
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <p className=" ">We can even get more specific about outcomes if you’d like. </p>
        <p className="">We are focused on:</p>
        <p>• Sequestering carbon in soil and perennials.
• Improving downstream water quality.
• Enabling farmers to trial and develop new practices.
• Building generational security in farm families.
• And a lot more that can’t fit on this slide.</p>
      </div>
    </div>
  );
};

export default Farm27;
