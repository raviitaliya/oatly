// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import { useProductStore } from "@/store/Store";
import SignUp from "../auth/SignUp";
import ResetPass from "../auth/ResetPass";
import OtpPage from "./OtpPage";
import NewPassword from "./NewPassword";
import CanvasSection from "@/components/CanvasSection";
import CanvasSection1 from "@/components/CanvasSection1";
import CanvasSection2 from "@/components/CanvasSection2";
import CanvasSection3 from "@/components/CanvasSection3";
import CanvasSection4 from "@/components/CanvasSection4";
import CanvasSection5 from "@/components/CanvasSection5";
import CanvasSection6 from "@/components/CanvasSection6";
import CanvasSection7 from "@/components/CanvasSection7";
import CanvasSection8 from "@/components/CanvasSection8";
import CanvasSection9 from "@/components/CanvasSection9";
import CanvasSection10 from "@/components/CanvasSection10";

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
    isOtpOpen,
  } = useProductStore();

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
      <div className="w-full h-screen flex">
        <CanvasSection />
        <CanvasSection1 />
        <CanvasSection2 />
        <CanvasSection3 />
        <CanvasSection4 />
        <CanvasSection5 />
        <CanvasSection6 />
        <CanvasSection7 />
        <CanvasSection8 />
        <CanvasSection9 />
        <CanvasSection10 />
      </div>

      <div className="flex min-w-max gap-8 p-8">
        {isSignUpOpen && <SignUp />}
        {isOtpOpen && <OtpPage />}
        {isResetOpen && <ResetPass />}
        {isPasswordOpen && <NewPassword />}
      </div>
    </div>
  );
};

export default Home;
