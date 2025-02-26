import React from "react";
import origional from "../assets/Footer/original.png";
import original1 from "../assets/Footer/origina.png";
import original2 from "../assets/Footer/original1.png";
import original3 from "../assets/Footer/original2.png";
import original4 from "../assets/Footer/original3.png";
import original5 from "../assets/Footer/original4.png";
import original6 from "../assets/Footer/original5.png";
import original7 from "../assets/Footer/original6.png";
import Footer from "@/components/Footer";

const Careers = () => {
  return (
    <div>
      <div>
        <div className="relative  flex justify-center items-start pt-10">
          <img src={origional} alt="Top Centered" className="w-32 h-32 " />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-40   text-black px-6 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase font-font1 ">
          ! Entering this site may lead to <br /> a possible career with Oatly !
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base max-w-3xl mt-6 font-font2 font-bold tracking-widest">
          <span className="font-bold">*Attention:</span> By accessing and using
          this site, you are agreeing to our terms of use and the potential of a
          future at Oatly that will include working with a diverse range of
          people from different fields, like the people who made this site more
          complicated than it should’ve been. Entering this site does not
          guarantee that you will receive an offer of employment.
        </p>

        {/* Button */}
        <button className="mt-6 px-6 py-3 bg-black text-white text-lg font-bold font-font1 cursor-hand shadow hover:bg-gray-800 transition">
          Exit to job listings &rarr;
        </button>
      </div>

      <div className="mt-32">
        <div className="relative w-full h-screen bg-white flex flex-col justify-between">
          {/* Top Image */}
          <img
            src={original1}
            alt="Top Design"
            className="w-full object-cover"
          />

          {/* Center Content */}
          <div className="flex justify-center items-center ">
            <div className="bg-black p-6 sm:p-10 md:p-12 lg:p-16 text-center  w-screen">
              <img
                src={original2}
                alt="Warning Icon"
                className="mx-auto w-48 sm:w-60 md:w-72 lg:w-80 xl:w-96"
              />
              <p className="text-white text-lg sm:text-xl font-bold mt-4 font-font2">
                ADVISORY:
              </p>
              <p className="text-white text-sm sm:text-base max-w-lg mx-auto mt-6 font-font2 font-bold ">
                This site may be too intense for some, and not intense enough
                for others.
                <br />
                <span className="font-bold font-font2">
                  Either way, we welcome you.
                </span>
              </p>
            </div>
          </div>

          {/* Bottom Image */}
          <img
            src={original3}
            alt="Bottom Design"
            className="w-full object-cover"
          />
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center justify-center  bg-white p-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-font1 tracking-wide text-black ">
            WARNING: <span className="text-black">WE'RE A</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold font-font1 text-black mt-2">
            COMPANY BUILT ON
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-6xl font-bold font-font1 text-black">
            THE IDEA OF CHANGE.
          </h3>

          <p className="font-font2 sm:text-lg md:text-xl text-black mt-6 max-w-2xl">
            From the day we started in 1994, we've been committed to finding new
            ways to make it easier for people to eat better and live healthier
            lives without recklessly taxing the planet’s resources in the
            process.
          </p>
          <p className="font-font2 sm:text-lg md:text-xl text-black mt-4 max-w-2xl">
            So, are you absolutely, positively sure you want to apply to work
            for a company that strives to produce the most sustainable,
            responsible products on the market, and work to find ways to make
            these products even better?
          </p>

          {/* Buttons */}
          <div className="mt-20 space-y-4">
            <button className="bg-black text-white px-10 py-3 text-xl font-bold font-font2 cursor-hand  flex justify-between items-center">
              <span>Yes, show me the jobs on offer.</span>
              <span>&#x2794;</span>
            </button>
            <div className="flex justify-center items-center">
              <button className="bg-black text-white px-10 py-3 text-xl font-bold  font-font2 cursor-hand  flex justify-between items-center">
                <span>No, get me out of here.</span>
                <span>&#x2794;</span>
              </button>
            </div>
          </div>

          <div>
            <div className="mt-32">
              <div className="  bg-white flex flex-col justify-between">
                {/* Top Image */}
                <img src={original4} alt="Top Design" className="" />

                {/* Center Content */}
                <div className="flex justify-center items-center ">
                  <div className=" bg-[#9cc7d1] p-6 sm:p-10 md:p-12 lg:p-16 text-center  w-screen">
                    <img
                      src={original6}
                      alt="Warning Icon"
                      className="mx-auto w-48 sm:w-60 md:w-64 lg:w-80 xl:w-96"
                    />
                    <p className="text-black text-lg sm:text-xl font-bold mt-4 font-font2">
                      ADVISORY:
                    </p>
                    <p className="text-black text-sm sm:text-base max-w-lg mx-auto mt-6 font-font2 font-bold ">
                      This site may be too intense for some, and not intense
                      enough for others.
                      <br />
                      <span className="font-bold font-font2">
                        Either way, we welcome you.
                      </span>
                    </p>
                  </div>
                </div>

                {/* Bottom Image */}
                <img
                  src={original5}
                  alt="Bottom Design"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="flex flex-col items-center justify-center  px-6 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-font1 uppercase leading-tight">
        Disclaimer: Oatly is <br /> Not Responsible For <br /> Direct, Indirect,
        <br /> Incidental or <br /> Consequential <br /> Damages Resulting <br />
        From The Following <br /> Values:
      </h1>
      <div className="mt-6 text-left max-w-2xl text-lg mb-32">
        <ol className="list-decimal font-font2 list-inside space-y-4">
          <li>
            We believe we should grow stuff to
            eat instead of growing stuff to feed animals that we then eat.
            Which also means always striving to deliver products that have
            maximum nutritional value and minimal environmental impact.
          </li>
          <li>
             Everybody regardless of
            spiritual beliefs, birth country, race, gender, sexual
            orientation, family status, or color of their nail polish, is of
            equal worth.
          </li>
          <li>
            The reckless pursuit of profits
            without any consideration for the well-being of the planet and the
            humans that live here should be considered a crime. Companies have
            as much responsibility as politicians do for building a society
            that every one of us living in this world can admire.
          </li>
        </ol>
      </div>
    </div>
    
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
