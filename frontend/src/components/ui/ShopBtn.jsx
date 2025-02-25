import React from "react";
import { Button } from "./button";
import { FaShoppingCart } from "react-icons/fa";
import { useProductStore } from "@/store/Store";

function ShopBtn({ onClick }) {
  const { cart } = useProductStore();
  return (
    <div>
      <Button onClick={onClick} variant="ghost" className="cursor-hand p-2">
        <FaShoppingCart size={20} />
        <span className="absolute -top-2 -right-2 bg-[#c8c8c8] text-black text-xs rounded-full h-5 w-5 flex items-center justify-center cursor-pointer">
          {cart.length - 1}
        </span>
      </Button>
    </div>
  );
}

export default ShopBtn;
