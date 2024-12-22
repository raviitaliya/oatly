import React from "react";
// import {profileGif} from "../assets/gif/discord-avatar.gif";
import { Facebook, Twitter, Instagram, Youtube, Music } from 'lucide-react';
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
  const profileGif = '/src/assets/gif/discord-avatar.gif'; 
  return (
    <nav className="flex items-center justify-between p-3  ">
      <div className="flex items-center">
        <div>
          <div className="grid grid-cols-1 gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="w-14 h-14 rounded-full bg-black flex flex-col items-center justify-center gap-1 hover:bg-gray-800 transition-colors border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                  aria-label="Menu"
                >
                  <div className="w-6 h-1 bg-white rounded-full"></div>
                  <div className="w-6 h-1 bg-white rounded-full"></div>
                  <div className="w-6 h-1 bg-white rounded-full"></div>
                </button>
              </SheetTrigger>
              <SheetContent 
                side="left" 
                className="!w-[90vw] sm:!w-[600px] md:!w-[740px] lg:!w-[840px]"
              >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum enim asperiores laboriosam repellat tenetur nihil qui voluptates ex tempora deleniti sed deserunt, eveniet corporis reiciendis reprehenderit soluta, magnam dicta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, ab omnis rerum debitis sunt consequatur id maiores quaerat. Magnam impedit in soluta fugiat! Praesentium, aut doloremque est exercitationem velit earum.</p>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Right Side - Avatar */}
      <div className="flex items-center w-12 h-12 bg-black rounded-full outline-white mr-2 cursor-hand">
      <img
        src={profileGif}
        alt="Profile"
        className="w-12 h-12 rounded-full object-cover shadow-lg "
      />
      </div>
    </nav>
  );
};

export default Navbar;
