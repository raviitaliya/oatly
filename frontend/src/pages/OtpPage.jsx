import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useProductStore } from "../store/Store";
import close from "../assets/logo/close.svg";
import cross from "../assets/logo/cross.svg";


const OtpPage = () => {
  const isOtpOpen = useProductStore((state) => state.isOtpOpen);
  const closeOtp = useProductStore((state) => state.closeOtp);
  const verifyEmail = useProductStore((state) => state.verifyEmail);
  const loading = useProductStore((state) => state.loading);
  const error = useProductStore((state) => state.error);

  const [otp, setOtp] = useState("");

  if (!isOtpOpen) return null;

  const handleOtpChange = (value) => {
    console.log("OTP Entered:", value);
    setOtp(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting OTP:", otp);

    const response = await verifyEmail(otp);
    console.log("Response:", response);

    if (response.success) {
      closeOtp();
    } else {
      console.error("OTP verification failed:", response.message || "Unknown error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl relative border-2 border-dashed border-gray-300">
        <button onClick={closeOtp} className="absolute top-2 right-2 text-3xl font-bold">
        <MotionValue.img
              src={close || "/close.svg"}
              alt="this is svg"
              className="w-[120px]"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }} // Change duration here
            />
            <img
              src={cross || "/cross.svg"}
              alt="this is svg"
              className="w-[40px] absolute top-[40px] left-[40px]  "
            />
        </button>
        <div className="p-8">
          <h2 className="text-5xl font-bold text-center font-font1 tracking-wide mb-6">
            OTP Verification
          </h2>

          <h2 className="text-2xl text-center font-font2 mb-6">
            To proceed, please provide the OTP sent to your registered email
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-2xl font-font2 mb-1 mr-5">Enter OTP</label>
              <InputOTP maxLength={6} value={otp} onChange={handleOtpChange}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>

                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="w-40 bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Submit"}
              </button>
            </div>
          </form>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
