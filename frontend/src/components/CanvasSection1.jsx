import React from "react";
import german from "../assets/home/german.png";
import section2 from "../assets/home/section2.jpg";
import truck from "../assets/home/truck.png";

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
            src="https://a.storyblok.com/f/107921/x/97e70255b8/feet.svg"
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
          className="block w-full h-full"
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
      <div className="relative sm:w-[10vh] lg:w-[33.3vh] left-[44.4vh] top-[-18%] hover:scale-105 transition-transform">
        <a
          href="/things-we-do/brainwashing/milk-myths"
          aria-label="Is everything you have learnt about cow's milk true? We decided to find out."
          className="block w-full h-full"
        >
          <div className="w-full h-full">
            <img
              src="https://a.storyblok.com/f/107921/x/bd6be96854/milkmyths.svg"
              alt="Milk Myths"
              className="w-full h-auto"
            />
          </div>
        </a>
      </div>

      {/* Resurrecting Oats Link */}
      <div className="relative w-[42.18vh] left-[57.72vh] bottom-[10%] hover:scale-105 transition-transform">
        <a
          href="/things-we-do"
          aria-label="When we heard that some US farmers were putting oats back into their rotations to achieve a more sustainable agricultural system, we were pretty excited."
          className="block w-full h-full"
        >
          <div className="relative pb-[61.9565%]">
          <img src={truck} alt="truck" />
          </div>
        </a>
      </div>

      {/* Oat Images */}
      <div className="relative w-[7.548vh] left-[4.44vh] top-[55%]">
        <img
          src="https://a.storyblok.com/f/107921/x/21ede820ed/oat1.svg"
          alt="Oat Images"
          className="w-full h-auto"
          role="presentation"
        />
      </div>

      <div className="relative w-[7.548vh] left-[81.696vh] bottom-[80%]">
        <img
          src="https://a.storyblok.com/f/107921/x/21ede820ed/oat1.svg"
          alt="Oat Images"
          className="w-full h-auto"
          role="presentation"
        />
      </div>

      <div className="relative w-[5.772vh] left-[97.68vh] bottom-[100%]">
        <img
          src="https://a.storyblok.com/f/107921/x/feedac692b/oat5.svg"
          alt="Oat Images"
          className="w-full h-auto"
        />
      </div>

      <div className="relative w-[8.436vh] left-[44.4vh] bottom-[80%]">
        <img
          src="https://a.storyblok.com/f/107921/x/f60ad047dd/oat3.svg"
          alt="Oat Images"
          className="w-full h-auto"
        />
      </div>

      <div className="relative w-[8.436vh] left-[44.4vh] top-[-145%]">
        <img
          src="https://a.storyblok.com/f/107921/x/333a0ef09f/oat2.svg"
          alt="Oat Images"
          className="w-full h-auto"
          role="presentation"
        />
      </div>

      {/* Barbershop Quartet Image */}
      <div className="relative sm:w-[10vh] lg:w-[33.3vh] left-[6vh] bottom-[120%]">
        <img
          src={section2}
          alt="Barbershop Quartet Image"
          className="w-full h-auto "
          role="presentation"
          sizes="330.3vh"
          srcSet="
            https://a.storyblok.com/f/107921/985x1564/90247dd5c8/barbershop-quartet-9.jpg/m/16x0/filters:quality(75):format(webp) 16w,
            https://a.storyblok.com/f/107921/985x1564/90247dd5c8/barbershop-quartet-9.jpg/m/32x0/filters:quality(75):format(webp) 32w,
            https://a.storyblok.com/f/107921/985x1564/90247dd5c8/barbershop-quartet-9.jpg/m/48x0/filters:quality(75):format(webp) 48w,
            https://a.storyblok.com/f/107921/985x1564/90247dd5c8/barbershop-quartet-9.jpg/m/64x0/filters:quality(75):format(webp) 64w,
            https://a.storyblok.com/f/107921/985x1564/90247dd5c8/barbershop-quartet-9.jpg/m/96x0/filters:quality(75):format(webp) 96w,
            https://a.storyblok.com/f/107921/985x1564/90247dd5c8/barbershop-quartet-9.jpg/m/128x0/filters:quality(75):format(webp) 128w,
            https://a.storyblok.com/f/107921/985x1564/90247dd5c8/barbershop-quartet-9.jpg/m/256x0/filters:quality(75):format(webp) 256w,
            https://a.storyblok.com/f/107921/985x1564/90247dd5c8/barbershop-quartet-9.jpg/m/384x0/filters:quality(75):format(webp) 384w,
            https://a.storyblok.com/f/107921/985x1564/90247dd5c8/barbershop-quartet-9.jpg/m/640x0/filters:quality(75):format(webp) 640w,
            https://a.storyblok.com/f/107921/985x1564/90247dd5c8/barbershop-quartet-9.jpg/m/750x0/filters:quality(75):format(webp) 750w,
            https://a.storyblok.com/f/107921/985x1564/90247dd5c8/barbershop-quartet-9.jpg/m/828x0/filters:quality(75):format(webp) 828w,
            https://a.storyblok.com/f/107921/985x1564/90247dd5c8/barbershop-quartet-9.jpg/m/1080x0/filters:quality(75):format(webp) 1080w,
            https://a.storyblok.com/f/107921/985x1564/90247dd5c8/barbershop-quartet-9.jpg/m/1200x0/filters:quality(75):format(webp) 1200w,
            https://a.storyblok.com/f/107921/985x1564/90247dd5c8/barbershop-quartet-9.jpg/m/1920x0/filters:quality(75):format(webp) 1920w,
            https://a.storyblok.com/f/107921/985x1564/90247dd5c8/barbershop-quartet-9.jpg/m/2048x0/filters:quality(75):format(webp) 2048w,
            https://a.storyblok.com/f/107921/985x1564/90247dd5c8/barbershop-quartet-9.jpg/m/256x0/filters:quality(75):format(webp) 3840w"
        />
      </div>
    </div>
  );
};

export default CanvasSection1;
