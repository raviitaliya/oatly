import React from 'react'
import progress from "../../assets/Footer/farm-progress-30.svg";
import background from "../../assets/Footer/farm31.jpg";


const Farm31 = () => {
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
            
            <div className="relative text-white max-w-5xl text-left md:mt-[220px] md:ml-[200px]">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-8xl font-font1 font-bold uppercase leading-tight">
                    It’s no mystery what the F.A.R.M. can look like in practice.
                    </p>
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl  font-font1 font-bold uppercase my-8">
                    To prove it, we have a convenient quote from Ben Dwire, a third-generation farmer in Arco, Minnesota.
                    </p>
                   
                  </div>
                </div>
    </div>
  )
}

export default Farm31
