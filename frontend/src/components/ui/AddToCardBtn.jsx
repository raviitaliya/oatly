import { FaShoppingCart } from "react-icons/fa";
import { Button } from "./button";
import { useProductStore } from "@/store/Store";

function AddToCardBtn({ onClick, variant }) {
  const { cart } = useProductStore();

  if (variant == "default") {
    return (
      <div>
        <button
          onClick={onClick}
          className="bg-black hover:bg-black  text-white text-[22px] font-font1 text-pretty w-64 py-1  rounded"
        >
          Add To Cart
        </button>
      </div>
    );
  }

  if (variant === "navbar") {
    return (
      <Button onClick={onClick} className="cursor-hand p-2">
        <FaShoppingCart size={20} />
        <span className="absolute -top-2 -right-2 bg-[#c8c8c8] text-black text-xs rounded-full h-5 w-5 flex items-center justify-center cursor-pointer">
          {cart.length}
        </span>
      </Button>
    );
  }
}

export default AddToCardBtn;
