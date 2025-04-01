import React from "react";
import teareportlogo from "../assets/home/teareportlogo.svg";
import barbershopQuartet from "../assets/home/barbershop-quartet.jpg";
import farm from "../assets/home/farm.jpg";
import wowCow from "../assets/home/wow-no-cow.svg";
import farmer from "../assets/home/farmerseekingfarmers.svg";
import oat3 from "../assets/home/oat3.svg";
import oat1 from "../assets/home/oat1.svg";
import oat5 from "../assets/home/oat5.svg";
import oat2 from "../assets/home/oat2.svg";
import tape from "../assets/home/tape.svg";
import { Link } from "react-router-dom";

const CanvasSection5 = () => {
  return (
    <div className="relative sm-[10vh] w-[30.74vh] left-[247vh] ">
      <div className="absolute w-[51.06vh] left-[-13.32vh] top-0 transition-transform hover:scale-105 duration-300 cursor-pointer">
        <a
          href="/things-we-do/"
          aria-label="We heard that OATLY might taste like Satans diarrhea in tea. So we went to investigate this further by asking the tea experts themselves- the British public"
          className="block cursor-hand"
        >
          <div className="relative w-full overflow-hidden">
            <img
              src={teareportlogo}
              alt="The Tea Report"
              className="w-full h-auto object-cover"
            />
          </div>
        </a>
      </div>

      <div className="absolute w-[22.644vh] left-0 top-[42%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={barbershopQuartet}
            alt="Barbershop Quartet Image"
            role="presentation"
            decoding="async"
            className="w-full h-auto object-cover"
            sizes="22.644vh"
          />
        </div>
      </div>

      <div className="absolute w-[104.34vh] left-[35.52vh] top-[3%] transition-transform hover:scale-105 duration-300 cursor-pointer">
        <Link
          to={"/farm"}
          href="/things-we-do/"
          aria-label="/things-we-do/stories/the-farm"
          className="block cursor-hand"
        >
          <div className="relative w-full overflow-hidden">
            <img
              src={farm}
              alt="Introducing the F.A.R.M"
              decoding="async"
              className="w-full h-auto object-cover"
              sizes="104.34vh"
            />
          </div>
        </Link>
      </div>

      <div className="absolute w-[24.42vh] left-[124.32vh] top-[8%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={wowCow}
            alt=""
            role="presentation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="absolute w-[7.548vh] left-[23.976vh] top-[32%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={oat3}
            alt=""
            role="presentation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="absolute w-[7.548vh] left-[62.16vh] bottom-[27%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={oat1}
            alt=""
            role="presentation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="absolute w-[68.82vh] left-[75.48vh] bottom-[1%] transition-transform hover:scale-105 duration-300 cursor-pointer">
        <Link 
        to={"/farmer-shaking"}
          href="/things-we-do"
          aria-label="How can we feed more people using the same earth? Farmer Adam Arnesson and his colleagues decided to answer the question."
          className="block cursor-hand"
        >
          <div className="relative w-full overflow-hidden">
            <img
              src={farmer}
              alt="Farmer seeking farmers"
              className="w-full h-auto object-cover"
            />
          </div>
        </Link>
      </div>

      <div className="absolute w-[5.772vh] left-[-8.88vh] top-[6%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={oat5}
            alt=""
            role="presentation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="absolute w-[8.436vh] left-0 bottom-[6%]">
        <div className="relative w-full overflow-hidden">
          <img
            src={oat2}
            alt=""
            role="presentation"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="absolute w-[42.18vh] left-[17.76vh] bottom-[4%] transition-transform hover:scale-105 duration-300 cursor-pointer">
        <a
          href="/things-we-do/brainwashing/odds/jingle-jukebox"
          aria-label="We made you a fully stocked Jingle Jukebox with a whole collection of jingles cued up and ready for whenever you feel like."
          className="block cursor-hand"
        >
          <div className="relative w-full overflow-hidden">
            <img
              src={tape}
              alt="Illustration of a cassette tape saying Oatly Jingle Sessions"
              className="w-full h-auto object-cover"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default CanvasSection5;
