import React from "react";
import { Link } from "react-router-dom";

const CanvasSection = () => {
  return (
    <div
      className="relative bg-black"
      style={{
        backgroundImage: `url(https://a.storyblok.com/f/107921/1738x1200/df94971a12/black-bg2.gif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative mx-auto" style={{ width: "83.1168vh" }}>
        <Link
          to={"/sustainability"}
          href="/oatly-who"
          aria-label="The Oatly Sustainability report update 2022"
          className="absolute block transition-transform hover:scale-105 duration-300"
          style={{ width: "59.94vh", left: "11.544vh", top: "5%" }}
        >
          <img
            src="https://a.storyblok.com/f/107921/102x150/81f42ef337/logo-heading.svg"
            alt="Oatly Sustainability Update 2023 - OMG! It's actually better this time."
            className="w-full h-auto md:mt-7 lg:mt-14 xl:mt-8"
            sizes="59.94vh"
          />
        </Link>

        {/* Hidden Pixel Image */}
        <div
          className="absolute"
          style={{ width: "-1.2432vh", left: "84.36vh", top: "0%" }}
        >
          <img
            src="https://a.storyblok.com/f/107921/1x1/ba8062f3dc/hidden-pixel.jpg/m/3840x0/filters:quality(75):format(webp)"
            alt=""
            role="presentation"
            className="w-full h-auto"
            sizes="-1.2432vh"
          />
        </div>

        {/* Right Edge GIF */}
        <div
          className="absolute"
          style={{ width: "3.2856vh", right: "-1.776vh", top: "-3%" }}
        >
          <img
            src="https://a.storyblok.com/f/107921/51x1601/654222988d/edge.gif/m/48x0/filters:quality(75):format(webp)"
            alt=""
            role="presentation"
            className="w-full h-auto"
            sizes="3.2856vh"
          />
        </div>

        {/* Left Edge GIF */}
        <div
          className="absolute"
          style={{ width: "3.2856vh", left: "-1.776vh", top: "-3%" }}
        >
          <img
            src="https://a.storyblok.com/f/107921/51x1601/bd217ddba2/edge-white-2.gif/m/48x0/filters:quality(75):format(webp)"
            alt="this is images"
            role="presentation"
            className="w-full h-auto"
            sizes="3.2856vh"
          />
        </div>
      </div>
    </div>
  );
};

export default CanvasSection;
