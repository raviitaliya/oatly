import React, {useState} from "react";
import ffa1 from '../assets/Footer/ffa1.jpg';
import ffa2 from '../assets/Footer/ffa2.jpg';
import ffa3 from '../assets/Footer/ffa3.jpg';
import ffa4 from '../assets/Footer/ffa4.jpg';
import ffa5 from '../assets/Footer/ffa5.jpg';
import ffa6 from '../assets/Footer/ffa6.jpg';
import ffa7 from '../assets/Footer/ffa7.jpg';
import ffa8 from '../assets/Footer/ffa8.jpg';
import ffa9 from '../assets/Footer/ffa9.jpg';
import Footer from "@/components/Footer";
import w1 from '../assets/Footer/w1.jpg';
import w2 from '../assets/Footer/w2.jpg';
import w3 from '../assets/Footer/w3.jpg';
import w4 from '../assets/Footer/w4.jpg';
import w5 from '../assets/Footer/w5.jpg';
import w6 from '../assets/Footer/w6.jpg';
import w7 from '../assets/Footer/w7.jpg';



const WisconsinSupperClubSwapsDairy = () => {
  const images = [ffa1,ffa2,ffa3,ffa4,ffa5,ffa6,ffa7,ffa8,ffa9];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const episodes = [
    {
      title: "Grity-Style Jambalaya and Crawfish Étouffée in Louisiana",
      description:
        "A look at authentic daily eats in one of the most flavorful states in the U.S., where we try spicy jambalaya & crawfish étouffée.",
      image: w1,
    },
    {
      title: "Scallops, Vegan Cumin Foam and lots of British Sports Talk!",
      description:
        "British technique, art, and contemporary scallops elevate everything about eating.",
      image: w2,
    },
    {
      title: "Dairy-Free Franconian Bread Dumplings For A Skeptical Milk Lady",
      description:
        "Where a kitchen master reuses his resources toward dumpling recipes.",
      image: w3,
    },
    {
      title: "Chef Ararvi's Spinach Pie Goes Dairy Free",
      description:
        "A famous cooking twist from chef Ararvi, who removes dairy from his recipe, but keeps the rich, fresh taste.",
      image: w4,
    },
    {
      title: "Indian Family Recipes, Minus Dairy Plus A Garage",
      description:
        "A typical day in the kitchen of home chefs who improvise recipes in a garage space.",
      image: w5,
    },
    {
      title: "Vic's Italian Cream Puffs Without The Cream",
      description:
        "An elegant mix of old and new brings the flavors of an Italian classic to the modern dairy-free table.",
      image: w6,
    },
    {
      title: "Biscuits, BodySlams & Dairy-Free Stroganoff!",
      description:
        "Big eats, strong wrestlers, and even stronger creamless stroganoff mix together for an energetic dish.",
      image: w7,
    },
  ];
  return (
    <div className="bg-black text-white">
      <div className="">
        <p className="font-font1 text-4xl md:text-7xl  text-center pt-4 md:pt-20">Oatly Grasshoppers and Crème <br/>Brûlées in America’s Dairy State</p>
        <div className="flex justify-center">
        <p className="font-font2 text-4xl md:text-2xl  text-center max-w-[900px] pt-4 md:py-10">
          We traveled to Wisconsin to swap dairy with Oatly at the renowned Duck
          Inn Supper Club. And we made it out alive.
        </p>
        </div>
      </div>
      <div className="flex justify-center">
        <iframe
          width="1100"
          height="600"
          src="https://www.youtube.com/embed/ghvMhQJ4TSM?si=8Yny-D5J5CriJhBv"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex justify-center">
        <p className="font-font1 text-4xl md:text-5xl py-4 md:py-12" >
          We thought it would be provocative to bring Oatly <br/> to Wisconsin -
          America’s Dairy State - and ask<br/> famed restaurant The Duck Inn to use
          our<br/> products in its most popular dishes.
        </p>
      </div>

      <div className="text-white  flex items-center justify-center px-4 md:px-8">
        <div className="container mx-auto  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 text-lg md:text-xl  font-font2">
                The pitch to the Oatly execs was, “Dairy people trying non-dairy
                products. Chaos ensues.” Well, we went … but turns out there was
                no chaos. Just really kind people telling us how great our
                products are and asking us which channel our television show
                would air on.
              </p>
              <p className="mt-4 text-gray-300 text-lg md:text-xl font-font2">
                Rather than cancel the whole experiment due to an absence of
                confrontation, we forged ahead.
              </p>
              <p className="mt-4 text-gray-300 text-lg md:text-xl font-font2">
                The Duck Inn, a charming establishment in Delavan, Wisconsin, is
                technically considered a supper club. For anyone outside the
                American Midwest, this descriptor likely means nothing. But for
                you history buffs out there - and yes, the overlap between
                “history buffs” and “Oatly enthusiasts” exists - the term
                “supper club” dates back to Prohibition, when local bars needed
                to reposition themselves as restaurants. Today these haunts will
                typically have their own distinct decor, traditional Midwestern
                cuisine, and patrons who drink brandy old-fashioneds for sport.
              </p>
            </div>

            <div>
              <p className="text-gray-300 text-lg md:text-xl  font-font2">
                This was the scene we walked into on a very special weekend at
                The Duck Inn, when we swapped dairy with Oatly in five distinct
                items: a grasshopper (this is a bizarre concoction of ice cream
                and green liqueur), crème brûlée, clam chowder, vegetable pasta,
                and salmon with a dill sauce.
              </p>
              <p className="mt-4 text-gray-300 text-ld md:text-xl font-font2">
                As has been the case with all our swaps, this particular
                experiment was wildly successful. Upwards of 15 people told us
                the dishes were “very good,” which they delivered in such
                understated tones that we imagine half of them were lying. But
                we’re not here to poke holes in the data. We’re here to
                celebrate a journey deep into America’s dairy capital, where we
                swapped dairy with Oatly and absolutely no chaos ensued.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative w-full md:w-[1700px] mx-auto overflow-hidden md:mt-[50px]">
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
                className="w-full flex-shrink-0  h-[800px] "
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
      
      <div className="bg-black text-white min-h-screen flex flex-col items-center p-10">
        <p className="font-font1 text-4xl md:text-6xl my-6 md:my-20">Binge all episodes!</p>
      <div className="max-w-6xl w-full grid gap-10 ">
        {/* First Section */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src={w1}
            alt="Food 1"
            className="w-full h-auto  object-cover"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold leading-tight font-font1">
              Oatly-Style Jambalaya and Crawfish Fettuccine in Louisiana
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              While replacing dairy with Oatly on the menu at Lee’s Diner, we learned that
              if we tell patrons, “It’s not hummus,” they might be more willing to try a dish.
              The more you know…
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="grid md:grid-cols-2 gap-6 items-center md:flex-row-reverse">
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold leading-tight font-font1">
              Scallops, Vegan Cumin Foam and Lots of British Sports Talk!
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              Bexley bricklayer and un-professionally trained cook, Joey, tries to cook seared
              scallops without anything going wrong.
            </p>
            
          </div>
          <img
            src={w2}
            alt="Food 2"
            className="w-full h-auto  object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src={w3}
            alt="Food 1"
            className="w-full h-auto  object-cover"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold leading-tight font-font1">
            Dairy-Free Franconian Bread Dumplings For A Skeptical Milk Lady
           
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
            Watch Sebastian attempt to take over his mother’s kitchen and her traditional Franconian bread dumpling recipe.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center md:flex-row-reverse">
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold leading-tight font-font1">
            Chef Ararat’s Spinach Pie Goes Dairy Free
            
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
            A home-cooked Armenian meal from Chef Ararat, served on the neighborhood sidewalk, with yogurt made from Full Fat Oatly, but not Oatgurt, for some reason
            </p>
            
          </div>
          <img
            src={w4}
            alt="Food 2"
            className="w-full h-auto  object-cover"
          />
        </div>

        
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src={w5}
            alt="Food 1"
            className="w-full h-auto  object-cover"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold leading-tight font-font1">
            Indian Family Recipes, Minus Dairy Plus A Garage
           
           
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
            A typical day in the life of the Patel-Bhowmick family, except with a bunch of cameras and a film crew as they cook dum aloo using Oatgurt in place of yogurt.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center md:flex-row-reverse">
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold leading-tight font-font1">
            Vic’s Italian Cream Puffs Without The Cream

            
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
            Vic regales us with tales of his borough as he plans his cream puffs with Whippable Creamy Oat, a twist on a recipe he once got into fisticuffs to defend.
            </p>
            
          </div>
          <img
            src={w6}
            alt="Food 2"
            className="w-full h-auto  object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <img
            src={w7}
            alt="Food 1"
            className="w-full h-auto  object-cover"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold leading-tight font-font1">
            Biceps, Bodyslams & Dairy-Free Stroganoff!
          
           
           
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
            Big muscles, tiny carton of Oatly Creamy Oat, and all the action you can pack into a gym—we’re cooking salmon stroganoff with SuperBeast and Sumyra. </p>
          </div>
        </div>


      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default WisconsinSupperClubSwapsDairy;
