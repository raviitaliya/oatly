import React from "react";
import german from "../assets/home/german.png";
import section2 from "../assets/home/section2.jpg";
import truck from "../assets/home/truck.png";
import oat1 from "../assets/home/oat1.svg";
import oat2 from "../assets/home/oat2.svg";
import oat3 from "../assets/home/oat3.svg";
import oat5 from "../assets/home/oat5.svg";
import feet from "../assets/home/feet.svg";
import milkmyths from "../assets/home/milkmyths.svg";


const CanvasSection1 = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Feet Image */}
      <div className="relative w-[86.58vh] left-[4.44vh] -top-[3%]">
        <div className="w-full h-full">
          <img
            src={feet}
            alt="Feet Image"
            className="w-full h-auto"
            role="presentation"
          />
        </div>
      </div>

      {/* Hey Food Industry Link */}
      <div className="relative w-[18vh] left-[4%] top-[-45%] hover:scale-105 transition-transform">
        <a
          href="/things-we-do/initiatives/hey-food-industry"
          aria-label="/things-we-do/initiatives/hey-food-industry"
          className="block w-full h-full cursor-hand"
        >
          <div className="relative">
            <div className="w-full h-full ">
              <img
                src={german}
                alt="this is img"
                className="w-full h-auto"
                role="presentation"
              />
            </div>
          </div>
        </a>
      </div>

      {/* Milk Myths Link */}
      <div className="relative w-[33.3vh] left-[44.4vh] top-[-18%] hover:scale-105 transition-transform">
        <a
          href="/things-we-do/brainwashing/milk-myths"
          aria-label="Is everything you have learnt about cow's milk true? We decided to find out."
          className="block w-full h-full"
        >
          <div className="w-full h-full cursor-hand">
            <img
              src={milkmyths}
              alt="Milk Myths"
              className="w-full h-auto"
            />
          </div>
        </a>
      </div>

      {/* Resurrecting Oats Link */}
      <div className="relative w-[44.18vh] left-[57.72vh] bottom-[10%] hover:scale-105 transition-transform">
        <a
          href="/things-we-do"
          aria-label="When we heard that some US farmers were putting oats back into their rotations to achieve a more sustainable agricultural system, we were pretty excited."
          className="block w-full h-full cursor-hand"
        >
          <div className="relative pb-[61.9565%]">
          <img src={truck} alt="truck"  />
          </div>
        </a>
      </div>

      {/* Oat Images */}
      <div className="relative w-[7.548vh] left-[4.44vh] top-[55%]">
        <img
          src={oat1}
          alt="Oat Images"
          className="w-full h-auto"
          role="presentation"
        />
      </div>

      <div className="relative w-[7.548vh] left-[81.696vh] bottom-[80%]">
        <img
          src={oat1}
          alt="Oat Images"
          className="w-full h-auto"
          role="presentation"
        />
      </div>

      <div className="relative w-[5.772vh] left-[97.68vh] bottom-[100%]">
        <img
          src={oat5}
          alt="Oat Images"
          className="w-full h-auto"
        />
      </div>

      <div className="relative w-[8.436vh] left-[44.4vh] bottom-[80%]">
        <img
          src={oat3}
          alt="Oat Images"
          className="w-full h-auto"
        />
      </div>

      <div className="relative w-[8.436vh] left-[44.4vh] top-[-145%]">
        <img
          src={oat2}
          alt="Oat Images"
          className="w-full h-auto"
          role="presentation"
        />
      </div>

      {/* Barbershop Quartet Image */}
      <div className="relative w-[33.3vh] left-[6vh] bottom-[120%]">
        <img
          src={section2}
          alt="Barbershop Quartet Image"
          className="w-full h-auto "
          role="presentation"
          sizes="330.3vh"
        />
      </div>
    </div>
  );
};

export default CanvasSection1;
