import React from "react";
import choclate from "../assets/home/Chocolate.jpg";
import dats from "../assets/home/24k.svg";
import finder from "../assets/home/finder.svg";
import monster from "../assets/home/monster.svg";
import oat3 from "../assets/home/oat3.svg";
import oat2 from "../assets/home/oat2.svg";
import oat5 from "../assets/home/oat5.svg";
import rainbow from "../assets/home/rainbow.svg";

const CanvasSection10 = () => {
  return (
    <div className="relative sm:w-[10vh] w-[83.916vh] left-[675vh]">
      <div className="absolute w-[64.38vh] left-[4.44vh] top-[5%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={choclate}
            alt=""
            role="presentation"
            decoding="async"
            className="w-full h-auto object-cover"
            sizes="64.38vh"
          />
        </div>
      </div>

      <div className="absolute w-[18.204vh] left-[53.28vh] top-[37%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={dats}
            alt=""
            role="presentation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="absolute w-[28.86vh] left-[4.44vh] bottom-[28%] transition-transform hover:scale-105 duration-300">
        <a
          href="https://oatfinder.oatly.com/"
          aria-label="Find coffee shops serving our Barista Edition Oat Drink."
          className="block"
        >
          <div className="relative w-full overflow-hidden cursor-hand">
            <img
              src={finder}
              alt="Oatfinder"
              className="w-full h-auto object-cover"
            />
          </div>
        </a>
      </div>

      <div className="absolute w-[24.42vh] left-[15.096vh] bottom-[2%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={rainbow}
            alt=""
            role="presentation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="absolute w-[8.436vh] left-[75.48vh] top-[12%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={oat2}
            alt=""
            role="presentation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="absolute w-[5.772vh] left-[37.296vh] bottom-[41%]">
        <div className="relative w-full overflow-hidden">
          <img src={oat5} alt="" className="w-full h-auto object-cover" />
        </div>
      </div>

      <div className="absolute w-[8.436vh] left-0 bottom-[14%]">
        <div className="relative w-full overflow-hidden">
          <img src={oat3} alt="" className="w-full h-auto object-cover" />
        </div>
      </div>

      <div className="absolute w-[35.964vh] left-[44.4vh] bottom-[-13%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={monster}
            alt=""
            role="presentation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CanvasSection10;
