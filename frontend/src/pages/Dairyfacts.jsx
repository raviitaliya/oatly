import React from 'react'
import dairy from '../assets/Footer/dairyfact.jpg'
import s1 from '../assets/Footer/s1.jpg';
import s2 from '../assets/Footer/s2.jpg';   
import s3 from '../assets/Footer/s3.jpg';
import s4 from '../assets/Footer/s4.jpg';
import s5 from '../assets/Footer/s5.jpg';
import s6 from '../assets/Footer/s6.jpg';
import stories from '../assets/Footer/stories.svg';
import Footer from '@/components/Footer';

const Dairyfacts = () => {
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
      <div className='pt-3 md:pt-16'>
        <img src={dairy} alt="" />
      </div>
      <div className='mt-4 md:my-32'>
        <p className='font-font1 text-4xl md:text-9xl  text-center'>Ditch Milk</p>
        <div className='flex justify-center'>
        <p className='font-font2 text-2xl  mt-4 md:mt-10 max-w-[900px] text-center '>Some of our campaigns create more of a debacle than others. One example is the Swedish “Spola Mjölken”, which also had an English equivalent, “Ditch milk,” that ran in England and the Netherlands (without nearly the amount of drama as in Sweden).</p>
      </div>
      </div>
      <div className='flex justify-center items-center mb-10'>
      
      <iframe width="1200" height="600" src="https://www.youtube.com/embed/kDoUAF4f3-k?si=8lkm9lCxVKxjKqrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
  )
}

export default Dairyfacts
