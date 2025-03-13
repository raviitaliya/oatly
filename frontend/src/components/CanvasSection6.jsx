import React from "react";
import oat5 from "../assets/home/oat5.svg";
import semi from "../assets/home/semi.jpg";
import canvasChocolate from "../assets/home/canvas-chocolate.jpg";

const CanvasSection6 = () => {
  return (
    <div className="relative sm:w-[10vh] w-[93.24vh] left-[385vh] ">
      <div className="absolute w-[5.772vh] left-[-2.328vh] top-[43%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={oat5}
            alt="Oat Image 5"
            role="presentation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="absolute w-[48.84vh] left-0 top-[3%] transition-transform hover:scale-105 duration-300 ">
        <a
          href="/our-products/oat-drink/676cfb7a00be0a4c614c01e7"
          aria-label="/our-products/oat-drink/676cfb7a00be0a4c614c01e7"
          className="block cursor-hand"
        >
          <div className="relative w-full overflow-hidden">
            <img
              src={semi}
              alt="Oatly Semi Oat Drink Pack"
              decoding="async"
              className="w-full h-auto object-cover"
              sizes="48.84vh"
            />
          </div>
        </a>
      </div>

      <div className="absolute w-[48.84vh] left-[44.4vh] top-[3%] transition-transform hover:scale-105 duration-300">
        <a
          href="/our-products/oat-drink/676d64745987460b4d1627ef"
          aria-label="/our-products/oat-drink/676d64745987460b4d1627ef"
          className="block cursor-hand"
        >
          <div className="relative w-full overflow-hidden">
            <img
              src={canvasChocolate}
              alt="Oatly Oat Drink Chocolate pack"
              decoding="async"
              className="w-full h-auto object-cover"
              sizes="48.84vh"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default CanvasSection6;
