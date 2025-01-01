import React from "react";
import ViewProduct from "./ViewProduct";

const ProductCard = ({ imageUrl, name, price }) => {
  return (
    <div
      className="h-[450px]name w-[350px] hover:cursor-hand"
    >
      <div className="w-[full] ">
        <img className="w-full h-[400px] object-contain" src={imageUrl} />
      </div>
      <p className="font-font2 text-[22px] text-center "><span className="pr-1">₹</span>{price}</p>
      <p className="font-font2 text-[18px] text-center text-black/60">{name}</p>
    </div>
  );
};

export default ProductCard;
