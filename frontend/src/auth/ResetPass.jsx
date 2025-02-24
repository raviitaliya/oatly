import { useProductStore } from "@/store/Store";
import { useState } from "react";
import { motion } from "framer-motion";
import close from "../assets/logo/close.svg";
import cross from "../assets/logo/cross.svg";

const ResetPass = () => {
  const [email, setEmail] = useState("");
  const { forgotPassword, closeReset, isResetOpen, openSignIn } =
    useProductStore();

  if (!isResetOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    forgotPassword(email);
    closeReset();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl relative border-2 border-dashed border-gray-300">
        <button
          onClick={closeReset}
          className="absolute top-[-10px] right-4 text-3xl font-bold"
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
        <div className="p-8">
          <h2 className="text-5xl font-bold text-center font-font1 tracking-wide mb-6">
            Reset Password
          </h2>

          <h2 className="text-2xl text-center font-font2 mb-6">
            Change your password to secure your account
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-2xl font-font2 mb-1">
                Email or Username
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                placeholder="Enter your email or username"
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => {
                  openSignIn();
                  closeReset();
                }}
                className="w-40 bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors"
              >
                Back
              </button>

              <button
                onClick={handleSubmit}
                type="button"
                className="w-40 bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
