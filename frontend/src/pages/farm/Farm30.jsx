import React from 'react'
import progress from "../../assets/Footer/farm-progress-29.svg";
import background from "../../assets/Footer/farm30.jpg";


const Farm30 = () => {
  return (
    <div>
      <img src={progress} alt="" className="h-2 w-[1900px]" />
            <div className="relative w-full h-screen flex ">
            {/* Background Image */}
            <img
              src={background}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
      
      <div className="relative text-white max-w-5xl text-left md:mt-[170px] md:ml-[200px]">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-8xl font-font1 font-bold uppercase leading-tight">
              We visit farms. We ask farmers what works. We help grow their ideas.
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl  font-font1 font-bold uppercase my-8">
              (And we give them money to reward their efforts!)
              </p>
             
            </div>
          </div>
    </div>
  )
}

export default Farm30
