import React from "react";
import { useProductStore } from "../store/Store";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

function Cooking() {
  const { cooking, loading, error, getcooking } = useProductStore();

  useEffect(() => {
    if (cooking.length === 0) {
      getcooking();
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <div className="flex flex-wrap gap-7 items-center">
        {cooking.map((product) => (
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

export default Cooking;
