import React from 'react'
import progress from "../../assets/Footer/farm-progress-25.svg";
import background from "../../assets/Footer/farm26.jpg";

const Farm26 = () => {
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
                          <p   className="text-white font-font1 text-3xl md:text-5xl lg:text-7xl font-bold max-w-[1500px] tracking-tight">
                          Oatly is committed to supporting farm viability and resilience while reducing net greenhouse gas emissions and enhancing how ecosystems function for decades (and centuries?!) to come.


                          </p>
                        </div>
                      </div>
                </div>
   
  )
}

export default Farm26
