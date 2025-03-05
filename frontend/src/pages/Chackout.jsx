import { useProductStore } from "@/store/Store";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { user } = useProductStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/404-error");
    }
  }, [user, navigate]);

  if (user) {
    return (
      <div className="w-full h-screen">
        <div className="border-[2px] h-screen flex flex-col justify-center items-center">
          <h1 className="font-font1 text-[60px] ">Checkout Page Currently Under Contruction</h1>
          <h1 className="font-font2 text-[20px] ">Try Few Days Later...</h1>
        </div>
      </div>
    );
  }

  return null;
}

export default Checkout;
