import React from "react";

function PaymentBtn({ amount, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-[#c8c8c8] hover:bg-[#e4e4e4] mt-2 text-[25px] text-black font-font1 text-pretty w-64  rounded"
      >
        Pay  ₹{amount}
      </button>
    </div>
  );
}

export default PaymentBtn;
