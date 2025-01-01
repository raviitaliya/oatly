import React from "react";
import Oatlytv from "../assets/ProductSvg/OatlyTV.svg";
import pinkImage from "../assets/Footer/Pink.png";

const OatlyTv = () => {
  return (
  
    <div
      className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] md:min-h-screen bg-center w-full"
      style={{ backgroundImage: `url(${pinkImage})` }}
    >
      {/* TV Image Section */}
      <div className="flex items-center justify-end p-4 md:p-6">
        <img src={Oatlytv} alt="OatlyTV" />
      </div>

      {/* Text Section */}
      <div className="flex items-center justify-start p-4 md:p-6">
        <div className="max-w-lg">
          <h1 className="text-6xl md:text-4xl  font-font1 mb-4 md:mb-6">
            HOW DO WE MAKE OUR OAT DRINKS?
          </h1>
          <p className="text-lg md:text-xl leading-relaxed font-font2">
            Our oat base is just oats and water. But it's what we do with those
            oats and that water that makes Oatly so special.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OatlyTv;
