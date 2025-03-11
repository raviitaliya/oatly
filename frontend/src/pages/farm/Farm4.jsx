import React from 'react'
import progress from "../../assets/Footer/farm-progress-3.svg";

const Farm4 = () => {
  return (
    <div>
       <div>
        <img src={progress} alt="" className='h-2' />
      <div>
       <div className=" h-screen flex flex-col justify-center items-center text-center px-4">
    {/* Text Container */}
    <div>
      <h1 className="text-6xl md:text-7xl lg:text-[150px] font-extrabold font-font1 md:w-[1500x] ">
        WELCOME, LOYAL OAT DRINKERS{" "}
        <span className="text-[#98c5d3]">(AND EVERYONE ELSE).</span>
      </h1>
      <p className="text-lg md:text-5xl font-semibold font-font1 mt-4 md:mt-7 tracking-tighter">OATLY HAS NEWS.</p>
      <p className="text-lg md:text-5xl font-semibold font-font1 mt-1 tracking-tighter">Great news, actually.</p>
      <p className="text-lg md:text-5xl font-semibold font-font1 mt-1 tracking-tighter">News about our work with the global farming community.</p>
     
    </div>
  </div>
    </div>
    </div>
    </div>
  )
}

export default Farm4
