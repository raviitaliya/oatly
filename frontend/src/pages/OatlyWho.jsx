import React from "react";
import backgroundImage from "../assets/OatlyWho/backgroundImage.jpg";

const OatlyWho = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="leading-none">
        <div className="flex items-center justify-center min-h-screen text-white text-center tracking-tighter">
          <div className="absolute px-4">
            <p className="font-font1 text-[40px] md:text-[80px] lg:text-[120px] pb-4 relative">OATLY WHO</p>
            <p className="font-font2 text-[16px] md:text-[20px]">OR...</p>
            <p className="font-font1 text-[40px] md:text-[80px] lg:text-[120px]">THE OBLIGATORY</p>
            <p className="font-font1 text-[40px] md:text-[80px] lg:text-[120px]">"ABOUT US"</p>
            <p className="font-font1 text-[40px] md:text-[80px] lg:text-[120px]">SECTION OF AN OAT</p>
            <p className="font-font1 text-[40px] md:text-[80px] lg:text-[120px]">DRINK COMPANY'S</p>
            <p className="font-font1 text-[40px] md:text-[80px] lg:text-[120px]">WEBSITE</p>
          </div>
        </div>
        <div className="text-white min-h-screen flex items-center justify-center px-4 md:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           
              <div>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-font2">
                  For three years, this “Oatly who?” page was a rambling
                  2,000-word article that tried to explain Oatly’s reason for
                  existence. It read like it was written by a 10-year-old. And
                  not just any 10-year-old, but one who loved to recklessly
                  experiment with random punctuation, misspellings, and
                  offensively long run-on sentences.
                </p>
                <p className="mt-4 text-gray-300 text-lg md:text-xl leading-relaxed font-font2">
                  That 10-year-old child—stuck inside the body of an adult
                  freelance copywriter—was wrong.
                </p>
              </div>

              {/* Right Side Content */}
              <div>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-font2">
                  People do in fact come here. The team that manages our website
                  told us thousands of people visit the page every month, though
                  half of them from the same IP address in a country we haven’t
                  heard of.
                </p>
                <p className="mt-4 text-gray-300 text-ld md:text-xl leading-relaxed font-font2">
                  So for the people and the bots who need answers, here it goes…
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OatlyWho;
