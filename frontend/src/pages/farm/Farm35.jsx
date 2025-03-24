import React from 'react'
import progress from "../../assets/Footer/farm-progress-35.svg";

const Farm35 = () => {
  return (
    <div>
      <img src={progress} alt="" className="h-2 w-[2000px] " />
      <div className='w-screen h-screen font-font1 pt-[100px] pl-[150px]'>
        <div className='max-w-[1500px] tracking-tighter'>
        <p className='text-4xl md:text-8xl ' >Bold? Absolutely. But it’s a big world—and climate change is a big problem.

        </p>
        </div>
        <div className='max-w-[1300px] my-10'>
        <p className='text-4xl md:text-5xl'>Plus, we like to make it hard on ourselves. After all, anybody can milk a cow... milking an oat is another matter entirely.
        </p>

        </div>
        <button className='bg-black text-white text-2xl py-2 px-5 mt-[50px]'>TO OATLY.COM  &#8594;</button>
      </div>
    </div>
  )
}

export default Farm35
