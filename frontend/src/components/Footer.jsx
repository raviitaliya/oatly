import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdMusicNote } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/logo/Oatly_1.svg";

function Footer() {
  return (
    <div className="bg-black p-20 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between ">
        <div>
          <img
            src={logo}
            alt="oatlylogo"
            className="w-60
          "
          />
        </div>
        <div className=" p-6">
          <div className="max-w-4xl mx-auto pb-10">
            <h2 className="text-base md:text-lg font-font2 mb-6 text-white">
              DIG DEEPER
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-2">
              <div className="space-y-2 ">
                <Link
                  to="/faq"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand "
                >
                  FAQ
                </Link>
                <Link
                  to="/investors"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand "
                >
                  For Investors
                </Link>
                <Link
                  to="/privacy-policy"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand "
                >
                  Privacy Policy
                </Link>
              </div>
              <div className="space-y-2">
                <Link
                  to="/sustainability"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand "
                >
                  Sustainability
                </Link>
                <Link
                  to="/contact"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand "
                >
                  Contact
                </Link>
                <Link
                  to="/cookie-policy"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand "
                >
                  Cookie Policy
                </Link>
              </div>

              <div className="space-y-2">
                <Link
                  to="/careers"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand "
                >
                  Careers
                </Link>
                <Link
                  to="/accessibility"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand "
                >
                  Accessibility
                </Link>
                <Link
                  to="/cookie-consent"
                  className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand "
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
              className="w-10 h-10 bg-[#888] rounded-[20px] flex items-center justify-center hover:bg-white -rotate-6 transition-colors cursor-hand "
            >
              <FaFacebookF style={{ color: "black" }} size={25} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#888] rounded-[20px] flex items-center justify-center hover:bg-white -rotate-6 transition-colors cursor-hand "
            >
              <FaTwitter style={{ color: "black" }} size={25} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#888] rounded-[20px] flex items-center justify-center hover:bg-white -rotate-6 transition-colors cursor-hand "
            >
              <FaInstagram style={{ color: "black" }} size={25} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#888] rounded-[20px] flex items-center justify-center hover:bg-white  -rotate-6 transition-colors cursor-hand "
            >
              <FaYoutube style={{ color: "black" }} size={25} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#888] rounded-[20px] flex items-center justify-center hover:bg-white -rotate-6 transition-colors cursor-hand "
            >
              <MdMusicNote style={{ color: "black" }} size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
