import React from "react";
import backgroundImage from "../assets/OatlyWho/backgroundImage.jpg";
import titleImage from "../assets/OatlyWho/packs.svg";
import hand from "../assets/OatlyWho/hand.svg";
import andFinally from "../assets/OatlyWho/and-finally.svg";
import Footer from "@/components/Footer";
import multipleImage from "../assets/OatlyWho/multipleImage.webp";
import singleImage from "../assets/OatlyWho/singleImage.svg";
import wow from "../assets/OatlyWho/wow.svg";
import cartoon from "../assets/OatlyWho/cartoon.svg";
import cartoon1 from "../assets/OatlyWho/cartoon2.svg";

const OatlyWho = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="leading-none">
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
                <p className="mt-4 text-gray-300 text-lg md:text-xl font-font2">
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
                <p className="mt-4 text-gray-300 text-ld md:text-xl font-font2">
                  So for the people and the bots who need answers, here it goes…
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-lg:px-6 max-lg:py-10">
        <div className="relative my-12">
          <div className="lg:container lg:mx-auto">
            <div className="bg-white w-3/5 max-lg:w-full  z-50  max-sm:h-[300px] h-[500px] px-4 pb-6  ">
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
            <div className="absolute right-0 -top-14  max-lg:top-0 max-lg:-z-10 max-2xl:-top-2 ">
              <img src={hand} className="w-[700px]   z-0 max-lg:w-[200px] max-2xl:w-[400px] " />
            </div>
          </div>
          </div>
        </div>

        <div className="relative px-4 ">
          <div className="container mx-auto max-lg:mx-3 text-white">
            <div className=" w-3/5 max-lg:w-full mb-10  ">
              <p className="text-gray-300 text-lg md:text-xl  font-font2 mb-4 text-justify">
                We’re a Swedish food company that makes delicious products from
                oats, which in turn makes it easier for people to live lives
                that are less taxing on the planet and their bodies. The Swedish
                part may or may not be important, depending on what you think of
                Swedes. But the latter part—our bodies, our planet—is essential
                to our existence.
              </p>
              <p className="text-gray-300 text-lg md:text-xl  font-font2 text-justify">
                Nearly 70 percent of the world’s population has trouble
                digesting lactose. If you’re reading this and nodding along—and
                making audible “mmm-hmmm” sounds and saying things like
                “Preach!” and “I feel seen!”—you probably know what we’re
                talking about.
              </p>
            </div>
            <div>
              <img src={wow} className="absolute right-32 max-2xl:right-10 -top-56 w-[600px] max-lg:hidden max-2xl:w-[350px] max-2xl:-top-32" />
            </div>
          </div>
        </div>

        <div className=" text-white flex flex-col lg:flex-row items-center lg:items-start justify-between pt-[300px] container mx-auto max-lg:pt-10 max-2xl:pt-10 px-8 ">
          <div className="lg:w-2/5 w-full space-y-6 mb-8 lg:mb-0 pr-4">
            <p className="text-gray-300 text-lg md:text-xl font-font2 text-justify">
              Then there’s the planet. It’s in trouble. And part of that problem
              derives from a broken food system that recklessly taxes the
              world’s resources. The global food system is responsible for
              one-third of global greenhouse gas emissions, with about 50
              percent of that coming from animal agriculture industries. We’ll
              spare you the list of incredibly depressing facts and the whole
              “cows producing methane” speech, but take our word for it … it’s
              bad. If you do want to hear the speech, please join one of our
              employees at their family Midsommar celebration, where after a few
              drinks they’ll inevitably give the whole “Dairy is Killing the
              Planet” TedTalk to their stubborn relatives.
            </p>
            <p className="text-gray-300 text-lg md:text-xl font-font2 text-justify ">
              That’s why we can’t keep relying on the decades-old dairy industry
              to shove their little drinks and foods at us. Oatly, as you may
              have guessed from the name, is made from a super sustainable crop:
              oats. According to a recent study from our U.S. team, Oatly
              Original Oat Drink produced and sold in the U.S. has a 49 percent
              lower climate change impact and nearly 80 percent lower water
              consumption compared to comparable cow’s milk.
            </p>
          </div>

          <div className="bg-white lg:w-3/5 w-full z-50 max-lg:w-full h-[500px] max-sm:h-[300px] px-4 pb-6 rounded-md shadow-lg">
            <p className="font-font1 text-3xl lg:text-5xl text-black py-3 ">
              BUT WHY OATS
            </p>
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/BTgflQVsd7s?si=Y4xQBUQZcvvjfjKR"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="h-[calc(100%-65px)]"
            ></iframe>
          </div>
        </div>

        <div className=" container mx-auto relative max-lg:hidden">
          <img src={cartoon} className="absolute right-8 -top-24  w-[800px] max-2xl:w-[550px]  max-2xl:right-4 max-2xl:-top-[450px]" />
          <img src={cartoon1} className="absolute max-2xl:w-[400px] max-2xl:right-0 max-2xl:top-32 right-2 top-96 w-[600px]" />
        </div>
{/* 
        <div className="container mx-auto max-lg:mx-3 mb-10 mt-[400px] max-lg:mt-24 "> */}
        <div className="max-lg:px-6 max-lg:py-10 lg:container lg:mx-auto max-lg:mt-24 mt-[400px] max-2xl:mt-[100px] mb-10">
          <div className="bg-white lg:w-3/5 w-full z-50 max-lg:w-full h-[500px] max-sm:h-[300px] px-4 pb-6 rounded-md shadow-lg  ">
            <p className="font-font1 text-3xl lg:text-5xl text-black py-3">
              WHAT DOES OATLY TASTE LIKE?
            </p>
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/V2EA8O0esKk?si=4d_5BV2KME_t2k8k"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className=" h-[calc(100%-65px)] max-sm:h-[calc(100%-88px)] max-2xl:h-[calc(100%-110px)] "/>
          </div>
          </div>
         
        {/* </div> */}

        <div className="text-white  flex items-center justify-center px-4 md:px-8">
          <div className="container mx-auto  ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 text-lg md:text-xl  font-font2 text-justify">
                  We’re 350 words in and we still haven’t mentioned the most
                  important part. (Our copy editor left two months ago for a
                  silent yoga retreat and there’s no sign of her return.)
                  Oatly’s drinks, spreads, ’gurts, and desserts taste delicious.
                  Like, insanely delicious. Sometimes people taste an Oatly
                  product and are so overwhelmed by its level of deliciousness,
                  that it leaves them questioning their very concept of taste.
                </p>
              </div>
              <div>
                <p className="text-gray-300 text-lg md:text-xl  font-font2 text-justify">
                  Honestly, we have a whole wing of nerds—excuse us, food
                  scientists—who’ve devoted their lives to making the tastiest
                  Oatly products the planet has ever seen. And, yes, taste is
                  subjective and hard to convey on a webpage, but you’ll have to
                  take our word for it. When has a multinational, publicly
                  traded food company ever lied to you?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center my-10">
          <img src={singleImage} className="w-[100px]" />
        </div>

        <div className="flex justify-center items-center mb-4">
          <img src={multipleImage} />
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="my-9">
            <img src={andFinally} />
          </div>
          <div className="text-center max-w-5xl mb-9">
            <p className="text-white text-lg font-font2 text-justify ">
              So, now you've learned a bit more about our strange, Possibly
              Swedish, oat drink company, You've probably thinking, "How can I
              learn EVEN more?" Luckily we've spent the better part of past
              decade talking-and signing about the work we do, the products we
              make, and people we've pissed off along the way, please make our
              web team proud and spend the rest of your waking hours browsing
              this website.
            </p>
          </div>
          <p className="text-white flex items-center justify-center mb-10 pb-10 font-font2 ">
            Source:{" "}
            <a href="https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/definition-facts">
              {" "}
              <span className="underline decoration-dashed underline-offset-4">
                {" "}
                https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance/definition-facts{" "}
              </span>
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OatlyWho;
