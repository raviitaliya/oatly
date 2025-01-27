import { useProductStore } from "@/store/Store";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ResetPass = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const { forgotPassword } = useProductStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    forgotPassword(email);

    if (email) {
      navigate("/set-newPassword");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl relative border-2 border-dashed border-gray-300">
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
              <Link to="/signIn">
                <button
                  type="button"
                  className="w-40 bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors"
                >
                  Back
                </button>
              </Link>

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
