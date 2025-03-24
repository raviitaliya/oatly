import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProductStore } from "../store/Store";
import Cookies from "js-cookie";
import close from "../assets/logo/close.svg";
import cross from "../assets/logo/cross.svg";
import { motion } from "framer-motion";
import ResetPass from "./ResetPass";
import { Toaster, toast } from "sonner";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {
    signInUser,
    loading,
    error,
    user,
    openSignUp,
    closeSignIn,
    isSignInOpen,
    isResetOpen,
  } = useProductStore();

  const openReset = useProductStore((state) => state.openReset);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInUser(formData);

      if (response) {
        toast.success("Login successful!", {
          duration: 3000,
          style: {
            background: "#4CAF50",
            color: "white",
          },
        });
        closeSignIn();
        // navigate("/home");
      } else {
        throw new Error(response?.message || "Login failed");
      }
    } catch (error) {
      toast.error(error.message || "An unexpected error occurred", {
        duration: 3000,
      });
      console.error("Login failed:", error.message);
    }
  };
  return (
    isSignInOpen && (
      <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white  w-full max-w-3xl relative border-2 border-dashed border-gray-300">
          <div className="p-8">
            <h2 className="text-5xl font-bold text-center font-font1 tracking-wide mb-6">
              Welcome Back
            </h2>

            <h2 className="text-2xl  text-center font-font2  mb-6">
              Rejoin the plant-based revolution and access your favorite
              dairy-free delights
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-2xl font-font2 mb-1">
                  Username or Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                  placeholder="Enter your username or email"
                />
              </div>

              <div>
                <label className="block text-2xl font-font2 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl "
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors "
              >
                SUBMIT
              </button>
              <div className="text-center">
                <p className="text-md text-gray-600">
                  Don't have an account?{" "}
                  <button
                    onClick={openSignUp}
                    className="text-black hover:underline font-medium"
                  >
                    Sign up
                  </button>
                </p>
                <p className="text-md text-gray-600">
                  Forgot your password?{" "}
                  <button
                    onClick={() => {
                      console.log("Reset Password Button Clicked");
                      openReset();
                      closeSignIn();
                      setTimeout(
                        () =>
                          console.log(
                            "Final isResetOpen:",
                            useProductStore.getState().isResetOpen
                          ),
                        500
                      );
                    }}
                    className="text-black hover:underline font-medium"
                  >
                    Reset It
                  </button>
                  {isResetOpen && <ResetPass />}
                </p>
              </div>
            </form>
            <button
              onClick={closeSignIn}
              className="absolute top-[-10px] right-4 text-gray-600 hover:text-black"
            >
              <motion.img
                src={close || "/close.svg"}
                alt="this is svg"
                className="w-[120px]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              />
              <img
                src={cross || "/cross.svg"}
                alt="this is svg"
                className="w-[40px] absolute top-[40px] left-[40px]  "
              />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default SignIn;
