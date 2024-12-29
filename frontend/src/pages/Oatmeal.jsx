import React from 'react'
import { useProductStore } from "../store/Store";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

function Oatmeal() {
  const { oatgurt, loading, error, getoatgurt } = useProductStore();

  useEffect(() => {
    if (oatgurt.length === 0) {
      getoatgurt();
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <div className="flex flex-wrap gap-7 items-center">
        {oatgurt.map((product) => (
          <ProductCard
            key={product._id}
            imageUrl={product.image}
            name={product.productname}
          />
        ))}
      </div>
    </div>
  );
}

export default Oatmeal
