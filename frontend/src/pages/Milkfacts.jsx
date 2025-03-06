import React from "react";
import bonn from "../assets/Footer/bonn.svg";
import book from "../assets/Footer/book.jpg";
import backgroundImage from "../assets/Footer/pink.png";
import glass1 from "../assets/Footer/glass1.svg";
import glass2 from "../assets/Footer/glass2.svg";
import backgroundImage1 from "../assets/Footer/backgroundd.jpg";
import glass3 from "../assets/Footer/glass3.svg";
import Faq from "../assets/Footer/Faq.svg";
import Footer from "@/components/Footer";
import s1 from '../assets/Footer/s1.jpg';
import s2 from '../assets/Footer/s2.jpg';   
import s3 from '../assets/Footer/s3.jpg';
import s4 from '../assets/Footer/s4.jpg';
import s5 from '../assets/Footer/s5.jpg';
import s6 from '../assets/Footer/s6.jpg';
import stories from '../assets/Footer/stories.svg';

const Milkfacts = () => {
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

  return (
    <div>
      <div className="flex flex-col items-center justify-center font-font1 md:pt-40 bg-white text-center">
        <h1 className="text-4xl sm:text-5xl max-w-[900px] md:text-6xl lg:text-9xl font-black leading-tight text-black">
          MILK FACTS ...OR MYTHS?
        </h1>
        <p className="max-w-[900px] font-font2 mt-6 text-sm sm:text-base md:text-2xl text-gray-800 ">
          So many things have been said about cow’s milk during such a long
          period of time, that a lot of them tend to be considered as facts. But
          is everything you’ve learnt about milk true? (Short answer: No!) In
          Finland, which is the country with the highest milk consumption per
          person, we decided it was about time to bust the myths. Like the ones
          saying that “milk gives you strong bones!” and “cow’s milk is the most
          natural thing you can drink” and “there are too little protein in
          plant-based drinks”.
        </p>
        <img src={bonn} alt="" className="w-[100px] mt-5 md:mt-14" />
        <img src={book} alt="" className="w-[800px] mt-5 md:mt-14" />
        <p className="max-w-[800px] font-font2 mt-6 text-sm md:text-xl text-left text-gray-800">
          Our booklet Milk Myths (Maitomyytit) was based on 20 different “facts”
          about milk and sent home to parents in more than 250,000 households.
          Apart from looking into what’s true and what is not when it comes to
          milk, the purpose was to initiate a bigger discussion around topics
          related to sustainability, health and plant-based versus animal-based
          food.
        </p>
        <p className="max-w-[800px] font-font2 mt-6 text-sm md:text-xl text-left text-gray-800">
          Did we start a debate? Oh, yes! Suddenly, the content of the
          booklet—accompanied by print ads and outdoor messaging—was discussed
          everywhere. In more than 50 newspaper articles (not to brag, but one
          of them even brought in experts who confirmed our arguments). On
          Twitter. On sofas in front of the TV. By politicians. Around dinner
          tables and in saunas (however, we got some angry complaints saying
          that the book doesn’t burn very well—sorry about that!).
        </p>
        <p className="max-w-[800px] font-font2 mt-6 text-sm md:text-xl text-left text-gray-800">
          All in all, we managed to raise tons of noise and debate around food,
          health and sustainability. Some voices were supportive, while others
          were, let’s say, less happy. But that’s what’s needed to create
          change, right? And best of all, the discussions are still ongoing. Go
          Finland!
        </p>
        <p className="max-w-[800px] font-font1 mt-6 md:my-12 text-sm md:text-3xl text-left ">
          Below are some examples of the arguments we make in the book. If you
          happen to know Finnish or Swedish, you can read the whole book at
          www.maitomyytit.fi
        </p>
      </div>
      <div style={{ backgroundImage: `url(${backgroundImage})` }} className="min-h-[1000px] flex flex-col items-center  ">
        <img src={glass1} alt="" className="w-[500px] md:mt-20" />
        <p className="max-w-[750px] font-font1 mt-6 md:mt-10 text-sm md:text-6xl text-center text-white">Kids need to get enough nutrition, and the milk served in schools is key to providing that nutrition.</p>
        <p className="max-w-[750px] font-font2 mt-6 md:my-10 text-sm md:text-xl">Yes and no (but mostly no). School lunches are super important, and should contain 30% of the nutrition and energy a child needs every day. Best case, the food should check all nutrition boxes—but that’s not always happening. Growing children need things such as good-quality (a.k.a. unsaturated) fats, calcium and vitamin D, which means it definitely makes sense to serve something other than water to drink. But the question is, why does it have to be cow’s milk, when all the things we just talked about can also be found in most enriched plant-based drinks?</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src={glass2} alt="" className="w-[800px] mt-6 md:mt-16"/>
        <p className="w-[700px] text-center font-font1 text-sm md:text-6xl mt-6 md:mt-16">But hey, there’s not enough protein in plant-based drinks.</p>
        <p className="max-w-[750px] font-font2 mt-6 md:my-10 text-sm md:text-xl">It’s true that there’s less protein in oat drink compared with cow’s milk, but saying it’s ”not enough” isn’t really true. Because today, almost all of us get our required amount of protein anyway. Really? Yes! The idea that people will become protein deficient if they start eating more plant-based foods is really an old way of thinking. The fact is, a surprising number of plant-based foods contain protein—it’s actually almost impossible not to get enough when eating a varied diet. Even if you’re vegan. And what about all the extra protein people are eating that isn’t needed by their bodies? Well, some of it is converted into carbs, but the rest is broken down and leaves the body as urine. Which in turn can end up in our lakes and oceans, contributing to over-fertilization and algae blooms, since protein contains a lot of nitrogen. So what was best for the average human body in 1921 isn’t necessarily best for one living in 2021. And the same goes for our planet.</p>
      </div>
      <div style={{ backgroundImage: `url(${backgroundImage1})` }} className="min-h-[1000px] flex flex-col items-center">
            <img src={glass3} alt="" className="w-[500px] my-6 md:my-20" />
            <p className="w-[750px] text-center font-font1 text-sm md:text-6xl ">You not only get milk from cows, but you get meat, too. The cows are super useful.</p>
            <p className="w-[750px]  font-font1 text-sm md:text-6xl text-white ">Win-win.</p>
            <p className="max-w-[750px] font-font2 mt-6 md:my-10 text-sm md:text-xl">Well, from a climate perspective (not to mention a cow’s perspective), that win-win is more of a lose-lose. Because even if there is value in making use of the whole cow, the end result is still the same whether you drink milk or eat cheese or meat: Animal-based foods come with a high climate impact. Remember, dairy is an animal-based food just like meat is an animal-based food, even if you tend not to think about it that way. So if you think you are doing the climate a favor by choosing cheese over meat, you’re really not, since everything is connected and milk production generates meat (actually, around 85% of our beef originates from the milk herd). On average, a milk cow is slaughtered after five years, and a bull calf seldom gets to live even a year and a half. With that in mind, you might want to take a look at that win-win from another angle: If humans start consuming less animal-based dairy, there will be fewer dairy cows and ”by-product” calves to slaughter and eat. Besides, dairy and meat are for sure not your only options for getting your body up and running. </p>
            <img src={Faq} alt="" className="w-[200px] my-6 md:mb-16" />
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


      <Footer/>
    </div>
  );
};

export default Milkfacts;
