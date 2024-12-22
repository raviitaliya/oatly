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
    <nav className="flex items-center justify-between p-2 sm:p-3 w-full">
      <div className="flex items-center">
        <div>
          <div className="grid grid-cols-1 gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer outline-white bg-black flex flex-col items-center justify-center gap-1 hover:bg-gray-800 transition-colors border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.15)]"
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
                <p className="font-font2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum enim asperiores laboriosam repellat tenetur nihil qui voluptates ex tempora deleniti sed deserunt, eveniet corporis reiciendis reprehenderit soluta, magnam dicta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, ab omnis rerum debitis sunt consequatur id maiores quaerat. Magnam impedit in soluta fugiat! Praesentium, aut doloremque est exercitationem velit earum.</p>

              
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Right Side - Avatar */}
      <div className="flex items-center w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full outline-white mr-2 cursor-pointer">
        <img
          src={profileGif}
          alt="Profile"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-lg"
        />
      </div>
    </nav>
  );
};

export default Navbar;
