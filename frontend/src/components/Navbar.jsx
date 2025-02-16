// import {profileGif} from "../assets/gif/discord-avatar.gif";
import { useState } from "react"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdMusicNote } from "react-icons/md";
import SignIn from "@/auth/SignIn";
import SignUp from "@/auth/SignUp";

import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

const Navbar = () => {

  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);




  const profileGif = "/src/assets/gif/discord-avatar.gif";
  return (
    <nav className="flex items-center fixed justify-between p-2 sm:p-3 w-full">
      <div className="flex items-center">
        <div>
          <div className="grid grid-cols-1 gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="w-12 h-12 sm:w-12 sm:h-12 rounded-full cursor-hand outline-white bg-black flex flex-col items-center justify-center gap-1 hover:bg-gray-800 transition-colors border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                  aria-label="Menu"
                >
                  <div className="w-5 sm:w-6 h-0.5 sm:h-1 bg-white rounded-full"></div>
                  <div className="w-5 sm:w-6 h-0.5 sm:h-1 bg-white rounded-full"></div>
                  <div className="w-5 sm:w-6 h-0.5 sm:h-1 bg-white rounded-full"></div>
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="!w-full sm:!w-full md:!w-[740px] lg:!w-[950px] bg-black border-none text-white p-4 sm:p-6"
              >
                <div className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12 overflow-y-auto">
                  {/* Main Navigation */}
                  <nav className="mb-20 md:mb-32">
                    <ul className="flex flex-col gap-3 md:gap-4 mt-20">
                      <li>
                        <Link
                          to="/"
                          className="text-5xl md:text-7xl font-extrabold font-font1 hover:text-gray-400 transition-colors tracking-tight block"
                        >
                          HOME
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/our-products"
                          className="text-5xl md:text-7xl font-extrabold font-font1 hover:text-gray-400 transition-colors tracking-tight block"
                        >
                          OUR PRODUCTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/things-we-do"
                          className="text-5xl md:text-7xl font-extrabold font-font1 hover:text-gray-400 transition-colors tracking-tight block"
                        >
                          THINGS WE DO
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/oatly-who"
                          className="text-5xl md:text-7xl font-extrabold font-font1 hover:text-gray-400 transition-colors tracking-tight block"
                        >
                          OATLY WHO?
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  {/* Footer Section */}
                  <footer className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24  ">
                    {/* Dig Deeper Section */}
                    <div>
                      <h2 className="text-base md:text-lg font-font2 mb-6">
                        DIG DEEPER
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-3">
                          <Link
                            to="/faq"
                            className="block font-font2  text-gray-400 hover:text-white transition-colors"
                          >
                            FAQ
                          </Link>
                          <Link
                            to="/careers"
                            className="block font-font2 text-gray-400 hover:text-white transition-colors"
                          >
                            Careers
                          </Link>
                          <Link
                            to="/contact"
                            className="block font-font2 text-gray-400 hover:text-white transition-colors"
                          >
                            Contact
                          </Link>
                          <Link
                            to="/privacy-policy"
                            className="block font-font2 text-gray-400 hover:text-white transition-colors"
                          >
                            Privacy Policy
                          </Link>
                          <Link
                            to="/cookie-consent"
                            className="block font-font2 text-gray-400 hover:text-white transition-colors"
                          >
                            Cookie consent
                          </Link>
                        </div>
                        {/* Right Column */}
                        <div className="space-y-3">
                          <Link
                            to="/sustainability"
                            className="block font-font2 text-gray-400 hover:text-white transition-colors"
                          >
                            Sustainability
                          </Link>
                          <Link
                            to="/investors"
                            className="block font-font2 text-gray-400 hover:text-white transition-colors"
                          >
                            For Investors
                          </Link>
                          <Link
                            to="/accessibility"
                            className="block font-font2 text-gray-400 hover:text-white transition-colors"
                          >
                            Accessibility
                          </Link>
                          <Link
                            to="/cookie-policy"
                            className="block font-font2 text-gray-400 hover:text-white transition-colors"
                          >
                            Cookie Policy
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Social Section */}
                    <div>
                      <h2 className="text-base md:text-lg font-font2 mb-6">
                        BE SOCIAL
                      </h2>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="w-12 h-12 bg-[#888] rounded-[20px] flex items-center justify-center hover:bg-white -rotate-6 transition-colors"
                        >
                          <FaFacebookF style={{ color: "black" }} size={30} />
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 bg-[#888] rounded-[20px] flex items-center justify-center hover:bg-white -rotate-6 transition-colors"
                        >
                          <FaTwitter style={{ color: "black" }} size={30} />
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 bg-[#888] rounded-[20px] flex items-center justify-center hover:bg-white -rotate-6 transition-colors"
                        >
                          <FaInstagram style={{ color: "black" }} size={30} />
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 bg-[#888] rounded-[20px] flex items-center justify-center hover:bg-white  -rotate-6 transition-colors"
                        >
                          <FaYoutube style={{ color: "black" }} size={30} />
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 bg-[#888] rounded-[20px] flex items-center justify-center hover:bg-white -rotate-6 transition-colors"
                        >
                          <MdMusicNote style={{ color: "black" }} size={30} />
                        </a>
                      </div>
                    </div>
                  </footer>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-8">
        <div className="flex gap-4 font-font1">
          <div >
            <Button onClick={() => setShowSignIn(!showSignIn)}>
              sign up
            </Button>
          </div>
          {showSignIn && <SignUp />}

          <div onClick={() => setShowSignUp(!showSignUp)}>
            <Button>
              log in
            </Button>
          </div>
        </div>
            {showSignUp && <SignIn />}

        <div className="flex items-center sm:w-12 sm:h-12 bg-black rounded-full outline-white mr-2 cursor-hand">
          <img
            src={profileGif}
            alt="Profile"
            className="w-12 h-12  rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
