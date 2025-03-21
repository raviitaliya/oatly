import React from "react";
import dots from "../assets/home/dots.jpg";
import mobile from "../assets/home/mobile.png";
import whitebg2 from "../assets/home/white-bg2.svg";
import things from "../assets/home/things-we-do.svg";
import hat from "../assets/home/hat.png";
import campus from "../assets/home/campus.jpg";
import bus from "../assets/home/bus.jpg";

const CanvasSection4 = () => {
  return (
    <>
      <div className="relative sm:w-[10vh] w-[130.98vh] left-[106.5vh]">
        <div className="absolute w-[125.964vh] left-[-15.984vh] top-[-2%]">
          <img
            src={dots}
            alt=""
            role="presentation"
            decoding="async"
            className="w-full h-auto object-cover"
            sizes="146.964vh"
          />
        </div>

        <div className="absolute w-[66.156vh] left-[17.76vh] top-[16%]">
          <img
            src={whitebg2}
            alt="White Background"
            role="presentation"
            decoding="async"
            className="w-full h-[700px] object-cover"
            sizes="66.156vh"
          />
        </div>

        <a
          href="/things-we-do"
          aria-label="What are we doing, really? Apart from oats, that is. Come and look for yourself."
          className="absolute w-[42.18vh] left-[17.76vh] top-[8%] block transition-transform hover:scale-105 duration-300 cursor-hand"
        >
          <img
            src={things}
            alt="A playful illustration featuring bold, whimsical text that reads 'things we do,' conveying a sense of fun and creativity"
            decoding="async"
            className="w-full h-auto object-cover"
            sizes="42.18vh"
          />
        </a>

        <a
          href="/things-we-do"
          className="absolute w-[60.828vh] left-[20.424vh] top-[18%] block transition-transform hover:scale-105 duration-300 cursor-hand"
        >
          <div className="flex flex-col">
            <img
              src={hat}
              alt="OatlyxNespresso"
              decoding="async"
              className="w-full h-auto object-cover rounded"
              sizes="60.828vh"
            />
            <div className="sm:mt-2 lg:mt-4 sm:text-[10px]/3 md:text-[25px]/4 lg:text-[40px]/7 font-font1">
              Oatly x Nespresso
            </div>
            <div className="sm:text-[5px] md:text-[12px] lg:text-sm text-black font-font2">
              brainwashing • Jan 14, 2025
            </div>
          </div>
        </a>

        <a
          href="/things-we-do"
          className="absolute w-[28.86vh] left-[19.98vh] top-[62%] block transition-transform hover:scale-105 duration-300 cursor-hand"
        >
          <div className="flex flex-col cursor-hand">
            <img
              src={campus}
              alt="A college girl is interviewed while holding an Oatly soft serve."
              decoding="async"
              className="w-full h-auto object-cover rounded"
              sizes="28.86vh"
            />
            <div className="sm:mt-1 lg:mt-2 sm:text-[10px]/3 md:text-[20px]/4 lg:text-[35px]/7 font-bold font-font1">
              Bring Oatly to Your Campus
            </div>
            <div className="sm:text-[4px] md:text-[10px] lg:text-sm  text-black font-font2">
              stories • Sep 2, 2024
            </div>
          </div>
        </a>

        <a
          href="/things-we-do"
          className="absolute w-[28.86vh] left-[53.28vh] top-[62%] block transition-transform hover:scale-105 duration-300 cursor-pointer"
        >
          <div className="flex flex-col cursor-hand">
            <img
              src={bus}
              alt="A yellow Oatly Soft Serve truck"
              decoding="async"
              className="w-full h-auto object-cover rounded"
              sizes="28.86vh"
            />
            <div className="sm:mt-1 sm:text-[8px] md:text-[20px]/4 lg:mt-2 lg:text-[35px]/7  font-bold font-font1">
              Enter the Dairy Deprogramming Zone
            </div>
            <div className="sm:text-[5px] md:text-[10px] lg:text-sm text-black font-font2">
              stories • Jul 9, 2024
            </div>
          </div>
        </a>

        <a
          href="https://hey-barista.com/"
          aria-label="https://hey-barista.com/"
          className="absolute w-[43.956vh] left-[92.52vh] top-[-3%] block transition-transform hover:scale-105 duration-300 cursor-pointer"
        >
          <img
            src={mobile}
            alt="hand pointing at a mobile phone and a splash saying Look its an app!"
            decoding="async"
            className="w-full h-auto object-cover"
            sizes="43.956vh"
          />
        </a>
      </div>
    </>
  );
};

export default CanvasSection4;
