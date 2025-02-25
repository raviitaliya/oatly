import AddToCardBtn from "@/components/ui/AddToCardBtn";
import Navbar from "../components/Navbar";
import { useProductStore } from "@/store/Store";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import ResetPass from "../auth/ResetPass";
import OtpPage from "./OtpPage";
import NewPassword from "./NewPassword";

const Home = () => {
  const {
    loading,
    error,
    logOut,
    openSignUp,
    isSignUpOpen,
    openReset,
    isResetOpen,
    isPasswordOpen,
  } = useProductStore();

  // Add scroll handler
  const handleWheel = (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      const container = e.currentTarget;
      container.scrollLeft += e.deltaY;
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div
      className="h-screen overflow-x-auto overflow-y-hidden scrollbar-hide"
      onWheel={handleWheel}
    >
      <div className=" w-full h-screen flex ">
        <div className="relative flex">
          <img
            src="https://a.storyblok.com/f/107921/51x1601/bd217ddba2/edge-white-2.gif/m/32x0/filters:quality(75):format(webp)"
            alt="Oatly"
            className="h-screen"
          />
          <img
            src="https://a.storyblok.com/f/107921/1738x1200/df94971a12/black-bg2.gif"
            className="w-[777px] h-[911px] object-cover"
            alt="background"
          />
          <img
            src="https://a.storyblok.com/f/107921/102x150/81f42ef337/logo-heading.svg"
            className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 hover:scale-105 cursor-pointer transition-transform h-[803px]"
            alt="logo"
          />
          <img
            src="https://a.storyblok.com/f/107921/51x1601/654222988d/edge.gif/m/32x0/filters:quality(75):format(webp)"
            className="absolute right-0 h-screen"
            alt="edge-animation"
          />
        </div>

        <div>
          <div className="px-10">
            <img
              src="https://a.storyblok.com/f/107921/x/97e70255b8/feet.svg"
              alt="Oatly"
              className="h-[433px] w-[788px]"
            />
            <div className="flex gap-16">
              <img
                src="https://a.storyblok.com/f/107921/985x1564/90247dd5c8/barbershop-quartet-9.jpg/m/384x0/filters:quality(75):format(webp)"
                className="w-[303px] h-[481px] object-cover"
                alt="background"
              />

              <img
                src="https://a.storyblok.com/f/107921/x/bd6be96854/milkmyths.svg"
                className="w-[303px] h-[220px] object-cover mt-3 hover:scale-105 transition-transform"
                alt="background"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-w-max gap-8 p-8">
        {isSignUpOpen && <SignUp />}
        {isResetOpen && <ResetPass />}
        {isPasswordOpen && <NewPassword />}
      </div>
    </div>
  );
};

export default Home;
