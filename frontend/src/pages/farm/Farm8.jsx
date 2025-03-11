import React from 'react'
import progress from "../../assets/Footer/farm-progress-7.svg";

const Farm8 = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
        <div className='absolute top-0 left-0 w-full h-full'>
    {/* Background Video */}
    <iframe
      src="https://player.vimeo.com/video/805937984?background=1&autoplay=1&loop=1&muted=1"
      className=" absolute top-0 left-0 w-full h-full"
      
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    ></iframe>
    </div>

    {/* Overlay Text */}
    <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
      <h1 className="text-black font-font1 text-3xl md:text-5xl lg:text-8xl font-bold max-w-[1500px]">
        THE GLOBAL FOOD SYSTEM IS RESPONSIBLE FOR <br />
        1/3 OF GLOBAL GREENHOUSE GAS EMISSIONS.
      </h1>
    </div>
  </div>
  )
}

export default Farm8
