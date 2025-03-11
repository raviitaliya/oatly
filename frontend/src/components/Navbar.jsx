// import {profileGif} from "../assets/gif/discord-avatar.gif";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdMusicNote } from "react-icons/md";
import SignIn from "@/auth/SignIn";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { useProductStore } from "@/store/Store";
import { Toaster, toast } from "sonner";
import Cart from "./Cart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const {
    isSignInOpen,
    openSignIn,
    closeSignIn,
    user,
    logOut,
    isAddToCartOpen,
    cart,
    openAddToCart,
  } = useProductStore();

  const { id } = useParams();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const item = cart.find((p) => p.id === id);

  const handleSignUpClick = () => {
    setShowSignUp(!showSignUp);
    setShowSignIn(false);
  };

  const handleSignInClick = () => {
    setShowSignIn(!showSignIn);
    setShowSignUp(false);
  };

  const handleOnclick = (id) => {
    setIsCartOpen(!isCartOpen);
    openAddToCart();
  };

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logout successful! ", {
        duration: 3000,
        style: {
          background: "#4CAF50",
          color: "white",
        },
      });
    } catch (err) {
      toast.error("An unexpected error occurred", {
        duration: 3000,
      });
      console.error("Logout failed:", err);
    }
  };

  const profileGif = "/src/assets/gif/discord-avatar.gif";
  return (
    <nav
      className={`flex ${
        isAddToCartOpen ? "z-[40]" : " z-[51]"
      } items-center fixed justify-between p-2 sm:p-3 w-full`}
    >
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
                  <nav className="mb-20 md:mb-32">
                    <ul className="flex flex-col gap-3 md:gap-4 mt-20">
                      <li>
                        <Link
                          to="/"
                          className="text-5xl md:text-7xl font-extrabold font-font1 hover:text-gray-400 transition-colors tracking-tight block cursor-hand"
                        >
                          HOME
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/our-products"
                          className="text-5xl md:text-7xl font-extrabold font-font1 hover:text-gray-400 transition-colors tracking-tight block cursor-hand"
                        >
                          OUR PRODUCTS
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/things-we-do"
                          className="text-5xl md:text-7xl font-extrabold font-font1 hover:text-gray-400 transition-colors tracking-tight block cursor-hand"
                        >
                          THINGS WE DO
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/oatly-who"
                          className="text-5xl md:text-7xl font-extrabold font-font1 hover:text-gray-400 transition-colors tracking-tight block cursor-hand"
                        >
                          OATLY WHO?
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  {/* Footer Section */}
                  <footer className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24  ">
                    <div>
                      <h2 className="text-base md:text-lg font-font2 mb-6">
                        DIG DEEPER
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <Link
                            to="/faqs"
                            className="block font-font2  text-gray-400 hover:text-white transition-colors cursor-hand"
                          >
                            FAQ
                          </Link>
                          <Link
                            to="/career"
                            className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand"
                          >
                            Careers
                          </Link>
                          <Link
                            to="/contact"
                            className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand"
                          >
                            Contact
                          </Link>
                          <Link
                            to="/privacy-policy"
                            className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand"
                          >
                            Privacy Policy
                          </Link>
                          <Link
                            to="/farmain"
                            className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand"
                          >
                            Cookie consent
                          </Link>
                        </div>
                        {/* Right Column */}
                        <div className="space-y-3">
                          <Link
                            to="/sustainability"
                            className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand"
                          >
                            Sustainability
                          </Link>
                          <Link
                            to="/investors"
                            className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand"
                          >
                            For Investors
                          </Link>
                          <Link
                            to="/accessibility"
                            className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand"
                          >
                            Accessibility
                          </Link>
                          <Link
                            to="/cookie-policy"
                            className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand"
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
                          className="w-12 h-12 bg-[#888] rounded-[20px] flex items-center justify-center hover:bg-white -rotate-6 transition-colors cursor-hand"
                        >
                          <FaFacebookF style={{ color: "black" }} size={30} />
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 bg-[#888] rounded-[20px] flex items-center justify-center hover:bg-white -rotate-6 transition-colors cursor-hand"
                        >
                          <FaTwitter style={{ color: "black" }} size={30} />
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 bg-[#888] rounded-[20px] flex items-center justify-center hover:bg-white -rotate-6 transition-colors cursor-hand"
                        >
                          <FaInstagram style={{ color: "black" }} size={30} />
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 bg-[#888] rounded-[20px] flex items-center justify-center hover:bg-white  -rotate-6 transition-colors cursor-hand"
                        >
                          <FaYoutube style={{ color: "black" }} size={30} />
                        </a>
                        <a
                          href="#"
                          className="w-12 h-12 bg-[#888] rounded-[20px] flex items-center justify-center hover:bg-white -rotate-6 transition-colors cursor-hand"
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
        <div className="flex gap-4">
          {!user ? (
            <Button onClick={openSignIn} className="cursor-hand font-font1">
              Log In
            </Button>
          ) : (
            <>
              <Button
                onClick={handleLogout}
                className="cursor-hand bg-[#c8c8c8] hover:bg-[#e4e4e4] text-black font-font1 text-lg pb-1"
              >
                Log Out
              </Button>
              <div className="relative">
                <Cart isbuttonclick={handleOnclick} variant="navbar" />
              </div>
            </>
          )}
          {isSignInOpen && <SignIn onClose={closeSignIn} />}
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center sm:w-12 sm:h-12 bg-black rounded-full outline-white mr-2 cursor-hand">
              <img
                src={profileGif}
                alt="Profile"
                className="w-12 h-12  rounded-full object-cover shadow-lg"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to="/my-orders">My Orders</Link>
          </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Toaster position="top-center" richColors closeButton />
      </div>
    </nav>
  );
};

export default Navbar;
