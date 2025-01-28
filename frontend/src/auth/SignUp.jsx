import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { useProductStore } from "../store/Store";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    primaryMobile: "",
    password: "",
    confpassword: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
  });

  const { signUpUser, loading, error } = useProductStore();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signUpUser(formData);
    //  console.log("sucessssssss")
    if (response && !error) {
      navigate("/otp");
    } else {
      console.error("Signup failed:", response?.message || "Unknown error");
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl relative border-2 border-dashed border-gray-400 overflow-hidden">
        <div className="p-8  ">
          <h2 className="text-4xl font-bold text-center font-font1 tracking-wide mb-6">
            Become a Member
          </h2>
          <h2 className="text-xl text-gray-500 text-center font-font2 mb-6">
            Become part of our plant-based community and enjoy high-quality,
            eco-friendly dairy alternatives for all.
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    duration: 0.2
                  }}
                  className="h-[450px]"
                >
                  <motion.div className="space-y-6">
                    <div>
                      <label className="block text-xl font-font2 mb-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-[6px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label className="block text-xl font-font2 mb-1">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full px-3 py-[6px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                        placeholder="Enter your username"
                      />
                    </div>

                    <div>
                      <label className="block text-xl font-font2 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-[6px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-xl font-font2 mb-1">
                        Mobile
                      </label>
                      <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full px-3 py-[6px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                        placeholder="Enter your mobile number"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    duration: 0.2
                  }}
                  className="h-[450px]"
                >
                  <motion.div className="space-y-6">
                    <div>
                      <label className="block text-xl font-font2 mb-1">
                        Primary Mobile
                      </label>
                      <input
                        type="text"
                        name="primaryMobile"
                        value={formData.primaryMobile}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                        placeholder="Enter your primary mobile number"
                      />
                    </div>

                    <div>
                      <label className="block text-xl font-font2 mb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-3 py-[6px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                        placeholder="Enter your password"
                      />
                    </div>

                    <div>
                      <label className="block text-xl font-font2 mb-1">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confpassword"
                        value={formData.confpassword}
                        onChange={handleChange}
                        className="w-full px-3 py-[6px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                        placeholder="Confirm your password"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    duration: 0.2
                  }}
                  className="h-[450px]"
                >
                  <div className="space-y-6 overflow-y-auto max-h-[430px]">
                    <div>
                      <label className="block text-xl font-font2 mb-1">
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        name="address1"
                        value={formData.address1}
                        onChange={handleChange}
                        className="w-full px-3 py-[6px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                        placeholder="Enter your address"
                      />
                    </div>

                    <div>
                      <label className="block text-xl font-font2 mb-1">
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        name="address2"
                        value={formData.address2}
                        onChange={handleChange}
                        className="w-full px-3 py-[6px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                        placeholder="Enter your secondary address"
                      />
                    </div>

                    <div>
                      <label className="block text-xl font-font2 mb-1">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-3 py-[6px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                        placeholder="Enter your city"
                      />
                    </div>

                    <div>
                      <label className="block text-xl font-font2 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-3 py-[6px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                        placeholder="Enter your state"
                      />
                    </div>

                    <div>
                      <label className="block text-xl font-font2 mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-3 py-[6px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                        placeholder="Enter your country"
                      />
                    </div>

                    <div>
                      <label className="block text-xl font-font2 mb-1">
                        Zipcode
                      </label>
                      <input
                        type="text"
                        name="zipcode"
                        value={formData.zipcode}
                        onChange={handleChange}
                        className="w-full px-3 py-[6px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                        placeholder="Enter your zipcode"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex justify-between mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="w-24 bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors"
                onClick={handlePrevious}
              >
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type={step === 3 ? "submit" : "button"}
                className="w-24 bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors"
                onClick={step === 3 ? undefined : handleNext}
              >
                {step === 3 ? "Submit" : "Next"}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
