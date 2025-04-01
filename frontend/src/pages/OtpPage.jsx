import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useProductStore } from "../store/Store";
import close from "../assets/logo/close.svg";
import cross from "../assets/logo/cross.svg";
import { motion } from "framer-motion";
import { toast } from "sonner";

const OtpPage = () => {
  const isOtpOpen = useProductStore((state) => state.isOtpOpen);
  const closeOtp = useProductStore((state) => state.closeOtp);
  const verifyEmail = useProductStore((state) => state.verifyEmail);
  const loading = useProductStore((state) => state.loading);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("OTP is required");

  if (!isOtpOpen) return null;

  const handleOtpChange = (value) => {
    setOtp(value);
    if (!value) {
      setOtpError("OTP is required");
    } else if (value.length !== 6) {
      setOtpError("OTP must be 6 digits");
    } else if (!/^\d+$/.test(value)) {
      setOtpError("OTP must contain only numbers");
    } else {
      setOtpError("");
    }
  };

  const validateOTP = (otp) => {
    if (!otp) {
      setOtpError("OTP is required");
      return false;
    }
    if (otp.length !== 6) {
      setOtpError("OTP must be 6 digits");
      return false;
    }
    if (!/^\d+$/.test(otp)) {
      setOtpError("OTP must contain only numbers");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateOTP(otp)) {
      toast.error(otpError, {
        duration: 3000,
        style: {
          background: "#EF4444",
          color: "white",
          border: "none",
        },
        icon: "❌"
      });
      return;
    }

    try {
      const response = await verifyEmail(otp);

      if (response.success) {
        toast.success("Email verified successfully!", {
          duration: 3000,
          style: {
            background: "#10B981",
            color: "white",
            border: "none",
          },
          icon: "✅"
        });
        closeOtp();
      } else {
        toast.error(response.message || "Verification failed", {
          duration: 3000,
          style: {
            background: "#EF4444",
            color: "white",
            border: "none",
          },
          icon: "❌"
        });
      }
    } catch (err) {
      if (err.response?.status === 400) {
        toast.error("Invalid or expired verification code", {
          duration: 3000,
          style: {
            background: "#F59E0B",
            color: "white",
            border: "none",
          },
          icon: "⚠️"
        });
      } else if (err.response?.status === 404) {
        toast.error("OTP not found. Please request a new one", {
          duration: 3000,
          style: {
            background: "#F59E0B",
            color: "white",
            border: "none",
          },
          icon: "⚠️"
        });
      } else if (err.response?.status === 429) {
        toast.error("Too many attempts. Please try again later", {
          duration: 3000,
          style: {
            background: "#F59E0B",
            color: "white",
            border: "none",
          },
          icon: "⚠️"
        });
      } else {
        toast.error("An error occurred during verification", {
          duration: 3000,
          style: {
            background: "#DC2626",
            color: "white",
            border: "none",
          },
          icon: "❌"
        });
      }
      console.error("OTP verification error:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl relative border-2 border-dashed border-gray-300">
        <button onClick={closeOtp} className="absolute top-[-10px] right-2 text-3xl font-bold">
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
          <h2 className="text-5xl font-bold text-center font-font1 tracking-wide mb-6">
            OTP Verification
          </h2>
          <h2 className="text-2xl text-center font-font2 mb-6">
            To proceed, please provide the OTP sent to your registered email
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-2xl font-font2 mb-1 mr-5">Enter OTP</label>
              <InputOTP 
                maxLength={6} 
                value={otp} 
                onChange={handleOtpChange}
                className={otpError ? "border-red-500" : ""}
              >
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
              {otpError && (
                <p className="text-red-500 text-sm mt-1">{otpError}</p>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-40 bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;