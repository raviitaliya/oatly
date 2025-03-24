import React from 'react'
import progress from "../../assets/Footer/farm-progress-27.svg";
import background from "../../assets/Footer/farm28.jpg";

const Farm28 = () => {
  return (
    <div>
      <img src={progress} alt="" className="h-2 w-[1900px]" />
                   <div className="relative w-full h-screen flex items-center justify-center">
                        {/* Background Image */}
                        <img
                          src={background}// Replace with actual path
                          alt="Background"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                  
                        {/* Overlay Text */}
                        <div className="relative z-10 text-center px-4">
                          <p   className="text-white font-font1 text-3xl md:text-5xl lg:text-8xl font-bold max-w-[1650px] tracking-tight">
                          The F.A.R.M. tests different models of regenerative agriculture with pilots designed to scale globally.
                          </p>
                        </div>
                      </div>
    </div>
  )
}

export default Farm28
