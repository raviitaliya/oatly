import React from 'react'
import { useProductStore } from "../store/Store";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import {Link} from "react-router-dom"

function SoftServe() {
  const { SoftServe, loading, error, getSoftServe } = useProductStore();

  useEffect(() => {
    if (SoftServe.length === 0) {
      getSoftServe();
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <div className="flex flex-wrap gap-7 items-center">
        {SoftServe.map((product) => (
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

export default SoftServe
