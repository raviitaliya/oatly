import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdMusicNote } from "react-icons/md";
import SignIn from "@/auth/SignIn";
import { Link, useParams } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { useProductStore } from "@/store/Store";
import { Toaster, toast } from "sonner";
import Cart from "./Cart";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleOnclick = () => {
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

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  const menuItems = [
    { path: "/", label: "HOME" },
    { path: "/our-products", label: "OUR PRODUCTS" },
    { path: "/things-we-do", label: "THINGS WE DO" },
    { path: "/oatly-who", label: "OATLY WHO?" },
  ];

  const footerLinks = {
    left: [
      { path: "/faqs", label: "FAQ" },
      { path: "/career", label: "Careers" },
      { path: "/contact", label: "Contact" },
      { path: "/privacy-policy", label: "Privacy Policy" },
      { path: "/farmain", label: "Cookie consent" },
    ],
    right: [
      { path: "/sustainability", label: "Sustainability" },
      { path: "/investors", label: "For Investors" },
      { path: "/accessibility", label: "Accessibility" },
      { path: "/cookie-policy", label: "Cookie Policy" },
    ],
  };

  const profileGif = "/src/assets/gif/discord-avatar.gif";
  return (
    <nav
      className={`flex ${
        isAddToCartOpen ? "z-[40]" : " z-[51]",
        isSheetOpen ? "z-[0]" : "z-[51]"
      } items-center fixed justify-between p-2 sm:p-3 w-full`}
    >
      <div className="flex items-center">
        <div>
          <div className="grid grid-cols-1 gap-2">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 sm:w-12 sm:h-12 rounded-full cursor-hand outline-white bg-black flex flex-col items-center justify-center gap-1 hover:bg-gray-800 transition-colors border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                  aria-label="Menu"
                >
                  <motion.div
                    animate={isSheetOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="w-5 sm:w-6 h-0.5 sm:h-1 bg-white rounded-full"
                  />
                  <motion.div
                    animate={isSheetOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="w-5 sm:w-6 h-0.5 sm:h-1 bg-white rounded-full"
                  />
                  <motion.div
                    animate={isSheetOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className="w-5 sm:w-6 h-0.5 sm:h-1 bg-white rounded-full"
                  />
                </motion.button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="!w-full sm:!w-full md:!w-[740px] lg:!w-[950px] bg-black border-none text-white p-4 sm:p-6"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12 overflow-y-auto"
                >
                  <nav className="mb-20 md:mb-32">
                    <ul className="flex flex-col gap-3 md:gap-4 mt-20">
                      {menuItems.map((item, index) => (
                        <motion.li
                          key={item.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                            to={item.path}
                            className="text-5xl md:text-7xl font-extrabold font-font1 hover:text-gray-400 transition-colors tracking-tight block cursor-hand"
                            onClick={handleLinkClick}
                          >
                            {item.label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>

                  <footer className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <h2 className="text-base md:text-lg font-font2 mb-6">
                        DIG DEEPER
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          {footerLinks.left.map((link, index) => (
                            <motion.div
                              key={link.path}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                            >
                              <Link
                                to={link.path}
                                className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand"
                                onClick={handleLinkClick}
                              >
                                {link.label}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                        <div className="space-y-3">
                          {footerLinks.right.map((link, index) => (
                            <motion.div
                              key={link.path}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                            >
                              <Link
                                to={link.path}
                                className="block font-font2 text-gray-400 hover:text-white transition-colors cursor-hand"
                                onClick={handleLinkClick}
                              >
                                {link.label}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      <h2 className="text-base md:text-lg font-font2 mb-6">
                        BE SOCIAL
                      </h2>
                      <div className="flex gap-3">
                        {[
                          { icon: FaFacebookF },
                          { icon: FaTwitter },
                          { icon: FaInstagram },
                          { icon: FaYoutube },
                          { icon: MdMusicNote },
                        ].map((social, index) => (
                          <motion.a
                            key={index}
                            href="#"
                            className="w-12 h-12 bg-[#888] rounded-[20px] flex items-center justify-center hover:bg-white -rotate-6 transition-colors cursor-hand"
                            whileHover={{ scale: 1.1, rotate: 0 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                          >
                            <social.icon style={{ color: "black" }} size={30} />
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  </footer>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-8">
        <div className="flex gap-4">
          {!user ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={openSignIn} className="cursor-hand font-font1">
                Log In
              </Button>
            </motion.div>
          ) : (
            <>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={handleLogout}
                  className="cursor-hand bg-[#c8c8c8] hover:bg-[#e4e4e4] text-black font-font1 text-lg pb-1"
                >
                  Log Out
                </Button>
              </motion.div>
              <div className="relative">
                {user?.role !== "delivery_boy" && (
                  <Cart isbuttonclick={handleOnclick} variant="navbar" />
                )}
              </div>
            </>
          )}
          {isSignInOpen && <SignIn onClose={closeSignIn} />}
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center sm:w-12 sm:h-12 bg-black rounded-full outline-white mr-2 cursor-hand"
            >
              <img
                src={profileGif}
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover shadow-lg"
              />
            </motion.div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to={user?.role === "delivery_boy" ? "/delivery-boy" : "/my-orders"}>
                {user?.role === "delivery_boy" ? "Dashboard" : "My Orders"}
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Toaster position="top-center" richColors closeButton />
      </div>
    </nav>
  );
};

export default Navbar;
