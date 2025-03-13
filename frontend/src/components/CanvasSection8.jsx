import React from "react";
import dots from "../assets/home/dots.jpg";
import handPinch from "../assets/home/hand-pinch.svg";
import whitebg2 from "../assets/home/white-bg2.svg";
import moreStories from "../assets/home/more-stories.svg";
import oat1 from "../assets/home/oat1.svg";
import oat5 from "../assets/home/oat5.svg";
import cartonleadimage from "../assets/home/cartonleadimage.jpg";
import oaltyGold from "../assets/home/oaltygold.jpg";

const CanvasSection8 = () => {
  return (
    <div className="relative sm:w-[10vh] w-[116.772vh] left-[519vh] ">
      <div className="absolute w-[116.772vh] left-0 top-[-3%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={dots}
            alt="Pixel Dots Image"
            role="presentation"
            decoding="async"
            className="w-full h-auto object-cover"
            sizes="116.772vh"
          />
        </div>
      </div>

      <div className="absolute w-[29.86vh] left-[-15.984vh] bottom-[-2.5%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={handPinch}
            alt="Hand Pinching Image"
            role="presentation"
            decoding="async"
            className="w-full h-auto object-cover"
            sizes="28.86vh"
          />
        </div>
      </div>

      <div className="absolute w-[48.84vh] left-[31.08vh] top-[14%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={whitebg2}
            alt="White BG Image"
            role="presentation"
            decoding="async"
            className="w-full h-auto object-cover"
            sizes="48.84vh"
          />
        </div>
      </div>

      <div className="absolute w-[24.42vh] left-[32.856vh] top-[1%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={moreStories}
            alt="More Stories"
            decoding="async"
            className="w-full h-auto object-cover"
            sizes="24.42vh"
          />
        </div>
      </div>

      <div className="absolute w-[42.18vh] left-[34.632vh] top-[18%] transition-transform hover:scale-105 duration-300 cursor-pointer">
        <a
          href="/things-we-do/"
          aria-label="Article - The Giant Oatly Carton"
          className="block cursor-hand"
        >
          <div className="flex flex-col">
            <div className="relative w-full overflow-hidden">
              <img
                src={cartonleadimage}
                alt="A group of kids standing in front of the giant Oatly carton."
                decoding="async"
                className="w-full h-auto object-cover rounded"
                sizes="42.18vh"
              />
            </div>
            <div className="sm:mt-2 lg:mt-4 sm:text-[10px]/3 md:text-[25px]/4 lg:text-[40px]/8 font-font1">
              The Giant Oatly Carton
            </div>
            <div className="text-sm text-black font-font2">
              stories • Jan 18, 2024
            </div>
          </div>
        </a>
      </div>

      <div className="absolute w-[42.18vh] left-[34.632vh] top-[57%] transition-transform hover:scale-105 duration-300 cursor-hand">
        <a
          href="/things-we-do"
          aria-label="Article - Oatly Does the Golden Spurtle"
          className="block cursor-hand"
        >
          <div className="flex flex-col">
            <div className="relative w-full overflow-hidden">
              <img
                src={oaltyGold}
                alt="The winner of the Golden Spurtle, Adam, is sitting on his friend's shoulders."
                decoding="async"
                className="w-full h-auto object-cover rounded"
                sizes="42.18vh"
              />
            </div>
            <div className="sm:mt-2 lg:mt-4 sm:text-[10px]/3 md:text-[25px]/4 lg:text-[30px]/7 font-font1">
              Oatly Does the Golden Spurtle
            </div>
            <div className="text-sm text-black font-font2">
              stories • Dec 6, 2023
            </div>
          </div>
        </a>
      </div>

      <div className="absolute w-[7.548vh] left-[97.68vh] bottom-[38%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={oat1}
            alt=""
            role="presentation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="absolute w-[5.772vh] left-[13.32vh] top-[37%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={oat5}
            alt=""
            role="presentation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CanvasSection8;
