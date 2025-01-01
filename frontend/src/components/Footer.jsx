import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdMusicNote } from "react-icons/md";
import { Link } from "react-router-dom";
import footerlogo from "../assets/Footer/footerlogo.jpg";

function Footer() {
  return (
    <div className="bg-black p-20 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between ">
        <div>
          <img src={footerlogo} alt="oatlylogo" className="h-[150px]" />
        </div>

        <div className=" p-6">
          <div className="max-w-4xl mx-auto pb-10">
            <h2 className="text-base md:text-lg font-font2 mb-6 text-white">
              DIG DEEPER
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-2">
              <div className="space-y-2">
                <Link
                  to="/faq"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  to="/investors"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors"
                >
                  For Investors
                </Link>
                <Link
                  to="/privacy-policy"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>

              <div className="space-y-2">
                <Link
                  to="/sustainability"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors"
                >
                  Sustainability
                </Link>
                <Link
                  to="/contact"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
                <Link
                  to="/cookie-policy"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>

              <div className="space-y-2">
                <Link
                  to="/careers"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
                <Link
                  to="/accessibility"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors"
                >
                  Accessibility
                </Link>
                <Link
                  to="/cookie-consent"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors"
                >
                  Cookie consent
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div>
          <h2 className="text-base md:text-lg font-font2 mb-6 text-white">
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
      </div>
    </div>
  );
}

export default Footer;
