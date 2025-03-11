import React from 'react'
import progress from "../../assets/Footer/farm-progress-16.svg";
import thumb from "../../assets/Footer/farm-thumbs-2.svg";


const Farm17 = () => {
  return (
    <div>
        <div>
              <img src={progress} alt="" className="h-2 w-[1900px]" />
              <div className='w-screen h-screen'>
             <div className=' flex justify-center pt-10 md:pt-[130px] '>
              <p className='font-font1 text-7xl w-[1600px] tracking-tighter'>Oatly is dedicated to the development of a food system that gives back to nature and communities—and the F.A.R.M. will play a key role in...</p>
            </div>
            <div className='flex pl-10 md:pl-[150px] mt-14'>
              <img src={thumb} alt="" />
            </div>
          </div>
          </div>
    </div>
  )
}

export default Farm17
