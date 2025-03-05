import React from "react";
import backgroundImage from "../assets/Footer/black.gif";
import logoheading from "../assets/Footer/heading.svg";
import handIcon from "../assets/Footer/hand1.svg";
import oldBadge from "../assets/Footer/old.svg";
import Line1 from "../assets/Footer/Line1.svg";
import face from "../assets/Footer/face.jpg";
import line2 from "../assets/Footer/line2.svg";
import produced from "../assets/Footer/produced.svg";
import sold from "../assets/Footer/sold.svg";
import what from "../assets/Footer/what.svg";
import line3 from "../assets/Footer/line3.svg";
import quality1 from "../assets/Footer/quality1.jpg";
import quality2 from "../assets/Footer/quality2.jpg";
import line4 from "../assets/Footer/line4.svg";
import success from "../assets/Footer/success.svg";
import fail from "../assets/Footer/fail.svg";
import formate1 from "../assets/Footer/formate1.jpg";
import formate2 from "../assets/Footer/formate2.jpg";
import formate3 from "../assets/Footer/formate3.svg";
import linee from "../assets/Footer/linee.gif";

const Formal = () => {
  return (
    <div className="">
    <div
      className=" h-screen overflow-x-auto overflow-y-hidden flex w-[595vw]    text-white text-4xl font-bold  "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="">
        <img
          src={logoheading}
          alt=""
          className="w-auto h-full py-10 px-10 object-contain"
        />
      </div>
      <div className="mt-20 ml-60 ">
        <div className="bg-white min-w-[550px] w-[550px] p-6 md:p-10     text-black font-bold text-3xl md:text-8xl font-font1 shadow-lg relative">
          SCROLL FOR <br /> BITE-SIZED <br /> STATS. →
        </div>
        <div className=" grid grid-cols-2 gap-4 mt-6 min-w-[550px] w-[550px]">
          {/* Box 1 */}
          <div className="relative bg-white text-black p-4 md:p-6 text-center text-md md:text-base font-font2 font-semibold">
            <img
              src={handIcon}
              alt="Hand"
              className="absolute -top-6 -left-32 w-16 md:w-40"
            />
            Click for a note regarding forward-looking statements
          </div>

          {/* Box 2 */}
          <div className="relative bg-white text-black p-4 md:p-6 text-center text-md md:text-base font-font2 font-semibold shadow-lg">
            Click for full update written in detailed, <br /> legally correct
            language!
            <img
              src={oldBadge}
              alt="Old!"
              className="absolute bottom -right-12 w-12 md:w-24"
            />
          </div>

          {/* Box 3 */}
          <div className="bg-white text-black p-4 md:p-6 text-center  font-font2 md:text-base font-semibold shadow-lg">
            Glossary
          </div>

          {/* Box 4 */}
          <div className="bg-white text-black p-4 md:p-6 text-center text-md font-font2 md:text-base font-semibold shadow-lg">
            Click to check out the sustainability update archive.
          </div>
        </div>
      </div>
      <div className="w-[500px] flex justify-center items-center ml-7">
        <img src={Line1} alt="" className="w-[350px]" />
      </div>
      <div className="flex flex-col justify-around max-w-[500px]">
        <div>
          <img src={face} alt="" />
        </div>
      </div>
      <div className=" relative flex justify-center items-center mt-10 ml-16">
        <div>
          <img src={line2} alt="" className="w-[1800px]" />
        </div>
        <div className="absolute left-[273px] top-[100px]">
          <img src={produced} alt="" className="w-[500px]" />
        </div>
        <div className="absolute right-[290px] top-[250px]">
          <img src={sold} alt="" className="w-[500px]" />
        </div>
      </div>
      <div className="flex justify-center items-center relative w-[600px] mx-32 ">
        <div>
          <img src={what} alt="" className="w-[800px]" />
        </div>
        <div className="absolute top-[300px] left-[7px] text-black px-5">
          <p className="font-font1 text-8xl tracking-tighter">
            WE SOLD
            <br /> MORE THAN
            <br /> WE MADE
          </p>
          <div className="font-font2 text-xl font-light tracking-tighter ">
            Yes, it’s possible. Since a lot of our
            <br /> products have a long shelf life, 12 million
            <br /> of the liters sold in
            <br /> 2023 was produced in 2022.
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center mt-[280px] ">
        <div>
          <img src={line3} alt="" className="w-[2200px]" />
        </div>
        <div>
          <img
            src={quality1}
            alt=""
            className="w-[400px] absolute left-[335px] -top-[200px]"
          />
        </div>
        <div>
          <img
            src={quality2}
            alt=""
            className="w-[400px] absolute left-[870px] -top-[200px]"
          />
        </div>
        <div>
          <p className="absolute font-font2 font-light right-[120px] text-[23px] top-[150px] tracking-tighter">
            WE’LL BE RIGHT BACK BUT FIRST, A WORD FROM OUR SPONSOR
          </p>
        </div>
      </div>
      <div>
        <div className=" bg-white h-screen mx-20">
          <iframe
            src="https://a.storyblok.com/f/107921/x/05758cc9da/oatly_glo_23_productfilm_vattensang_9x16_6s_230119.mp4"
            title="Oatly Video"
            className="w-[490px] h-[910px] p-7 pb-20 pt-14"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="relative flex justify-center items-center mt-10">
        <div>
          <img src={line4} alt="" className="w-[3300px]"/>
        </div>
       
        <div>
          <img src={success} alt="" className="w-[450px] absolute left-[387px] top-[50px]" />
        </div>
        <div>
          <p className="absolute left-[400px] top-[170px] text-black text-lg tracking-tighter font-light font-font2">Corporate climate footprint (kg CO2e/L)<br/> dropped 17%*</p>
          <p className="absolute left-[400px] top-[250px] text-black text-lg tracking-tighter font-light font-font2">Transportation of final product from <br/> Europe to Asia dropped 97%*</p>
          <p className="absolute left-[400px] top-[340px] text-black text-lg tracking-tighter font-light font-font2">Emissions (kg CO2e/L) from ingredients <br/>dropped 12%</p>
          <p className="absolute left-[400px] top-[420px] text-black text-lg tracking-tighter font-light font-font2">Packaging used per kg/L of Oatly<br/> produced dropped 13%*</p>
          <p className="absolute left-[400px] top-[505px] text-black text-lg tracking-tighter font-light font-font2">100 percent renewable electricity sourced <br/>for all Oatly-operated factories.*</p>
          <p className="absolute left-[400px] top-[590px] text-black text-lg tracking-tighter font-light font-font2">The gender balance of our executive team <br/> increased to 42 percent women (up from 23 <br/> percent in 2022)</p>
        </div>
        <div>
          <img src={fail} alt="" className="w-[450px] absolute left-[925px] bottom-[150px]"/>
        </div>
        <div>
          <p className="absolute left-[950px] top-[390px] text-black text-lg tracking-tighter font-light font-font2">Sourcing renewable heat energy for our <br/> factories remains a challenge.</p>
          <p className="absolute left-[950px] top-[475px] text-black text-lg tracking-tighter font-light font-font2">Sustainable ground transportation <br/> dropped 3% (and we’re trying to <br/> increase this to 100%).*</p>
          <p className="absolute left-[950px] top-[600px] text-black text-lg tracking-tighter font-light font-font2">We have not yet achieved gender parity in <br/> our executive team and the Board gender <br/> balance is even worse.</p>
        </div>
        <div>
          <img src={formate1} alt="" className="w-[450px] absolute left-[1595px] top-[150px]" />
        </div>
        <div>
          <p className="font-font1 absolute left-[1650px] text-black text-8xl top-[220px]">LCA FTW!</p>
          <p className="font-font2 absolute left-[1640px] top-[670px] font-light text-xl text-black tracking-tighter">Our Oat Drinks have between 44% and <br/> 80% lower climate impact than <br/> comparable milk from a cow according <br/>to multiple studies.*</p>
        </div>
        <div>
          <img src={formate2} alt="" className="w-[450px] absolute left-[2090px] top-[190px]" />
        </div>
        <div>
          <p className="font-font1 absolute text-black text-6xl top-[200px] left-[2100px]">LCA FTW!</p>
          <p className="font-font2 absolute font-light text-lg text-black tracking-tighter left-[2100px] top-[250px]">LCA stands for Life Cycle Assessment and <br/>is a systematic analysis of the potential <br/> environmental impacts of a specific<br/> product produced and consumed in a defined<br/> geographical space. For Oatly LCA’s<br/> include raw materials to point of sale and <br/> the waste management of the packaging.</p>
          <p className="font-font1 absolute text-2xl tracking-tighter left-[2100px] top-[450px] text-black">*THIS IMPORTANT FOOTNOTE IS A MUST READ!</p>
          <p className="font-font2 absolute font-light text-lg tracking-tighter left-[2100px] top-[480px] text-black ">According to multiple studies, certain,<br/> specific Oatly drinks have a between 44% and<br/> 80% lower climate impact than comparable cow’s <br/>milk in the cases analyzed in China, Europe and<br/> United States. Blonk Consultants (2022), LCA of<br/> Oatly Barista and comparison with cow’s milk;<br/> Blonk Consultants (2023), LCA of Oatly “No” Sugars and Oatly Oat Drink (Whole/Semi/Light),<br/> and comparison with cow’s milk; Blonk<br/> Consultants (2023), LCA of Oatly Original and <br/>comparison with cow’s milk. Blonk Consultants <br/>(2024), LCA of Oatly Batista China. </p>
        </div>
        <div>
          <img src={formate3} alt="" className="w-[500px] absolute right-[130px] top-[200px]" />
        </div>
        <div>
          <p className="font-font1 text-black absolute right-[400px] top-[400px] text-4xl">IT'S A POSITIVE <br/> NEGATIVE!</p>
          <p className="font-font2 font-light text-xl absolute text-black right-[330px] top-[500px]">We have a negative median <br/> pay gap, which means that <br/> globally, female employees,<br/> as a group, earn higher <br/> wages than male employees,<br/> as a group.</p>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Formal;
