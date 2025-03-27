import React from "react";
import wisLogo from "../assets/home/wis-logo.svg";
import { Link } from "react-router-dom";

const CanvasSection9 = () => {
  return (
    <div className="relative sm:w-[10vh] w-[40.404vh] left-[650vh]">
      <div className="absolute w-[33.3vh] left-[-45.08vh] top-[10%] transition-transform hover:scale-105 duration-300 ">
        <a
          href="/things-we-do/brainwashing/will-it-swap/wisconsin-supper-club-swaps-dairy-with-oatly"
          aria-label="/things-we-do/brainwashing/will-it-swap/wisconsin-supper-club-swaps-dairy-with-oatly"
          className="block cursor-hand"
        >
          <div className="relative w-full overflow-hidden">
            <img
              src={wisLogo}
              alt="Will it swap"
              decoding="async"
              className="w-full h-auto object-cover"
              sizes="33.3vh"
            />
          </div>
        </a>
      </div>

      <div className="absolute w-[51.06vh] left-[-25.656vh] top-[6%] transition-transform hover:scale-105 duration-300 cursor-hand">
        <a
          href="/things-we-do"
          className="block cursor-hand"
        >
          <div
            className="relative w-full cursor-hand"
            style={{ paddingTop: "177.34%" }}
          >
            <span className="sr-only">
              A Trailer for the Will it swap series
            </span>
          
            <iframe
              src="https://player.vimeo.com/video/897003838?keyboard=0&muted=1&loop=1&dnt=0"
              width="240"
              height="426"
              allow="autoplay; fullscreen; muted;"
              title="Will-it-swap-canvas"
              className="absolute inset-0 w-full h-full cursor-hand"
              aria-hidden="true"
            />
           
          </div>
        </a>
      </div>
    </div>
  );
};

export default CanvasSection9;
