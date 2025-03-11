import React from 'react'
import background from "../../assets/Footer/farm6.jpg";
import progress from "../../assets/Footer/farm-progress-5.svg";

const Farm6 = () => {
  return (
    <div>
         <img src={progress} alt="" className='h-2' />
       <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src={background}// Replace with actual path
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white font-font1 text-3xl md:text-5xl lg:text-8xl font-bold max-w-[1500px]">
          THE GLOBAL FOOD SYSTEM IS RESPONSIBLE FOR <br />
          1/3 OF GLOBAL GREENHOUSE GAS EMISSIONS.
        </h1>
      </div>
    </div>
    </div>
  )
}

export default Farm6
