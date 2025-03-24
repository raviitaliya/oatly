import React from 'react'
import progress from "../../assets/Footer/farm-progress-33.svg";
import giff from "../../assets/Footer/farm-farming.gif"

const Farm33 = () => {
  return (
    <div>
       <img src={progress} alt="" className="h-2 w-[1900px]" />
                   <div className="w-screen h-screen flex items-center justify-center p-10 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-7xl">
                    {/* Text Section (Larger Width) */}
                    <div className="md:col-span-3 flex flex-col justify-center text-left">
                      <h1 className="text-4xl md:text-7xl font-bold font-font1 text-black  leading-tight ">
                      At Oatly, we hold ourselves accountable to the farmers we work with, the goals we set together, and the planet itself.
                      </h1>
                      
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
  )
}

export default Farm33
