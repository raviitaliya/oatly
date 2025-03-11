import React from 'react'
import background from "../../assets/Footer/farm9.jpg";
import progress from "../../assets/Footer/farm-progress-8.svg";

const Farm9 = () => {
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
              Now it’s time to talk about how Oatly works with farmers around the world with the intent to dramatically reduce greenhouse gas emissions.
              </h1>
            </div>
          </div>
    </div>
  )
}

export default Farm9
