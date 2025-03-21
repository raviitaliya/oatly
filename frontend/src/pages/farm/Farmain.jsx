import React, {useState} from 'react'
import { components } from "./Components";

const Farmain = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextComponent = () => {
        if (currentIndex < components.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      };
    
      const prevComponent = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      };
    
      const CurrentComponent = components[currentIndex];

  return (
    <div className="relative ">
      {/* Display Current Component */}
      <div className="">
        <CurrentComponent />
      </div>

      {/* Previous Button */}
      <button
        onClick={prevComponent}
        disabled={currentIndex === 0}
        className="absolute left-4 bottom-4 text-xl md:left-8 md:bottom-8 bg-black text-white px-4  md:px-[50px] py-4 
        hover:bg-gray-800 transition disabled:opacity-50"
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        onClick={nextComponent}
        disabled={currentIndex === components.length - 1}
        className="absolute right-4 bottom-4 md:right-8 md:bottom-8 bg-black text-white px-4 md:px-[50px] py-4  
        hover:bg-gray-800 transition disabled:opacity-50"
      >
        &#8594;
      </button>
    </div>
  )
}

export default Farmain
