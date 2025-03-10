// src/components/CanvasSection9.jsx
import React from "react";
import ditch from "../assets/home/ditch-milk.png"

const CanvasSection7 = () => {
  return (
    <div className="relative sm:[1-vh] w-[20.396vh] left-[475vh]">
      {/* Chocolate Deluxe Image */}
      <div className="absolute w-[48.396vh] left-0 top-[1%]">
        <div className="relative w-full overflow-hidden">
          <img
            src="https://a.storyblok.com/f/107921/527x422/b136397bbb/large-oatly_uk_19_chocolate-deluxe-lifestyle_image_117-1.jpg/m/3840x0/filters:quality(75):format(webp)"
            alt=""
            role="presentation"
            decoding="async"
            className="w-full h-auto object-cover"
            sizes="48.396vh"
            srcSet="
              https://a.storyblok.com/f/107921/527x422/b136397bbb/large-oatly_uk_19_chocolate-deluxe-lifestyle_image_117-1.jpg/m/16x0/filters:quality(75):format(webp) 16w,
              https://a.storyblok.com/f/107921/527x422/b136397bbb/large-oatly_uk_19_chocolate-deluxe-lifestyle_image_117-1.jpg/m/32x0/filters:quality(75):format(webp) 32w,
              https://a.storyblok.com/f/107921/527x422/b136397bbb/large-oatly_uk_19_chocolate-deluxe-lifestyle_image_117-1.jpg/m/48x0/filters:quality(75):format(webp) 48w,
              https://a.storyblok.com/f/107921/527x422/b136397bbb/large-oatly_uk_19_chocolate-deluxe-lifestyle_image_117-1.jpg/m/64x0/filters:quality(75):format(webp) 64w,
              https://a.storyblok.com/f/107921/527x422/b136397bbb/large-oatly_uk_19_chocolate-deluxe-lifestyle_image_117-1.jpg/m/96x0/filters:quality(75):format(webp) 96w,
              https://a.storyblok.com/f/107921/527x422/b136397bbb/large-oatly_uk_19_chocolate-deluxe-lifestyle_image_117-1.jpg/m/128x0/filters:quality(75):format(webp) 128w,
              https://a.storyblok.com/f/107921/527x422/b136397bbb/large-oatly_uk_19_chocolate-deluxe-lifestyle_image_117-1.jpg/m/256x0/filters:quality(75):format(webp) 256w,
              https://a.storyblok.com/f/107921/527x422/b136397bbb/large-oatly_uk_19_chocolate-deluxe-lifestyle_image_117-1.jpg/m/384x0/filters:quality(75):format(webp) 384w,
              https://a.storyblok.com/f/107921/527x422/b136397bbb/large-oatly_uk_19_chocolate-deluxe-lifestyle_image_117-1.jpg/m/640x0/filters:quality(75):format(webp) 640w,
              https://a.storyblok.com/f/107921/527x422/b136397bbb/large-oatly_uk_19_chocolate-deluxe-lifestyle_image_117-1.jpg/m/750x0/filters:quality(75):format(webp) 750w,
              https://a.storyblok.com/f/107921/527x422/b136397bbb/large-oatly_uk_19_chocolate-deluxe-lifestyle_image_117-1.jpg/m/828x0/filters:quality(75):format(webp) 828w,
              https://a.storyblok.com/f/107921/527x422/b136397bbb/large-oatly_uk_19_chocolate-deluxe-lifestyle_image_117-1.jpg/m/1080x0/filters:quality(75):format(webp) 1080w,
              https://a.storyblok.com/f/107921/527x422/b136397bbb/large-oatly_uk_19_chocolate-deluxe-lifestyle_image_117-1.jpg/m/1200x0/filters:quality(75):format(webp) 1200w,
              https://a.storyblok.com/f/107921/527x422/b136397bbb/large-oatly_uk_19_chocolate-deluxe-lifestyle_image_117-1.jpg/m/1920x0/filters:quality(75):format(webp) 1920w,
              https://a.storyblok.com/f/107921/527x422/b136397bbb/large-oatly_uk_19_chocolate-deluxe-lifestyle_image_117-1.jpg/m/2048x0/filters:quality(75):format(webp) 2048w,
              https://a.storyblok.com/f/107921/527x422/b136397bbb/large-oatly_uk_19_chocolate-deluxe-lifestyle_image_117-1.jpg/m/3840x0/filters:quality(75):format(webp) 3840w"
          />
        </div>
      </div>

      {/* Newspaper Image */}
      <div className="absolute w-[29.748vh] left-[15.096vh] top-[44%]">
        <div className="relative w-full overflow-hidden">
          <img
            src="https://a.storyblok.com/f/107921/x/0c4bbfd7cc/newspaper.svg"
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
          className="block"
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
            src="https://a.storyblok.com/f/107921/x/14f42b263a/amazing.svg"
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

      <div className="absolute w-[8.436vh] left-[-6.216vh] bottom-[4%]">
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
