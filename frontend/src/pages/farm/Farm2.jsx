import React from 'react';
import progress from "../../assets/Footer/farm-progress-1.svg";

const Farm2 = () => {
  return (
    <div>
        <img src={progress} alt="" className='h-2' />
       <div className=" h-screen flex flex-col justify-center items-center text-center px-4">
      
    {/* Text Container */}
    <div>
      <h1 className="text-6xl md:text-7xl lg:text-[150px] font-extrabold font-font1 md:w-[1500x] ">
        WELCOME, LOYAL OAT DRINKERS{" "}
        <span className="text-[#98c5d3]">(AND EVERYONE ELSE).</span>
      </h1>
      <p className="text-lg md:text-5xl font-semibold font-font1 mt-4 md:mt-7 tracking-tighter">OATLY HAS NEWS.</p>
    
    </div>
  </div>
    </div>
  )
}

export default Farm2
