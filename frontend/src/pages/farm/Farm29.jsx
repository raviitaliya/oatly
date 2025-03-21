import React from 'react'
import progress from "../../assets/Footer/farm-progress-28.svg";
import map from "../../assets/Footer/map.svg";

const Farm29 = () => {
  return (
    <div>
       <img src={progress} alt="" className="h-2 w-[1900px]" />
       <div className='w-screen h-screen'>
            <p className='flex justify-center py-6 text-4xl font-font1'>To illustrate that very fact, here’s a current map of our pilots:</p>
            <div className='flex justify-center pt-8'>
            <img src={map} alt=""  className=''/>
                
            </div>
       </div>
    </div>
  )
}

export default Farm29
