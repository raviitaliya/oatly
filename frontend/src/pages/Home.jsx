import AddToCardBtn from "@/components/ui/AddToCardBtn";
import Navbar from "../components/Navbar";
import { useProductStore } from "@/store/Store";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import ResetPass from "../auth/ResetPass";
import OtpPage from "./OtpPage";

const Home = () => {
  const { loading, error, logOut, openSignUp, isSignUpOpen } =
    useProductStore();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="font-font1 text-4xl">hello world</h1>
      <h1 className="font-font2 text-2xl">hello world</h1>
      <h1 className="font-font2 text-2xl">hello world</h1>
      <h1 className="font-font2 text-2xl">hello world</h1>

      <button
        onClick={handleLogout}
        type="button"
        className="w-40 bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors"
      >
        Logout
      </button>

      <button
        onClick={() => {
          console.log("Opening SignUp from Home");
          openSignUp();
        }}
        className="w-40 bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors"
      >
        Sign Up
      </button>

      <p>SignUp Modal State: {isSignUpOpen.toString()}</p>

      {isSignUpOpen && <SignUp />}

      {error && <p className="text-red-500">Error: {error}</p>}
    </div>
  );
};

export default Home;
