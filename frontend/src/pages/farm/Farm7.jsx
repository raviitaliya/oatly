import React from 'react'
import chart from "../../assets/Footer/farm-emission-chart.svg";
import progress from "../../assets/Footer/farm-progress-6.svg";

const Farm7 = () => {
  return (
    <div>
        <img src={progress} alt="" className='h-2' />
        <div className="flex flex-col min-h-screen">
      {/* Title at the Top */}
      <header className="w-full text-center p-4 md:p-6">
        <h1 className="text-lg md:text-6xl font-font1 tracking-tighter font-bold md:pt-7 text-black">
          SINCE FRACTIONS CAN BE CONFUSING, HERE’S A PIE CHART.
        </h1>
      </header>

      {/* Image in the Center */}
      <div className="flex flex-1 items-center justify-center px-4">
        <img
          src={chart} // Replace with actual image path
          alt="Pie Chart"
          className="max-w-full md:max-w-7xl h-auto"
        />
      </div>
    </div>
    </div>
  )
}

export default Farm7
