import React from "react";
import background from "../assets/Footer/backgroundd.jpg";
import faqsheading from "../assets/Footer/faqsheading.svg";
import { useState } from "react";
import Footer from "@/components/Footer";
import pin from "../assets/Footer/pin.svg";
import faq from "../assets/Footer/faq.svg";
import stuff from "../assets/Footer/stuff.jpg";
import things from "../assets/Footer/things.jpg";
import oatlywho from "../assets/Footer/oatlywho.jpg";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openIndexx, setOpenIndexx] = useState(null);
  const [openIndexxx, setOpenIndexxx] = useState(null);

  const faqs = [
    {
      question: "Oat drink? Is that even a thing?",
      answer:
        "It is! And more specifically, it’s a 100% plant-based drink that can be used in the same way as cow's milk (if you don’t know how to use cow´s milk, ask a friend of a friend or something). Have it for breakfast together with cereal or porridge, pour it in your coffee, use it when making pancakes or a smoothie or other food stuff in your kitchen, or just drink it from a glass (or directly from the package if you’re home alone). ",
    },
    {
      question: "I need to come in contact with you Oatly, like, right now.",
      answer:
        "That’s awesome, we want to hear from you, like, right now! Already we’re wondering if you want to talk about why we can’t call it Oat milk in Europe, or if you have a health-related thought or just want to share your views on sustainable living in the modern world. Maybe you want to file a complaint or are looking to collaborate? It could be anything and we won’t know until you contact us.",
    },
  ];

  const faqss = [
    {
      question: "Oat drink? Is that even a thing?",
      answer:
        "It is! And more specifically, it’s a 100% plant-based drink that can be used in the same way as cow's milk (if you don’t know how to use cow´s milk, ask a friend of a friend or something). Have it for breakfast together with cereal or porridge, pour it in your coffee, use it when making pancakes or a smoothie or other food stuff in your kitchen, or just drink it from a glass (or directly from the package if you’re home alone). ",
    },
    {
      question: "I need to come in contact with you Oatly, like, right now.",
      answer:
        "That’s awesome, we want to hear from you, like, right now! Already we’re wondering if you want to talk about why we can’t call it Oat milk in Europe, or if you have a health-related thought or just want to share your views on sustainable living in the modern world. Maybe you want to file a complaint or are looking to collaborate? It could be anything and we won’t know until you contact us.",
    },
    {
      question:
        "I have a question about an Oatly product, ingredient or other Oatly related thing. ",
      answer:
        "Amazing, because we have answers about Oatly products, ingredients and other Oatly related things at OatlyFans. If you can’t find what you’re looking for, just write your question there and it will be answered.",
    },
    {
      question: "Where can I find Oatly?",
      answer:
        "Oatly products can be found in almost any grocery store in many parts of the world, all the best cafés serve coffee with one or all of our Oatly Barista Editions and any restaurant with self-respect and care for its customers and the planet, use our creamy oats and other cooking products in their creations. Ask your favorite store to carry your favorite Oatly product, if you can’t already find it there, or use our Oatfinder to locate a café serving premium coffee with oats.",
    },
    {
      question: "I hate Oatly but I don’t know how to put it in words.",
      answer:
        "We appreciate you for having strong feelings about us and being transparent about it, you also sound like the person our digital media specialist was referring to as the “target demographic” for this site: fckoatly.com. Where we, like you, are transparent. Mainly about decisions we’ve made that have upset people in the past and present..",
    },
  ];

  const faqsss = [
    {
      question: "Are your products vegan?",
      answer:
        "You bet! Our products are plant-based and vegan friendly which makes them suitable for vegans, non-vegans, never heard of vegans or thinking of becoming vegans and anyone in between. ",
    },
    {
      question: "How do you calculate the CO2e numbers on your products?",
      answer:
        "We gather data on greenhouse gas emissions from grower to grocer and put it through a platform called CarbonCloud that uses 20 years of research in the food-system field to crunch the numbers and get the final carbon dioxide equivalent (CO2e) number. When the counting and analyzing are done, an impartial verifier professional double-checks the calculations. Basically, our numbers are scrutinized by people who really know what they’re doing. Read all about it here.",
    },
    {
      question: "Are Oatly products organic? ",
      answer:
        "Not all of them. Actually, most of them are not. But we do have organic versions of some of our most popular products, such as our oat drinks and cooking creams. And concerning why we don’t offer more organic products? Well, there are different reasons — one being that most markets don’t allow enrichment of organic products.",
    },
    {
      question: "Does Oat Drink go bad?",
      answer:
        "Everything goes bad eventually, just look at your favorite sitcoms from back in the day. And just like everything, oat drink can go bad if left out for too long. If you want to know how long it takes or how to know if it’s still good even after the best-before date has passed, follow this link.",
    },
  ];

  const infoItems = [
    {
      image: things,
      title: "THINGS WE DO",
      description:
        "What are we doing, really? Apart from oats, that is. Come and look for yourself.",
    },
    {
      image: stuff,
      title: "STUFF WE MAKE",
      description:
        "Check out all our products—if you ask us, they are pretty amazing.",
    },
    {
      image: oatlywho,
      title: "OATLY WHO?",
      description:
        "Wondering what makes Oatly Oatly and not just another company?",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setOpenIndexx(null);
    setOpenIndexxx(null);
  };
  const toggleFAQ1 = (index) => {
    setOpenIndexx(openIndexx === index ? null : index);
    setOpenIndex(null);
    setOpenIndexxx(null);
  };
  const toggleFAQ2 = (index) => {
    setOpenIndexxx(openIndexxx === index ? null : index);
    setOpenIndex(null);
    setOpenIndexx(null);
  };
  
  

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className=" py-20"
      >
        <div className="bg-white mx-8">
          <div className="flex flex-col items-center h-auto mb-12 pt-36 ">
            <div className=" bottom-0  ">
              <img
                src={faqsheading}
                alt="Things we do"
                className="w-full h-auto object-cover"
              />
              <div className="flex flex-col items-center">
                <p className="mt-14 text-lg md:text-2xl max-w-3xl font-font2 text-center">
                  Good to have you here! We want to hear everything you have to
                  say and answer all your questions.
                </p>

                <button className="mt-14 bg-black text-white cursor-hand  py-3 px-6 text-lg font-bold font-font1 tracking-wider">
                  ASK YOUR QUESTION!
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4 container mx-auto">
            <div className="relative">
              <p className="font-font1 text-2xl text-[#1E90FF] font-bold tracking-wider pb-2">
                Pinned Questions
              </p>
              <div className="absolute left-0 w-full border-b-2 border-dashed border-black"></div>
            </div>

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b-2 border-dashed border-black pb-7"
              >
               
                <button
                  className="w-full text-left text-xl font-semibold cursor-hand  font-font2 flex items-center py-3"
                  onClick={() => toggleFAQ(index)}
                >
                  
                  <img src={pin} alt="Question Icon" className="w-6 h-6 mr-3" />

                  
                  <span className="flex-1">{faq.question}</span>

                  <span className="text-4xl font-font1">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <p className="mt-7 text-xl font-font2 ">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
          <div>
            <div className="flex  justify-center pt-10 ">
              <div className=" bottom-0  ">
                <img src={faq} alt="Things we do" className="w-36 h-36" />
              </div>
            </div>
          </div>

          <div className="mt-3 space-y-4 container mx-auto">
            <div className="relative">
              <p className="font-font1 text-2xl  font-bold tracking-wider pb-2">
                About Oatly
              </p>
              <div className="absolute left-0 w-full border-b-2 border-dashed border-black"></div>
            </div>

            {faqss.map((faq, index) => (
              <div
                key={index}
                className="border-b-2 border-dashed border-black pb-7"
              >
                <button
                  className="w-full text-left text-xl cursor-hand  font-semibold font-font2 flex items-center py-3"
                  onClick={() => toggleFAQ1(index)}
                >
                  <img src={pin} alt="Question Icon" className="w-6 h-6 mr-3" />

                  <span className="flex-1">{faq.question}</span>

                  <span className="text-4xl font-font1">
                    {openIndexx === index ? "−" : "+"}
                  </span>
                </button>

                {openIndexx === index && (
                  <p className="mt-7 text-xl font-font2 ">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          <div>
            <div className="flex  justify-center pt-10 ">
              <div className=" bottom-0  ">
                <img src={faq} alt="Things we do" className="w-36 h-36" />
              </div>
            </div>
          </div>

          <div className="mt-3 space-y-4 container mx-auto">
            <div className="relative">
              <p className="font-font1 text-2xl  font-bold tracking-wider pb-2">
                Our Products
              </p>
              <div className="absolute left-0 w-full border-b-2 border-dashed border-black"></div>
            </div>

            {faqsss.map((faq, index) => (
              <div
                key={index}
                className="border-b-2 border-dashed border-black pb-7"
              >
                <button
                  className="w-full text-left text-xl font-semibold cursor-hand  font-font2 flex items-center py-3"
                  onClick={() => toggleFAQ2(index)}
                >
                  <img src={pin} alt="Question Icon" className="w-6 h-6 mr-3" />

                  <span className="flex-1">{faq.question}</span>

                  <span className="text-4xl font-font1">
                    {openIndexxx === index ? "−" : "+"}
                  </span>
                </button>
                {openIndexxx === index && (
                  <p className="mt-7 text-xl font-font2 ">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          <div>
            <div className="flex  justify-center pt-10 ">
              <div className=" bottom-0  ">
                <img src={faq} alt="Things we do" className="w-36 h-36" />
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-10 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {infoItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-32 md:w-72 md:h-40 object-contain"
                  />
                  <h3 className="mt-4 text-3xl  font-font1 tracking-wider">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-lg font-medium font-font2 max-w-sm">
                    {item.description}
                  </p>
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

export default Faqs;
