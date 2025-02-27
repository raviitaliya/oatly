import React from "react";
import thingswedo from "../assets/ThingsWeDo/ThingsWeDo.svg";
import story1 from "../assets/ThingsWeDo/story1.jpg";
import story2 from "../assets/ThingsWeDo/story2.jpg";
import story3 from "../assets/ThingsWeDo/story3.jpg";
import story4 from "../assets/ThingsWeDo/story4.jpg";
import story5 from "../assets/ThingsWeDo/story5.jpg";
import story6 from "../assets/ThingsWeDo/story6.jpg";
import story7 from "../assets/ThingsWeDo/story7.jpg";
import story8 from "../assets/ThingsWeDo/story8.jpg";
import story9 from "../assets/ThingsWeDo/story9.jpg";
import story11 from "../assets/ThingsWeDo/story11.jpg";
import story12 from "../assets/ThingsWeDo/story12.jpg";
import story13 from "../assets/ThingsWeDo/story13.jpg";
import story14 from "../assets/ThingsWeDo/story14.jpg";
import story15 from "../assets/ThingsWeDo/story15.jpg";
import story16 from "../assets/ThingsWeDo/story16.jpg";
import featureImage from "../assets/ThingsWeDo/story10.jpg";
import background from "../assets/Footer/backgroundd.jpg";
import Footer from "@/components/Footer";

const ThingsWeDo = () => {
  const stories = [
    {
      id: 1,
      image: story1,
      title: "DAIRY-FREE AT THE BERLINALE",
      description:
        "When a big international film festival takes away dairy milk, how do its attendees react? By not really noticing, it turns out.",
      date: "MAR 15, 2023",
    },
    {
      id: 2,
      image: story2,
      title:
        "EVERYTHING YOU WANT TO KNOW ABOUT OATLY’S SECRET LAB IN PHILADELPHIA",
      description: "Except what I can’t tell you.",
      date: "FEB 9, 2023",
    },
    {
      id: 3,
      image: story3,
      title: "LUNCH WITH AL",
      description:
        "He’s been eating Jewish deli for more than 80 years. We asked him to try vegan corned beef. This is what happened.",
      date: "JAN 27, 2023",
    },

    {
      id: 4,
      image: story4,
      title: "LONG AGO, HORSES WERE TRACTORS AND OATS WERE GAS",
      description:
        "It’s about American farming in the early 20th century. Read on, it’ll make sense soon.",
      date: "JAN 13, 2023",
    },
    {
      id: 5,
      image: story5,
      title: "WHAT WE LEARNED AT COP 27 (AND WHAT WE DIDN’T)",
      description:
        "The food system finally played a key role, but our esteemed Oatly correspondent was left wanting more.",
      date: "JAN 10, 2023",
    },
    {
      id: 6,
      image: story6,
      title: "WHEN AN OAT LATTE IS ILLEGAL",
      description:
        "A barista just had to smuggle oat drink into a coffee competition. It shouldn’t be this way.",
      date: "NOV 28, 2022",
    },

    {
      id: 7,
      image: story7,
      title: "DESIGN BY BULENT",
      description:
        "Meet Bulent Aslan, the London deli owner and genius designer, creating art out of Oatly cartons.",
      date: "NOV 23, 2022",
    },
    {
      id: 8,
      image: story8,
      title: "THE U.S.S. BOATLY",
      description:
        "In the summer of 2022, a Colorado man named Nate had a vision: A boat made out of Oatly cartons. This is his story.",
      date: "NOV 23, 2022",
    },
    {
      id: 9,
      image: story9,
      title:
        "YOU ASKED FOR IT, WE LISTENED. HERE ARE PHOTOS OF AN OAT MILL IN SWEDEN.",
      description: "Please don’t say we never gave you anything.",
      date: "NOV 17, 2022",
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
      image: story13,
    },
    {
      id: 2,
      title: "THE OATLY DRAGSTER",
      description:
        "When we learned an old dairy truck in Illinois had been mutated into a dragster, we asked a simple question: Will Oatly make it faster?",
      date: "JUL 12, 2023",
      category: "STORIES",
      image: story14,
    },
    {
      id: 3,
      title: "WE SWAPPED DAIRY FOR OATLY AT A DINER IN LOUISIANA",
      description:
        "We convinced a Louisiana diner to swap dairy with Oatly in their most popular dishes. Almost everyone enjoyed the Oatly jambalaya and crawfish fettuccine, except for a few individuals who asked to be removed from the video.",
      date: "MAY 18, 2023",
      category: "BRAINWASHING",
      image: story15,
    },
    {
      id: 4,
      title: "THE FUTURE AGRICULTURE RENOVATION MOVEMENT",
      description:
        "More than just a clever acronym, the F.A.R.M. is a global initiative that works with farmers toward solutions in regenerative agriculture.",
      date: "MAY 10, 2023",
      category: "STORIES",
      image: story16,
    },
  ];

  const story = [
    {
      id: 1,
      title: "OATLY DOES THE GOLDEN SPURTLE",
      description:
        "What do you do when you’re Oatly and you discover that there’s a World Porridge Making Championship in the Scottish Highlands? You show up.",
      date: "DEC 6, 2023",
      category: "STORIES",
      image: story11,
    },
    {
      id: 2,
      title: "A WISCONSIN SUPPER CLUB SWAPS DAIRY WITH OATLY",
      description:
        "We visited The Duck Inn Supper Club in America’s Dairy State and made Oatly grasshoppers and creme brûlées. Surprisingly, no chaos ensued and we made it out alive.",
      date: "NOV 16, 2023",
      category: "BRAINWASHING",
      image: story12,
    },
  ];

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className=" py-10"
      >
        <div className="bg-white mx-8">
        <div>
          <div className="flex flex-col items-center h-auto mb-12 pt-36 ">
            <div className=" bottom-0  ">
              <img
                src={thingswedo}
                alt="Things we do"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto  py-10">
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

        <div className=" mx-auto px-6 lg:px-16 py-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <div className="overflow-hidden">
              <img
                src={featureImage}
                alt="Nordic Seed Vault"
                className="w-full h-auto transition duration-300 ease-in-out hover:scale-110 cursor-hand "
              />
            </div>

            {/* Right Side - Text */}
            <div className="text-left">
              <h1 className="text-4xl font-font1 md:text-7xl uppercase ">
                The Mysteries Locked Inside Nordic Seed Vaults
              </h1>
              <p className="font-font2 text-lg mt-4">
                Oatly wants to uncover what those mysteries say about oats. So
                does the Nordic Genetic Resource Center. Can you guess what
                happens next?
              </p>
              <p className="text-sm text-gray-700 font-semibold mt-4">
                STORIES • APR 17, 2023
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto pb-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-7">
            {stories.map((story) => (
              <div key={story.id} className="space-y-4 overflow-hidden">
                {/* Image */}
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full transition duration-300 ease-in-out hover:scale-110 cursor-hand "
                />

                {/* Text Content */}
                <div>
                  <h2 className="text-3xl font-font1 font-bold uppercase ">
                    {story.title}
                  </h2>
                  <p className=" text-lg mt-2 font-font2">
                    {story.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-3">
                    STORIES • {story.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThingsWeDo;
