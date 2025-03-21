import React,{useState} from 'react'
import backgroundImage from "../assets/Footer/f1.jpg";
import img1 from "../assets/Footer/img1.jpg";
import img2 from "../assets/Footer/img2.jpg";
import img3 from "../assets/Footer/img3.jpg";
import img4 from "../assets/Footer/img4.jpg";
import img5 from "../assets/Footer/img5.jpg";
import img6 from "../assets/Footer/img6.jpg";
import img7 from "../assets/Footer/img7.jpg";
import img8 from "../assets/Footer/img8.jpg";
import imggg from "../assets/Footer/imggg.svg";
import img9 from "../assets/Footer/img9.jpg";
import img10 from "../assets/Footer/img10.jpg";
import img11 from "../assets/Footer/img11.jpg";
import img12 from "../assets/Footer/img12.jpg";
import img13 from "../assets/Footer/img13.jpg";
import Faq from "../assets/Footer/Faq.svg";
import s1 from "../assets/Footer/s1.jpg";
import s2 from "../assets/Footer/s2.jpg";
import s3 from "../assets/Footer/s3.jpg";
import s4 from "../assets/Footer/s4.jpg";
import s5 from "../assets/Footer/s5.jpg";
import s6 from "../assets/Footer/s6.jpg";
import stories from "../assets/Footer/stories.svg";
import Footer from "../components/Footer";
import f2 from '../assets/Footer/f2.jpg';
import f3 from '../assets/Footer/f3.jpg';
import f4 from '../assets/Footer/f4.jpg';
import f5 from '../assets/Footer/f5.jpg';
import f6 from '../assets/Footer/f6.jpg';
import f7 from '../assets/Footer/f7.jpg';
import f8 from '../assets/Footer/f8.jpg';
import f9 from '../assets/Footer/f9.jpg';
import f10 from '../assets/Footer/f10.jpg';
import f11 from '../assets/Footer/f11.jpg';
import f12 from '../assets/Footer/f12.jpg';
import f13 from '../assets/Footer/f13.jpg';
import f14 from '../assets/Footer/f14.jpg';
const images = [f2,f3,f4,f5,f6,f7,f8];
const imagess = [img5, img6, img7, img8];
const imagesss = [f9,f10,f11,f12,f13,f14];

const FarmerShakingFarmers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
      const [currentIndexx, setCurrentIndexx] = useState(0);
      const [currentIndexxx, setCurrentIndexxx] = useState(0);
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
    
      const nextSlidee = () => {
        setCurrentIndexx((prevIndex) => (prevIndex + 1) % imagess.length);
      };
    
      const prevSlidee = () => {
        setCurrentIndexx((prevIndex) =>
          prevIndex === 0 ? imagess.length - 1 : prevIndex - 1
        );
      };
    
      const nextSlideee = () => {
        setCurrentIndexxx((prevIndex) => (prevIndex + 1) % imagesss.length);
      };
    
      const prevSlideee = () => {
        setCurrentIndexxx((prevIndex) =>
          prevIndex === 0 ? imagesss.length - 1 : prevIndex - 1
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
  return (
    <div>
       <div>
      <div className="relative w-full h-screen ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`, // Replace with your image path
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 "></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-9xl font-font1 md:w-[700px] font-bold uppercase tracking-tight">
          FARMER SEEKING FARMERS
          </h1>
          <p className="mt-4 text-sm md:text-2xl font-mono max-w-2xl">
          Nine farmers. One researcher. One planet. How can we feed more people using the same earth?
          </p>
        </div>
      </div>
      <div>
        <div className="max-w-4xl mx-auto px-4  py-12">
          {/* Intro Text */}
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-font2 ">
            There’s going to be a point in our time together—and maybe that
            point is now—where you ask, “Why am I reading about regenerative
            agriculture on an oat drink company website?” This is a fair and
            understandable reaction. But in reality, this article is much more
            than that. It’s a pretty thrilling read (yes, we find oats
            thrilling!) where seemingly disconnected storylines—like the story
            of a third-generation Minnesota farmer, some Oatly employees, a
            group of impressive agricultural organizations, and oats—come
            together to upend the American agricultural system and Oatly’s
            supply chain, all for the betterment of the climate. Or at least,
            that’s the hope.
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-font1  text-black text-center  my-12">
          "Globally, we have already reached the limit on the amount of land that should be used for cultivation and food production"
          </h1>

          {/* Body Text */}
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-font2">
            It started in 2018. Sara Fletcher, the communications and public
            affairs director at Oatly, was thinking about the question she often
            got from North American consumers, “Where does Oatly source its oats
            from?” Krista Kane, the director of coffee channel development, was
            pondering the same question. The answer revealed that none of our
            oats were coming from the United States, but rather from Canada.
            Most people would have simply said, “Cool. Canada is cool. They’re
            friendly over there.” But Sara and Krista asked why.
          </p>

          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-font2 mt-4">
            Turns out there’s a reason for this. It’s not that we had some weird
            falling out with American-grown oats. It’s a product of the American
            farming system.
          </p>
        </div>
      </div>
      <div>
        <div className="relative w-full  mx-auto overflow-hidden md:mt-[50px]">
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
                className="w-full flex-shrink-0  h-[1000px] "
              />
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
          >
            ❯
          </button>
        </div>
      </div>
      <div>
        <div className="max-w-4xl mx-auto px-4  py-12">
          {/* Intro Text */}
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-font2 ">
            Over the past half-century, American farms kept planting more and
            more corn and soy because that’s where the money was. “I’m from
            Ohio,” says Sara. “You look to one side during the summer, and you
            see corn. Look to the other side, you see soy. The entirety of the
            Midwest is mostly corn and soy.” That’s because these crops can be
            grown in huge quantities, shipped all over the world, and used in
            everything from biofuels to plastics to animal feed. But there’s a
            cost to this approach. Instead of spending the next three pages
            outlining this cost, let’s distill it into a bulleted list of
            ominous environmental realities:
          </p>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-font2 md:pt-[30px] ">
            There is a solution. Research shows that adding a grain like oats
            (along with cover crops) can actually improve the land and reduce
            disastrous runoff. The problem is that farmers have no financial
            incentive to do so, given the market for such crops is so weak. This
            is when Sara and Krista raised the big “What if?” question. “What
            if’s” usually get brought up in company meetings and then fizzle out
            over endless email exchanges. This “what if” did not: What if we
            told farmers in the Corn Belt that if they worked oats into their
            crop rotation, we would buy them? And over time, we’d also collect
            data about the effects of growing those oats on soil health, water
            quality, and emissions.
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-8xl font-font1  text-black text-center  my-12">
            The Iowa Pilot Project is Born
          </h1>

          {/* Body Text */}
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-font2">
            There were farmers already working to break the corn-and-soy cycle.
            Ben Dwire was one of them. He’s a third generation farmer in Arco,
            Minnesota. “The idea of soil health never even came up in school.
            I’d never really heard of it before. But you start reading about it,
            and ask, ‘why are we only raising one crop here?’” Crop rotation and
            regenerative agriculture, though a rare practice in Ben’s farming
            community, is not a new idea. “I’ve been looking back at some of the
            literature from the 1930s and 1940s. This was a pretty standard
            practice back then. These are things my grandpa and great-grandpa
            all did.”
          </p>
        </div>
      </div>
      <div>
        <div className="relative w-full  mx-auto overflow-hidden md:mt-[50px]">
          {/* Images Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndexx * 100}%)` }}
          >
            {imagess.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className="w-full flex-shrink-0  h-[1000px] "
              />
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlidee}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlidee}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
          >
            ❯
          </button>
        </div>
      </div>
      <div>
        <div className="max-w-4xl mx-auto px-4  py-12">
          {/* Intro Text */}
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-font2 ">
            In addition to farmers like Ben, there were also organizations like
            Practical Farmers of Iowa and Sustainable Food Lab who were focusing
            on adding grains for animal feed into crop cycles. We called them up
            and had a wildly exciting conversation about what a partnership
            could mean for their respective organizations, farmers, Oatly’s
            supply chain, and more broadly, agriculture in the U.S. The abridged
            version of this call was as follows:
          </p>
          <img src={imggg} alt="" className="mt-6 md:my-[80px]" />

          {/* Body Text */}
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-font2">
            We started the pilot with four farmers who wanted to move away from
            solely planting corn, including Ben. Over the course of the year, we
            facilitated conversations between them, collected data and tracked
            progress, and even flew out to Arco to check on the oats and take
            some of the beautiful photos you see here. “You start going to soil
            health meetings to learn about this stuff and seeing the same group
            of farmers, and you get to be friends,” said Ben. “I didn’t have
            this whole network when we started. I’m glad we have it now.”
          </p>
        </div>
      </div>
      <div>
        <div className="relative w-full  mx-auto overflow-hidden md:mt-[50px]">
          {/* Images Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndexxx * 100}%)` }}
          >
            {imagesss.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className="w-full flex-shrink-0  h-[1000px] "
              />
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlideee}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlideee}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
          >
            ❯
          </button>
        </div>
      </div>
      <div>
        <div className="max-w-4xl mx-auto px-4  py-12">
          {/* Intro Text */}
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-font2 ">
            Each year, we’re adding a new crop of farmers to the group (that’s a
            horrible farming pun and we should be fired). Last year we had 17
            farmers who each started a three-year growing cycle: oats and a
            cover crop, corn, then soy. At the end of each cycle, we’ll receive
            data about whether that cycle is improving the health of those
            farms. We’re not great at math, but if you are, you know that we
            only have one set of data (and one harvest of oats) so far. Julie
            Kunen, director of sustainability for Oatly North America,
            representing the cautious optimist in this article, wants to be
            clear that it’s a small data set, and we have much more to collect.
            “That said, it does seem to be trending in the direction we would
            want it to, in terms of the benefits of integrating oats.”
          </p>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-font2 md:pt-[30px] ">
            But for now, or until Julie reads this latest draft, let’s throw
            cautious optimism to the wind. This program could be a profound
            gamechanger for everyone involved: farmers, Oatly, oat drinkers, and
            the Midwest’s long abused soil. Our farmers get a new source of
            income and a network of like-minded peers. Over time, we see
            healthier soil. And finally, Oatly consumers get a product that’s
            good for the earth.
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-8xl font-font1  text-black text-center  my-12">
            Where do we go from here?
          </h1>

          {/* Body Text */}
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-font2">
            Everything we do next is fueled by an ambitious goal. By 2029, we
            want 100 percent of our supply of critical raw materials like oats
            to be sourced in a regenerative way. In order to do that, we’re
            going to aggressively expand initiatives like our Iowa Pilot
            Program. More farmers, more partnerships, more data, more oats,
            more, more, more. (Oh man, we sound like greedy oat capitalists!)
          </p>

          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-font2">
            “We're in the process right now of moving from a zero-sum, ‘let's
            not do damage’ sustainability concept to the new-ish concept of
            regenerative agriculture, which is building it back better,” says
            Julie. “Improve soil health, improve agriculture, improve farmer
            livelihoods.”
          </p>
        </div>
      </div>
      <div>
        <img src={img13} alt="" />
      </div>
      <div className="flex justify-center items-center">
        <img src={Faq} alt="" className="w-[150px] my-9" />
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
    </div>
  )
}

export default FarmerShakingFarmers
