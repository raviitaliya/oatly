import React from 'react'
import progress from "../../assets/Footer/farm-progress-24.svg";
import background from "../../assets/Footer/farm25.jpg";

const Farm25 = () => {
  return (
    <div>
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
                    “We're moving from a zero-sum sustainability concept to the concept of regenerative agriculture, which builds it back better. Improve soil health, improve agriculture, improve farmer livelihoods.” 
                    </p>
                  </div>
                </div>
          </div>
    </div>
  )
}

export default Farm25
