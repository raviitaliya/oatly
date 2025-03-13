import React from "react";
import globle from "../assets/home/globle.png";
import couple from "../assets/home/couple.jpg";

const CanvasSection2 = () => {
  return (
    <div className="relative sm:w-[10vh] w-[42.18vh] ">
      <div className="absolute w-[42.18vh] left-[8.88vh] top-[6%] transition-transform hover:scale-105 duration-300 cursor-hand">
        <div className="relative w-full overflow-hidden">
          <img
            src={couple}
            alt=""
            role="presentation"
            decoding="async"
            className="w-full h-auto object-cover"
            sizes="42.18vh"
          />
        </div>
      </div>

      <a
        href="/our-products/oat-drink/676cfa2900be0a4c614c01e1"
        className="absolute w-[42.18vh] left-[17.88vh] bottom-0 block transition-transform hover:scale-105 duration-300 cursor-hand"
      >
        <div className="relative w-full overflow-hidden">
          <img
            src={globle}
            alt="Product Ikaffe Barista Organic Oat Drink"
            decoding="async"
            className="w-full h-auto object-cover"
            sizes="42.18vh"
          />
        </div>
      </a>
    </div>
  );
};

export default CanvasSection2;
