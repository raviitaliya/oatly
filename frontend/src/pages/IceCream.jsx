import React from "react";
import { useProductStore } from "../store/Store";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import {Link} from "react-router-dom"

function IceCream() {
  const { IceCream, loading, error, getIceCream } = useProductStore();

  useEffect(() => {
    if (IceCream.length === 0) {
      getIceCream();
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <div className="flex flex-wrap gap-7 items-center">
        {IceCream.map((product) => (
          <Link key={product._id} to={`/our-products/${product.category.replace(/\s+/g, '-').toLowerCase()}/${product._id}`}>
            <ProductCard
              key={product._id}
              imageUrl={product.image}
              name={product.productname}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default IceCream;
