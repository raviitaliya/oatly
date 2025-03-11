import React from "react";
import progress from "../../assets/Footer/farm-progress-12.svg";
import background from "../../assets/Footer/farm10.jpg";
import farm101 from "../../assets/Footer/farm101.jpg";

const Farm13 = () => {
  return (
    <div>
      <img src={progress} alt="" className="h-2 w-[1900px]" />
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Background Image */}
        <img
          src={background}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* F.A.R.M. Image */}
        <div className="absolute top-16 flex justify-center">
          <img
            src={farm101} // Replace with actual path
            alt="F.A.R.M."
            className="w-[650px] h-[350px]"
          />
        </div>
        <p className="absolute font-font2 text-2xl px-2 bg-black text-white ">
          {" "}
          *Or the Future Agriculture Renovation Movement.**
        </p>
        <p className="absolute bottom-[360px] text-center w-[1200px] font-font2 text-2xl px-2 bg-black text-white ">
          **It’s a mouthful, but in a nutshell it’s about working with farmers
          toward goals in regenerative agriculture. (More on that later.)***{" "}
        </p>
        <p className="absolute bottom-[280px] text-center w-[1150px] font-font2 text-2xl px-2 bg-black text-white ">
          
 ***And, yes, “regenerative” and “renovation” are similar words, which makes the acronym hard to remember. We understand.**** 
        </p>
      </div>
    </div>
  );
};

export default Farm13;
