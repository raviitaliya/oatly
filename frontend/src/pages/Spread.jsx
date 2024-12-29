import React from "react";
import { useProductStore } from "../store/Store";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

function Spread() {
  const { spread, loading, error, getspread } = useProductStore();

  useEffect(() => {
    if (spread.length === 0) {
      getspread();
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <div className="flex flex-wrap gap-7 items-center">
        {spread.map((product) => (
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

export default Spread;
