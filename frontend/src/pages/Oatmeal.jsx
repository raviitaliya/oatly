import React from 'react'
import { useProductStore } from "../store/Store";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import {Link} from "react-router-dom"

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
          <Link key={product._id} to={`/our-products/${product.category.replace(/\s+/g, '-').toLowerCase()}/${product._id}`}>
          <ProductCard
            key={product._id}
            imageUrl={product.image}
            price={product.price}
            name={product.productname}
          />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Oatmeal
