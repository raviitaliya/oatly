import React from "react";
// import {profileGif} from "../assets/gif/discord-avatar.gif";
import { Facebook, Twitter, Instagram, Youtube, Music } from "lucide-react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
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
                <div className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12 overflow-y-auto ml-[-50px]">
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
                            className="block font-mono text-gray-400 hover:text-white transition-colors"
                          >
                            FAQ
                          </Link>
                          <Link
                            to="/careers"
                            className="block font-mono text-gray-400 hover:text-white transition-colors"
                          >
                            Careers
                          </Link>
                          <Link
                            to="/contact"
                            className="block font-mono text-gray-400 hover:text-white transition-colors"
                          >
                            Contact
                          </Link>
                          <Link
                            to="/privacy-policy"
                            className="block font-mono text-gray-400 hover:text-white transition-colors"
                          >
                            Privacy Policy
                          </Link>
                          <Link
                            to="/cookie-consent"
                            className="block font-mono text-gray-400 hover:text-white transition-colors"
                          >
                            Cookie consent
                          </Link>
                        </div>
                        {/* Right Column */}
                        <div className="space-y-3">
                          <Link
                            to="/sustainability"
                            className="block font-mono text-gray-400 hover:text-white transition-colors"
                          >
                            Sustainability
                          </Link>
                          <Link
                            to="/investors"
                            className="block font-mono text-gray-400 hover:text-white transition-colors"
                          >
                            For Investors
                          </Link>
                          <Link
                            to="/accessibility"
                            className="block font-mono text-gray-400 hover:text-white transition-colors"
                          >
                            Accessibility
                          </Link>
                          <Link
                            to="/cookie-policy"
                            className="block font-mono text-gray-400 hover:text-white transition-colors"
                          >
                            Cookie Policy
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Social Section */}
                    <div>
                      <h2 className="text-base md:text-lg font-mono mb-6">
                        BE SOCIAL
                      </h2>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                        >
                          <Facebook size={20} />
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                        >
                          <Twitter size={20} />
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                        >
                          <Instagram size={20} />
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                        >
                          <Youtube size={20} />
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                        >
                          <Music size={20} />
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

      {/* Right Side - Avatar */}
      <div className="flex items-center w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full outline-white mr-2 cursor-hand">
        <img
          src={profileGif}
          alt="Profile"
          className="w-12 h-12 sm:w-12 sm:h-12 rounded-full object-cover shadow-lg"
        />
      </div>
    </nav>
  );
};

export default Navbar;
