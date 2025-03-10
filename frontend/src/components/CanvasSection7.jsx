// src/components/CanvasSection9.jsx
import React from "react";
import ditch from "../assets/home/ditch-milk.png"
import girl from "../assets/home/girl.jpg"
import newspaper from "../assets/home/newspaper.svg"
import amazing from "../assets/home/amazing.svg"

const CanvasSection7 = () => {
  return (
    <div className="relative sm:[1-vh] w-[20.396vh] left-[475vh]">
      {/* Chocolate Deluxe Image */}
      <div className="absolute w-[48.396vh] left-0 top-[1%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={girl}
            alt=""
            role="presentation"
            decoding="async"
            className="w-full h-auto object-cover"
            sizes="48.396vh"
          />
        </div>
      </div>

      {/* Newspaper Image */}
      <div className="absolute w-[29.748vh] left-[15.096vh] top-[44%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={newspaper}
            alt=""
            role="presentation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Ditch Milk Link */}
      <div className="absolute w-[33.3vh] left-[10.656vh] bottom-[-5%] transition-transform hover:scale-105 cursor-pointer">
        <a
          href="/things-we-do/brainwashing/ditch-milk"
          aria-label="Most people know that eating lots of meat isn’t cool for the planet, but not as many are aware that dairy products have a massive impact on the climate, too."
          className="block cursor-hand"
        >
          <div className="relative w-full">
            <img src={ditch} alt="" />
          </div>
        </a>
      </div>

      {/* Amazing Image */}
      <div className="absolute w-[18.204vh] left-[-4.44vh] bottom-[20%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={amazing}
            alt=""
            role="presentation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Oat Images */}
      <div className="absolute w-[8.436vh] left-0 top-[45%]">
        <div className="relative w-full overflow-hidden">
          <img
            src="https://a.storyblok.com/f/107921/x/5087288fbc/oat4.svg"
            alt=""
            role="presentation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="absolute w-[7.548vh] left-[17.76vh] bottom-[27%]">
        <div className="relative w-full overflow-hidden">
          <img
            src="https://a.storyblok.com/f/107921/x/f60ad047dd/oat3.svg"
            alt=""
            role="presentation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="absolute w-[8.436vh] left-[-6.216vh] bottom-[7%]">
        <div className="relative w-full overflow-hidden">
          <img
            src="https://a.storyblok.com/f/107921/x/333a0ef09f/oat2.svg"
            alt=""
            role="presentation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CanvasSection7;
