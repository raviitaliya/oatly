import React from 'react'
import progress from "../../assets/Footer/farm-progress-34.svg";
import background from "../../assets/Footer/farm34.jpg";

const Farm34 = () => {
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
                               <p   className="text-white font-font1 text-3xl md:text-5xl lg:text-7xl font-bold max-w-[1650px] tracking-tight">
                               Our work won’t be perfect right from the start.
                               </p>
                               <p className="text-white font-font1 text-3xl md:text-5xl lg:text-7xl font-bold max-w-[1650px] tracking-tight pt-5 md:pt-16" >
                               The F.A.R.M. is a massive project with dozens of partners and hundreds of processes consisting of thousands of small steps.
                               </p>
                             </div>
                           </div>
    </div>
  )
}

export default Farm34
