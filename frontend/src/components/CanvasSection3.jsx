import React from "react";
import oatlyWho from "../assets/home/oatly-who.svg";
import stuffwemake from "../assets/home/stuffwemake.svg";
import oat3 from "../assets/home/oat3.svg";
import oat1 from "../assets/home/oat1.svg";
import header from "../assets/home/header.svg";
import gooats from "../assets/home/gooats.svg";

const CanvasSection3 = () => {
  return (
    <div className="relative sm:w-[10vh] w-[44.844vh] left-[60vh]">
      <a
        href="/our-products"
        className="absolute w-[28.86vh] left-0 top-[1%] block transition-transform hover:scale-105 duration-300 cursor-hand"
      >
        <img src={stuffwemake} alt="Stuff we make" className="w-full h-auto" />
      </a>

      <div className="absolute w-[8.436vh] left-[-4.44vh] top-[33%]">
        <img src={oat3} alt="" role="presentation" className="w-full h-auto" />
      </div>

      <a
        href="/random-answers/"
        className="absolute w-[42.18vh] left-[-1.776vh] top-[43%] block transition-transform hover:scale-105 duration-300 cursor-hand"
      >
        <img
          src={header}
          alt="Article with 17 facts about Oatly and Nutrition"
          decoding="async"
          className="w-full h-auto object-cover"
          sizes="42.18vh"
        />
      </a>

      <div className="absolute w-[15.54vh] left-[29.304vh] top-[29%]">
        <img
          src={gooats}
          alt=""
          role="presentation"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute w-[8.436vh] left-[22.2vh] bottom-[14%]">
        <img src={oat1} alt="" className="w-full h-auto" />
      </div>

      <a
        href="/oatly-who"
        aria-label="/oatly-who"
        className="absolute w-[22.644vh] left-[-4.44vh] bottom-[2%] block transition-transform hover:scale-105 duration-300 cursor-hand"
      >
        <img
          src={oatlyWho}
          alt="speech bubble saying Oatly who?"
          decoding="async"
          className="w-full h-auto object-cover"
          sizes="22.644vh"
        />
      </a>
    </div>
  );
};

export default CanvasSection3;
