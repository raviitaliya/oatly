import React from 'react'
import progress from "../../assets/Footer/farm-progress-21.svg";
import giff from "../../assets/Footer/farm21.gif"

const Farm22 = () => {
  return (
    <div>
       <div>
             <img src={progress} alt="" className="h-2 w-[1900px]" />
             <div className="w-screen h-screen flex items-center justify-center p-10 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-7xl">
              {/* Text Section (Larger Width) */}
              <div className="md:col-span-3 flex flex-col justify-center text-left">
                <h1 className="text-4xl md:text-7xl font-bold font-font1 text-black leading-tight">
                  THAT’S HARD BECAUSE CORPORATIONS LOVE TO TALK  ABOUT SUSTAINABILITY.
                </h1>
                <p className="mt-10 text-lg md:text-3xl font-font1  font-bold text-black">
                  YOUR BANK IS SUSTAINABLE. <br />
                  YOUR INSURANCE COMPANY IS SUSTAINABLE. <br />
                  YOUR COUSIN IS SUSTAINABLE.
                </p>
                <p className="mt-10 text-lg md:text-xl font-font2  text-black">
                (We get it, Bjorn, you compost and live in a yurt. We’re very proud of you.)
                </p>
              </div>
              {/* Image Section (Smaller Width) */}
              <div className="flex justify-center md:col-span-2">
                <img
                  src={giff}// Replace with the correct path
                  alt="Handshake"
                  className="max-w-full h-auto md:w-[500px] md:h-[650px] object-cover "
                />
              </div>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Farm22
