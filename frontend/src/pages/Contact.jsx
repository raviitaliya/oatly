import React from "react";
import backgroundImage from "../assets/Footer/yellow.jpg";
import hand from "../assets/Footer/hend.svg";
import { useState } from "react";
import Footer from "@/components/Footer";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q6jsivl', 'template_fq4pu3r', form.current, {
        publicKey: 'XoPYQtc6jszO6r66N',
      })
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };



  const options = [
    { id: "ask", label: "Ask Us Anything!", placeholder: "Your Question..." },
    {
      id: "complaint",
      label: "Make a Product Complaint",
      placeholder: "Describe your complaint...",
    },
    {
      id: "press",
      label: "Press Inquiries",
      placeholder: "Press-related inquiry...",
    },
    {
      id: "social",
      label: "Social Media Collabs",
      placeholder: "Collaboration details...",
    },
  ];

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className=" flex flex-col items-center justify-center p-6 bg-cover bg-center bg-no-repeat pb-60 pt-24"
      >
        <div className=" w-full max-w-5xl">
          {/* Heading */}
          <h1 className="text-8xl font-font1 t-md:text-6xl  uppercase text-black mb-4 ">
            CONTACT US
          </h1>

          {/* Description */}
          <p className="max-w-5xl font-font2 text-2xl mb-8 ">
            Welcome to the Internet’s leading page for people who couldn’t find
            oat-related answers to their questions at our{" "}
            <span className="underline">Random Answers</span> page. Whether
            you're an influencer, artist, or journalist with a well-researched
            inquiry, locate the right track for answers below.
          </p>

          {/* Contact Buttons Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Button with Hand Icon */}
          {/* <div className="relative">
            <button className="w-full bg-black text-white font-font2 py-16 px-6 flex items-center space-x-3 ">
              <span className="w-6 h-6 border border-white rounded-full flex items-center justify-center"></span>
              <span className="uppercase font-bold">Ask Us Anything!</span>
            </button> */}
          {/* Hand Emoji */}
          {/* <img
              src={hand}
              alt="Pointing Hand"
              className="absolute -left-28 top-6 w-32 hidden md:block"
            /> */}
        </div>

        {/* Other Buttons */}
        {/* <button className="w-full bg-black text-white font-font2- py-16 px-6 flex items-center space-x-3 ">
            <span className="w-6 h-6 border border-white rounded-full flex items-center justify-center"></span>
            <span className="uppercase font-bold">Make a Product Complaint</span>
          </button>

          <button className="w-full bg-black text-white font-font2 py-16 px-6 flex items-center space-x-3">
            <span className="w-6 h-6 border border-white rounded-full flex items-center justify-center"></span>
            <span className="uppercase font-bold">Press Inquiries</span>
          </button>

          <button className="w-full bg-black text-white font-font2 py-16 px-6 flex items-center space-x-3">
            <span className="w-6 h-6 border border-white rounded-full flex items-center justify-center"></span>
            <span className="uppercase font-bold">Social Media Collabs</span>
          </button> */}
        {!selectedOption ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {options.map((option) => (
              <div key={option.id} className="relative">
                <button
                  onClick={() => setSelectedOption(option.id)}
                  className="w-full bg-black text-white font-font2 py-16 px-6 cursor-hand flex items-center justify-center space-x-3"
                >
                  <span className="w-6 h-6 border border-white rounded-full flex items-center justify-center"></span>
                  <span className="uppercase font-bold">{option.label}</span>
                </button>
                {option.id === "ask" && (
                  <img
                    src={hand}
                    alt="Pointing Hand"
                    className="absolute -left-28 top-6 w-32 hidden md:block cursor-hand "
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="relative w-full flex flex-col items-center">
            
            {/* Back Button */}
            <button
              onClick={() => setSelectedOption(null)}
              className="w-full max-w-5xl bg-black text-white cursor-hand  font-font2 py-16 px-6 flex items-center justify-center space-x-3"
            >
              <span className="w-6 h-6 border border-white rounded-full flex items-center justify-center"></span>
              <span className="uppercase font-bold">
                {options.find((o) => o.id === selectedOption)?.label}
              </span>
              
            </button>
           

            {/* Contact Form Section */}
            <div className="w-full max-w-5xl border border-black p-6 md:p-8 mt-6">
              <h2 className="text-lg font-bold mb-4"> Contact Information</h2>

              <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                {/* Name and Surname */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block  font-semibold text-lg">
                      Name:<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      className="w-full border font-font2 border-black p-2 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-lg">
                      Message:<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                       name="message"
                      className="w-full border border-black p-2 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block font-bold text-lg">
                    Your e-mail address:<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    className="w-full border border-black p-2 focus:outline-none"
                  />
                </div>

                {/* Street Address */}
                <div>
                  <label className="block font-bold text-lg">
                    Street Address:<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="street_address"
                    className="w-full border border-black p-2 focus:outline-none"
                  />
                </div>

                {/* City & Postal Code */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-lg">
                      City:<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-black p-2 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-lg">
                      Postal Code:<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="postal_code"
                      className="w-full border border-black p-2 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex justify-end ">
                  <button className="bg-black text-white py-2 cursor-hand  px-8 font-font1 mt-4 ">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
       
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
