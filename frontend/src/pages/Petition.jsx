import React, { useState } from "react";
import petition from "../assets/Footer/Petition.svg";
import petition2 from "../assets/Footer/petition2.svg";
import petition3 from "../assets/Footer/petition3.jpg";
import petition4 from "../assets/Footer/petition4.svg";
import petition5 from "../assets/Footer/petition5.jpg";
import petition6 from "../assets/Footer/petition6.jpg";
import petition7 from "../assets/Footer/petition7.jpg";
import s1 from "../assets/Footer/s1.jpg";
import s2 from "../assets/Footer/s2.jpg";
import s3 from "../assets/Footer/s3.jpg";
import s4 from "../assets/Footer/s4.jpg";
import s5 from "../assets/Footer/s5.jpg";
import s6 from "../assets/Footer/s6.jpg";
import stories from "../assets/Footer/stories.svg";
import Footer from "@/components/Footer";

const Petition = () => {
  const images = [petition5, petition6, petition7];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const story = [
    {
      id: 1,
      title: "OATLY DOES THE GOLDEN SPURTLE",
      description:
        "What do you do when you’re Oatly and you discover that there’s a World Porridge Making Championship in the Scottish Highlands? You show up.",
      date: "DEC 6, 2023",
      category: "STORIES",
      image: s1,
    },
    {
      id: 2,
      title: "A WISCONSIN SUPPER CLUB SWAPS DAIRY WITH OATLY",
      description:
        "We visited The Duck Inn Supper Club in America’s Dairy State and made Oatly grasshoppers and creme brûlées. Surprisingly, no chaos ensued and we made it out alive.",
      date: "NOV 16, 2023",
      category: "BRAINWASHING",
      image: s2,
    },
  ];
const storiesData = [
    {
        id: 1,
        title: "CAROLINE SCHIFF COOKS WITH OATLY",
        description:
            "The New York pastry chef came up with three fall recipes that feature Oatly, and they’re delicious. Trust us—we tasted them.",
        date: "NOV 6, 2023",
        category: "STORIES",
        image: s3,
    },
    {
        id: 2,
        title: "THE OATLY DRAGSTER",
        description:
            "When we learned an old dairy truck in Illinois had been mutated into a dragster, we asked a simple question: Will Oatly make it faster?",
        date: "JUL 12, 2023",
        category: "STORIES",
        image: s4,
    },
    {
        id: 3,
        title: "WE SWAPPED DAIRY FOR OATLY AT A DINER IN LOUISIANA",
        description:
            "We convinced a Louisiana diner to swap dairy with Oatly in their most popular dishes. Almost everyone enjoyed the Oatly jambalaya and crawfish fettuccine, except for a few individuals who asked to be removed from the video.",
        date: "MAY 18, 2023",
        category: "BRAINWASHING",
        image: s5,
    },
    {
        id: 4,
        title: "THE FUTURE AGRICULTURE RENOVATION MOVEMENT",
        description:
        "More than just a clever acronym, the F.A.R.M. is a global initiative that works with farmers toward solutions in regenerative agriculture.",
      date: "MAY 10, 2023",
      category: "STORIES",
      image: s6,
    },
  ];

  return <>
    
    
      <div className="flex justify-center ">
        <img src={petition} alt="" className="md:w-[900px] py-4 md:py-20" />
      </div>
      <div className="flex justify-center mx-5 md:mx-[500px] text-center font-font2 md:text-2xl text-xl mb-4 md:mb-10">
        <p>
          The food industry generates about one third of the world’s total
          human-created climate impact.* But how can you start making more
          sustainable choices when it’s almost impossible to find out the impact
          different food have on the planet? Well, you can’t, which obviously is
          something that must have to change. But if you plan to request that
          the whole food industry starts showing their products’ climate impact,
          you should probably start by doing it yourself, right?
        </p>
      </div>
      <div className="flex justify-center">
        <img src={petition2} alt="" className="md:max-w-[100px] max-w-[30px]" />
      </div>
      <div className="flex justify-center my-4 md:my-10">
        <img src={petition3} alt="" />
      </div>
      <div className="flex justify-center flex-col mx-5 md:mx-[500px] text-left font-font2 md:text-2xl text-xl mb-4 md:mb-10">
        <p>
          And that we did. Click here for story (and get more technical and
          numerical stuff than you probably ever wished for). The short story is
          that, in Europe you now can find our CO2e numbers on the back of our
          packaging or on all our product sites on our website, and easily
          compare them with those of other products before deciding what to buy.
        </p>
        <p className="mt-4 md:mt-10">
          Wait, did we say “easily”? Well, the one problem with all these
          numbers is they don’t really say much as long as there’s nothing to
          compare them with. Which is exactly where the campaign came into the
          picture, with one clear message across Europe: “Hey food industry!
          Show us your numbers.”{" "}
        </p>
      </div>
      <div className="flex justify-center">
        <iframe
          width="1100"
          height="600"
          src="https://www.youtube.com/embed/J77DF61ggQw?si=8TdVEWzHcFFanNl5"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="flex justify-center my-4 md:my-16">
        <img src={petition4} alt="" />
      </div>
      <div>
        <div className="flex justify-center mx-5 md:mx-[500px] text-center font-font2 md:text-2xl text-xl mb-4 md:mb-10">
          <p>
            In Germany, we decided to take it all a step further and petition 
            the Bundestag to make a law requiring that climate footprint 
            information must be printed on food packaging. After all, there are
            laws mandating nutritional labels for our health—why should it be
            any different for numbers related to the health of our planet?
          </p>
        </div>
      </div>
      
        <div className="relative w-full md:w-screen md:h-screen mx-auto overflow-hidden md:mt-[50px]">
          {/* Images Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className="w-full flex-shrink-0 "
              />
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
          >
            {"<"}
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
          >
            {">"}
          </button>
        </div>
      
      <div className="flex justify-center mx-5 md:mx-[500px] text-center font-font2 md:text-2xl text-xl mb-4 md:mb-10 mt-4 md:mt-20">
        <p>
          The petition terms set by the Bundestag were characteristically stern.
          We had only 28 days to get 50,000 signatures. So, since we needed a
          hand (or 50,000 to be exact) to get it done, we launched a multimedia
          campaign, all wrapped up in ultra-digestible 8-bit retro graphics. 
          How it all ended? Watch the film to find out, but we can reveal that
          we finally got to use the words “Hollywood ending”. (Yeah, seems like
          you might wanna go and get some oat ice-cream before hitting ‘play’
          below.)
        </p>
      </div>
      <div className="flex justify-center">
        <iframe
          width="1100"
          height="600"
          src="https://www.youtube.com/embed/txiA9gZgR54?si=-UeFrqcSMNvKt7og"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="flex justify-center mx-5 md:mx-[500px] text-center font-font2 md:text-2xl text-xl mb-4 md:mb-10 mt-4 md:mt-20">
        <p>
          Thanks to the 57,067 petition signers and our awesome team of alliance
          members, *we had a hearing with the Bundestag on September 14, in
          which our co-general manager, Tobias, presented the case for making
          CO2e food labels a law. We think Tobias did great, and now we’re
          waiting for the Bundestag to let us know what they think(about the law
          proposal, not about Tobias, that is). But, well, making any decision
          seems to take like forever in the world of politics. *No, we are not
          alone in this! Before the hearing, we teamed up with a bunch of great
          companies supporting our idea of CO2e labels on food. And no matter
          what the politicians are up to, together, we’ll continue to work
          towards the goal of having climate impact numbers visible on all food
          packaging.
        </p>
      </div>
      <div className="container mx-auto  py-10">
        <img src={stories} alt="" className="md:my-14" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {story.map(({ id, title, description, date, category, image }) => (
            <div key={id} className="flex flex-col overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-auto transition duration-300 ease-in-out hover:scale-110 cursor-hand  shadow-md"
              />
              <div className="mt-4">
                <h2 className="text-2xl md:text-5xl font-font1 uppercase ">
                  {title}
                </h2>
                <p className="text-lg font-font2 font-semibold t-2">
                  {description}
                </p>
                <p className="text-sm font-semibold text-gray-500 uppercase  mt-3">
                  {category} • {date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto  pb-8">
        {/* Flexbox Layout */}
        <div className="flex flex-wrap  gap-4">
          {storiesData.map(
            ({ id, title, description, date, category, image }) => (
              <div
                key={id}
                className="w-full sm:w-[48%] lg:w-[24%] flex flex-col overflow-hidden"
              >
                {/* Image */}
                <img
                  src={image}
                  alt={title}
                  className="w-full  shadow-md transition duration-300 ease-in-out hover:scale-110 cursor-hand  "
                />

                {/* Text Content */}
                <div className="mt-3">
                  <h2 className="text-3xl font-font1 uppercase  leading-tight">
                    {title}
                  </h2>
                  <p className="text-sm font-font2 font-semibold mt-1">
                    {description}
                  </p>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-3">
                    {category} • {date}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
        </div>
      <Footer />
    

    </>

}

export default Petition;
