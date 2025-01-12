import React from "react";
import backgroundImage from "../assets/OatlyWho/backgroundImage.jpg";
import titleImage from "../assets/OatlyWho/packs.svg";
import hand from '../assets/OatlyWho/hand.svg'
import andFinally from'../assets/OatlyWho/and-finally.svg';
import Footer from "@/components/Footer";
import multipleImage from '../assets/OatlyWho/multipleImage.webp'
import singleImage from '../assets/OatlyWho/singleImage.svg'

const OatlyWho = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="leading-none">
<<<<<<< HEAD
        <div className="flex items-center justify-center min-h-screen text-white text-center tracking-tighter">
          <div className="absolute px-4">
            <p className="font-font1 text-[40px] md:text-[80px] lg:text-[120px] pb-4 relative">
              OATLY WHO
            </p>
            <p className="font-font2 text-[16px] md:text-[20px]">OR...</p>
            <p className="font-font1 text-[40px] md:text-[80px] lg:text-[120px]">
              THE OBLIGATORY
            </p>
            <p className="font-font1 text-[40px] md:text-[80px] lg:text-[120px]">
              "ABOUT US"
            </p>
            <p className="font-font1 text-[40px] md:text-[80px] lg:text-[120px]">
              SECTION OF AN OAT
            </p>
            <p className="font-font1 text-[40px] md:text-[80px] lg:text-[120px]">
              DRINK COMPANY'S
            </p>
            <p className="font-font1 text-[40px] md:text-[80px] lg:text-[120px]">
              WEBSITE
            </p>
          </div>
        </div>
        <div className="text-white min-h-screen flex items-center justify-center px-4 md:px-8">
          <div className="container mx-auto mb-[50rem]">
=======

        <div className="py-32 sm:py-24">
          <div className="flex items-center justify-center  text-white text-center tracking-tighter relative">
            <div className=" px-4 ">
              <img
                src={titleImage}
                className="absolute left-1/2 h-full -translate-x-1/2"
              />
              <p className="font-font1 text-[40px] tracking-tight	 md:text-[80px] lg:text-[120px] pb-4 relative">
                OATLY WHO
              </p>
              <p className="font-font2 text-[16px] tracking-tight	 md:text-[20px]">
                OR...
              </p>
              <p className="font-font1 text-[40px] tracking-tight	 md:text-[80px] lg:text-[120px]">
                THE OBLIGATORY
              </p>
              <p className="font-font1 text-[40px] tracking-tight	 md:text-[80px] lg:text-[120px]">
                "ABOUT US"
              </p>
              <p className="font-font1 text-[40px] tracking-tight	 md:text-[80px] lg:text-[120px]">
                SECTION OF AN OAT
              </p>
              <p className="font-font1 text-[40px] tracking-tight	 md:text-[80px] lg:text-[120px]">
                DRINK COMPANY'S
              </p>
              <p className="font-font1 text-[40px] tracking-tight	 md:text-[80px] lg:text-[120px]">
                WEBSITE
              </p>
            </div>
          </div>
        </div>

        <div className="text-white  flex items-center justify-center px-4 md:px-8">
          <div className="container mx-auto  ">
>>>>>>> ffcbb05ed35f24e4f8cad45517f9471291ad748a
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 text-lg md:text-xl  font-font2">
                  For three years, this “Oatly who?” page was a rambling
                  2,000-word article that tried to explain Oatly’s reason for
                  existence. It read like it was written by a 10-year-old. And
                  not just any 10-year-old, but one who loved to recklessly
                  experiment with random punctuation, misspellings, and
                  offensively long run-on sentences.
                </p>
<<<<<<< HEAD
                <p className="mt-4 text-gray-300 text-lg md:text-xl  font-font2">
=======
                <p className="mt-4 text-gray-300 text-lg md:text-xl font-font2">
>>>>>>> ffcbb05ed35f24e4f8cad45517f9471291ad748a
                  That 10-year-old child—stuck inside the body of an adult
                  freelance copywriter—was wrong.
                </p>
              </div>

              {/* Right Side Content */}
              <div>
                <p className="text-gray-300 text-lg md:text-xl  font-font2">
                  People do in fact come here. The team that manages our website
                  told us thousands of people visit the page every month, though
                  half of them from the same IP address in a country we haven’t
                  heard of.
                </p>
<<<<<<< HEAD
                <p className="mt-4 text-gray-300 text-lg md:text-xl  font-font2">
=======
                <p className="mt-4 text-gray-300 text-ld md:text-xl font-font2">
>>>>>>> ffcbb05ed35f24e4f8cad45517f9471291ad748a
                  So for the people and the bots who need answers, here it goes…
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative my-12">
        <div className="container mx-auto max-lg:mx-3">
          <div className="bg-white w-3/5 max-lg:w-full  z-50  max-sm:h-[300px] h-[500px] px-4 pb-6 ">
              <p className="font-font1 text-5xl py-3">WHAT IS OATLY</p>
              <iframe
                width="100%"
                src="https://www.youtube.com/embed/aZKrsnl1Bus?si=9EPYcC0GoHMTsxfH"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="h-[calc(100%-65px)]"
              ></iframe>
          </div>
          <div className="absolute right-0 -top-14 max-lg:top-0 max-lg:-z-10">
            <img src={hand} className="w-[700px] z-0 max-lg:w-[200px] "  />
          </div>
        </div>
        </div>

        <div className="text-white  flex items-center justify-center px-4 md:px-8">
          <div className="container mx-auto  ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 text-lg md:text-xl  font-font2">
                We’re 350 words in and we still haven’t mentioned the most important part. (Our copy editor left two months ago for a silent yoga retreat and there’s no sign of her return.) Oatly’s drinks, spreads, ’gurts, and desserts taste delicious. Like, insanely delicious. Sometimes people taste an Oatly product and are so overwhelmed by its level of deliciousness, that it leaves them questioning their very concept of taste. 
                </p>
              </div>
              <div>
                <p className="text-gray-300 text-lg md:text-xl  font-font2">
                Honestly, we have a whole wing of nerds—excuse us, food scientists—who’ve devoted their lives to making the tastiest Oatly products the planet has ever seen. And, yes, taste is subjective and hard to convey on a webpage, but you’ll have to take our word for it. When has a multinational, publicly traded food company ever lied to you? 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mb-4">
          <img src={singleImage} />
        </div>

        <div className="flex justify-center items-center mb-4">
          <img src={multipleImage}  />
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="mb-9">
            <img src={andFinally} />
          </div>
          <div className="text-center max-w-5xl mb-9">
            <p className="text-white text-lg font-font2  ">So, now you've learned a bit more about our strange, Possibly Swedish, oat drink company, You've probably thinking, "How can I learn EVEN more?" Luckily we've spent the better part of past decade talking-and signing about the work we do, the products we make, and people we've pissed off along the way, please make our web team proud and spend the rest of your waking hours browsing this website.</p>
          </div>
          <p className="text-white flex items-center justify-center mb-10 pb-10 font-font2 ">
          Source: <a href="https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/definition-facts"> <span className="underline decoration-dashed underline-offset-4">  https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/definition-facts </span></a>
          </p>
      </div>
      
      
      </div>
      <Footer/>
    </div>
  );
};

export default OatlyWho;
