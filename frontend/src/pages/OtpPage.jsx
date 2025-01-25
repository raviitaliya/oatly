import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useProductStore } from "../store/Store";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const { verifyEmail, loading, error } = useProductStore();
  const navigate = useNavigate();

  const handleOtpChange = (value) => {
    setOtp(value);
    console.log("OTP Entered:", value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await verifyEmail(otp);
   console.log("Responseeeeeeeeeeeeeeeeeee:", response);
    if (response.success === true ) {
      navigate("/signIn");
    } else {
      console.error("OTP verification failed:", response.message || "Unknown error");
    }
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl relative border-2 border-dashed border-gray-300">
        <div className="p-8">
          <h2 className="text-5xl font-bold text-center font-font1 tracking-wide mb-6">
            OTP Verification
          </h2>

          <h2 className="text-2xl text-center font-font2 mb-6">
            To proceed, please provide the OTP sent to your registered email
          </h2>

          <form className="space-y-6" >
            <div className="">
              <label className="block text-2xl font-font2 mb-1 mr-5">
                Enter OTP
              </label>
              <InputOTP maxLength={6} value={otp} onChange={handleOtpChange }>
                <InputOTPGroup className="">
                  <InputOTPSlot index={0} className=""/>
                  <InputOTPSlot index={1}  className=""/>
                  <InputOTPSlot index={2} className=""/>
                </InputOTPGroup>
               
                <InputOTPGroup>
                  <InputOTPSlot index={3} className="" />
                  <InputOTPSlot index={4} className=""/>
                  <InputOTPSlot index={5} className="" />
                </InputOTPGroup>
              </InputOTP>
            
            </div>

            <div className="flex justify-end">
              
              <button
                type="button"
                className="w-40 bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors"
                onClick={handleSubmit}
              >
                Submit
              </button>
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
