import React, { useState } from "react";

const SignUp = () => {
  const [step, setStep] = useState(1);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl relative border-2 border-dashed border-gray-300">
        <div className="p-8">
          <h2 className="text-5xl font-bold text-center font-font1 tracking-wide mb-6">
          Become a Member
          </h2>
          <h2 className="text-2xl text-center font-font2 mb-6">
          Become part of our plant-based community and enjoy high-quality, eco-friendly dairy alternatives for all.
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
           
            {step === 1 && (
              <>
                <div>
                  <label className="block text-2xl font-font2 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-2xl font-font2 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                    placeholder="Enter your username"
                  />
                </div>

                <div>
                  <label className="block text-2xl font-font2 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-2xl font-font2 mb-1">
                    Mobile
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="w-24 bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </>
            )}

         
            {step === 2 && (
              <>
                <div>
                  <label className="block text-2xl font-font2 mb-1">
                    Primary Mobile
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                    placeholder="Enter your primary mobile number"
                  />
                </div>

                <div>
                  <label className="block text-2xl font-font2 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                    placeholder="Enter your password"
                  />
                </div>

                <div>
                  <label className="block text-2xl font-font2 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                    placeholder="Confirm your password"
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    className="w-24 bg-black text-white py-3 rounded font-bold hover:bg-gray-400 transition-colors"
                    onClick={handlePrevious}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="w-24 bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            
            {step === 3 && (
              <>
                <div>
                  <label className="block text-2xl font-font2 mb-1">
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                    placeholder="Enter your address"
                  />
                </div>

                <div>
                  <label className="block text-2xl font-font2 mb-1">
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                    placeholder="Enter your secondary address"
                  />
                </div>

                <div>
                  <label className="block text-2xl font-font2 mb-1">City</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                    placeholder="Enter your city"
                  />
                </div>

                <div>
                  <label className="block text-2xl font-font2 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                    placeholder="Enter your state"
                  />
                </div>

                <div>
                  <label className="block text-2xl font-font2 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                    placeholder="Enter your country"
                  />
                </div>

                <div>
                  <label className="block text-2xl font-font2 mb-1">
                    Zipcode
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-font2 text-xl"
                    placeholder="Enter your zipcode"
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    className="w-24 bg-black text-white py-3 rounded font-bold hover:bg-gray-400 transition-colors"
                    onClick={handlePrevious}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-24 bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
