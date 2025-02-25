import AddToCardBtn from "@/components/ui/AddToCardBtn";
import Navbar from "../components/Navbar";
import { useProductStore } from "@/store/Store";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import ResetPass from "../auth/ResetPass";
import OtpPage from "./OtpPage";
<<<<<<< HEAD
import ThingsWeDo from "./ThingsWeDo";
=======
import NewPassword from "./NewPassword";
>>>>>>> 9de7e8821d08e61cae89680c304aa53c6600ef78

const Home = () => {
  const { loading, error, logOut, openSignUp, isSignUpOpen, openReset, isResetOpen, isPasswordOpen } =
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

      {/* <button
        onClick={handleLogout}
        type="button"
        className="w-40 bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors"
      >
        Logout
      </button> */}

<<<<<<< HEAD
      {error && <p>Error: {error}</p>}
      {/* <SignUp/> */}
     
=======
      {/* <button
        onClick={() => {
          console.log("Opening SignUp from Home");
          openSignUp();
        }}
        className="w-40 bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors"
      >
        Sign Up
      </button> */}

      {isSignUpOpen && <SignUp />}

      {/* <button
        onClick={openReset}
        className="w-40 bg-black text-white py-3 rounded"
      >
        Reset It
      </button> */}

      {isResetOpen && <ResetPass />}

      {isPasswordOpen && <NewPassword />}

      {/* {error && <p className="text-red-500">Error: {error}</p>} */}
>>>>>>> 9de7e8821d08e61cae89680c304aa53c6600ef78
    </div>
  );
};

export default Home;
