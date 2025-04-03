import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster, toast } from "sonner";
import { Loader2 } from "lucide-react";
import close from "../assets/logo/close.svg";
import cross from "../assets/logo/cross.svg";

import { useProductStore } from "../store/Store";

const SignUp = () => {
  const [userType, setUserType] = useState(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
    confpassword: "",

    primaryMobile: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",

    isAvailable: true,
    status: "active",
    location: {
      type: "Point",
      coordinates: [],
    },
  });

  const { signUpUser, loading, error, isSignUpOpen, openSignIn, openOtp } =
    useProductStore();
  const closeSignUp = useProductStore((state) => state.closeSignUp);

  const [errors, setErrors] = useState({});

  if (!userType && isSignUpOpen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white w-full max-w-2xl relative border-2 border-dashed border-gray-400">
          <div className="p-8">
            <h2 className="text-4xl font-bold text-center font-font1 tracking-wide mb-6">
              Join Us
            </h2>
            <h3 className="text-xl text-gray-500 text-center font-font2 mb-8">
              Choose how you want to be part of our community
            </h3>

            <div className="flex gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setUserType("user")}
                className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-xl font-font2"
              >
                Customer
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setUserType("deliveryBoy")}
                className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-xl font-font2"
              >
                Delivery Partner
              </motion.button>
            </div>

            <button
              onClick={closeSignUp}
              className="absolute top-[-10px] right-4 text-gray-600 hover:text-black"
            >
              <motion.img
                src={close}
                alt="Close"
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
    );
  }

  const validateStep1 = () => {
    const stepErrors = {};
    if (userType === "deliveryBoy") {
      if (!formData.name.trim()) {
        stepErrors.name = "Name is required";
        toast.error("Name is required");
      }
      if (!formData.email.trim()) {
        stepErrors.email = "Email is required";
        toast.error("Email is required");
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        stepErrors.email = "Please enter a valid email";
        toast.error("Please enter a valid email");
      }
      if (!formData.mobile.trim()) {
        stepErrors.mobile = "Mobile number is required";
        toast.error("Mobile number is required");
      } else if (!/^\d{10}$/.test(formData.mobile)) {
        stepErrors.mobile = "Please enter a valid 10-digit mobile number";
        toast.error("Please enter a valid 10-digit mobile number");
      }
    } else {
      if (!formData.name.trim()) {
        stepErrors.name = "Name is required";
        toast.error("Name is required");
      }
      if (!formData.username.trim()) {
        stepErrors.username = "Username is required";
        toast.error("Username is required");
      }
      if (!formData.email.trim()) {
        stepErrors.email = "Email is required";
        toast.error("Email is required");
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        stepErrors.email = "Please enter a valid email";
        toast.error("Please enter a valid email");
      }
      if (!formData.mobile.trim()) {
        stepErrors.mobile = "Mobile number is required";
        toast.error("Mobile number is required");
      } else if (!/^\d{10}$/.test(formData.mobile)) {
        stepErrors.mobile = "Please enter a valid 10-digit mobile number";
        toast.error("Please enter a valid 10-digit mobile number");
      }
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  // Add validateStep2 for delivery boy
  const validateStep2 = () => {
    const stepErrors = {};
    if (userType === "deliveryBoy") {
      if (!formData.password) {
        stepErrors.password = "Password is required";
        toast.error("Password is required");
      } else if (formData.password.length < 6) {
        stepErrors.password = "Password must be at least 6 characters";
        toast.error("Password must be at least 6 characters");
      }
      if (formData.password !== formData.confpassword) {
        stepErrors.confpassword = "Passwords do not match";
        toast.error("Passwords do not match");
      }
      if (formData.isAvailable === undefined) {
        stepErrors.isAvailable = "Please specify availability";
        toast.error("Please specify availability");
      }
    } else {
      if (!formData.primaryMobile?.trim()) {
        stepErrors.primaryMobile = "Primary mobile number is required";
        toast.error("Primary mobile number is required");
      } else if (!/^\d{10}$/.test(formData.primaryMobile)) {
        stepErrors.primaryMobile =
          "Please enter a valid 10-digit mobile number";
        toast.error("Please enter a valid 10-digit mobile number");
      }
      if (!formData.password) {
        stepErrors.password = "Password is required";
        toast.error("Password is required");
      } else if (formData.password.length < 6) {
        stepErrors.password = "Password must be at least 6 characters";
        toast.error("Password must be at least 6 characters");
      }
      if (formData.password !== formData.confpassword) {
        stepErrors.confpassword = "Passwords do not match";
        toast.error("Passwords do not match");
      }
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const validateStep3 = () => {
    const stepErrors = {};

    if (!formData.address1?.trim()) {
      stepErrors.address1 = "Building name and number is required";
      toast.error("Building name and number is required");
    }
    if (!formData.address2?.trim()) {
      stepErrors.address2 = "Street address is required";
      toast.error("Street address is required");
    }
    if (!formData.city?.trim()) {
      stepErrors.city = "City is required";
      toast.error("City is required");
    }
    if (!formData.state?.trim()) {
      stepErrors.state = "State is required";
      toast.error("State is required");
    }
    if (!formData.country?.trim()) {
      stepErrors.country = "Country is required";
      toast.error("Country is required");
    }
    if (!formData.zipcode?.trim()) {
      stepErrors.zipcode = "Zipcode is required";
      toast.error("Zipcode is required");
    }

    if (!formData.primaryMobile?.trim()) {
      stepErrors.primaryMobile = "Primary mobile number is required";
      toast.error("Primary mobile number is required");
    } else if (!/^\d{10}$/.test(formData.primaryMobile)) {
      stepErrors.primaryMobile = "Please enter a valid 10-digit mobile number";
      toast.error("Please enter a valid 10-digit mobile number");
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  // Modify the step content rendering
  const renderStepContent = () => {
    if (userType === "deliveryBoy") {
      switch (step) {
        case 1:
          return (
            <motion.div
              key="step1"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="h-[450px]"
            >
              <motion.div className="space-y-6">
                {renderInput("name", "Name", "text", "Enter your full name")}
                {renderInput("email", "Email", "email", "Enter your email")}
                {renderInput(
                  "mobile",
                  "Mobile",
                  "tel",
                  "Enter your mobile number"
                )}
              </motion.div>
            </motion.div>
          );
        case 2:
          return (
            <motion.div
              key="step2"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="h-[450px]"
            >
              <motion.div className="space-y-6">
                {renderInput(
                  "password",
                  "Password",
                  "password",
                  "Create a strong password"
                )}
                {renderInput(
                  "confpassword",
                  "Confirm Password",
                  "password",
                  "Confirm your password"
                )}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isAvailable"
                    name="isAvailable"
                    checked={formData.isAvailable}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        isAvailable: e.target.checked,
                      })
                    }
                    className="w-4 h-4"
                  />
                  <label htmlFor="isAvailable" className="text-xl font-font2">
                    Available for deliveries
                  </label>
                </div>
              </motion.div>
            </motion.div>
          );
        case 3:
          return (
            <motion.div
              key="step3"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="h-[450px]"
            >
              <div className="space-y-6 px-1 py-1 space-x-1 overflow-y-auto max-h-[430px]">
                {renderInput(
                  "address1",
                  "Building Name & Number",
                  "text",
                  "Enter building name and number"
                )}
                {renderInput(
                  "address2",
                  "Street Address",
                  "text",
                  "Enter street name, area, landmark etc."
                )}
                {renderInput("city", "City", "text", "Enter your city")}
                {renderInput("state", "State", "text", "Enter your state")}
                {renderInput(
                  "country",
                  "Country",
                  "text",
                  "Enter your country"
                )}
                {renderInput(
                  "zipcode",
                  "Zipcode",
                  "text",
                  "Enter your zipcode"
                )}
              </div>
            </motion.div>
          );
      }
    } else {
      console.log("Sign Up:", error);
    }
  };

  // console.log(formData.name);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    let isValid = false;
    switch (step) {
      case 1:
        isValid = validateStep1();
        break;
      case 2:
        isValid = validateStep2();
        break;
      case 3:
        isValid = validateStep3();
        break;
    }

    if (!isValid) return;

    const signupData = {
      ...formData,
      role: userType === "deliveryBoy" ? "delivery_boy" : "user",
    };

    try {
      const response = await signUpUser(signupData);

      if (response.status === 200) {
        toast.success("Registration successful! Please verify your OTP.", {
          duration: 3000,

          icon: "✅",
        });
        closeSignUp();
        openOtp();
      } else {
        toast.error(
          response?.data?.message || "Registration failed. Please try again.",
          {
            duration: 3000,
          }
        );
      }
    } catch (err) {
      if (err.response?.status >= 400) {
        toast.error("This email or username is already registered.", {
          duration: 3000,
          style: {
            color: "white",
            border: "none",
          },
          icon: "⚠️",
        });
      } else if (err.response?.status === 400) {
        toast.error(
          err.response?.data?.message ||
            "Please check your information and try again.",
          {
            duration: 3000,
            style: {
              background: "#EF4444",
              color: "white",
              border: "none",
            },
            icon: "❌",
          }
        );
      } else {
        toast.error("An unexpected error occurred. Please try again later.", {
          duration: 3000,
          style: {
            background: "#DC2626",
            color: "white",
            border: "none",
          },
          icon: "❌",
        });
      }

      console.error("Signup Error:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    let isValid = false;

    console.log("Current step:", step);
    console.log("User type:", userType);

    switch (step) {
      case 1:
        isValid = validateStep1();
        if (isValid) {
          setStep(2);
          setErrors({});
        }
        break;

      case 2:
        isValid = validateStep2();
        if (isValid) {
          setStep(3);
          setErrors({});
        }
        break;

      case 3:
        if (userType === "deliveryBoy" || userType === "user") {
          isValid = validateStep3();
          if (isValid) {
            handleSubmit();
          }
        }
        break;
    }
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderInput = (name, label, type = "text", placeholder) => (
    <div>
      <label className="block text-xl font-font2 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className={`w-full px-3 py-[6px] border ${
          errors[name] ? "border-red-500" : "border-gray-300"
        } rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl`}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
      )}
    </div>
  );

  if (!isSignUpOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-3xl relative border-2 border-dashed border-gray-400 overflow-hidden">
        <button
          type="button"
          onClick={closeSignUp}
          className="absolute top-[-10px] right-1 text-gray-500 hover:text-gray-700 text-lg font-bold cursor-pointer"
        >
          <motion.img
            src={close || "/close.svg"}
            alt="Close"
            className="w-[120px]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          />
          <img
            src={cross || "/cross.svg"}
            alt="Cross"
            className="w-[40px] absolute top-[40px] left-[40px]"
          />
        </button>
        <div className="p-8">
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
                    duration: 0.2,
                  }}
                  className="h-[450px]"
                >
                  <motion.div className="space-y-6">
                    {renderInput("name", "Name", "text", "Enter your name")}
                    {renderInput(
                      "username",
                      "Username",
                      "text",
                      "Enter your username"
                    )}
                    {renderInput("email", "Email", "email", "Enter your email")}
                    {renderInput(
                      "mobile",
                      "Mobile",
                      "text",
                      "Enter your mobile number"
                    )}
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
                    duration: 0.2,
                  }}
                  className="h-[450px]"
                >
                  <motion.div className="space-y-6">
                    {renderInput(
                      "primaryMobile",
                      "Primary Mobile",
                      "text",
                      "Enter your primary mobile number"
                    )}
                    {renderInput(
                      "password",
                      "Password",
                      "password",
                      "Enter your password"
                    )}
                    {renderInput(
                      "confpassword",
                      "Confirm Password",
                      "password",
                      "Confirm your password"
                    )}
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
                    duration: 0.2,
                  }}
                  className="h-[450px]"
                >
                  <div className="space-y-6 px-1 py-1 space-x-1 overflow-y-auto max-h-[430px]">
                    {renderInput(
                      "address1",
                      "Building Name & Number",
                      "text",
                      "Enter building name and number"
                    )}
                    {renderInput(
                      "address2",
                      "Street Address",
                      "text",
                      "Enter street name, area, landmark etc."
                    )}
                    {renderInput("city", "City", "text", "Enter your city")}
                    {renderInput("state", "State", "text", "Enter your state")}
                    {renderInput(
                      "country",
                      "Country",
                      "text",
                      "Enter your country"
                    )}
                    {renderInput(
                      "zipcode",
                      "Zipcode",
                      "text",
                      "Enter your zipcode"
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="w-24 bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handlePrevious}
                disabled={loading || step === 1}
              >
                Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="w-24 bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleNext}
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin mx-auto" />
                ) : step === 3 ? (
                  "Submit"
                ) : (
                  "Next"
                )}
              </motion.button>
            </div>
            <div className="text-center">
              <p className="text-md text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={openSignIn}
                  className="text-black hover:underline font-medium"
                >
                  Log in
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="top-center" richColors closeButton />
    </div>
  );
};

export default SignUp;
