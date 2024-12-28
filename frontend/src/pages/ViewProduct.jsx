import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../store/Store";

function ViewProduct() {
  const { id } = useParams();

  const { oneProduct, loading, error, getOneProduct, setoneProduct } = useProductStore();

  useEffect(() => {
    // Clear the previous product's data before fetching a new one
    setoneProduct(null);
    getOneProduct(id);
  }, [id, getOneProduct, setoneProduct]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!oneProduct) return <div>No product found</div>;

  return (
    <div>
      <img src={oneProduct.image} alt={oneProduct.name || "Product"} />
      <h1>{oneProduct.name}</h1>
      <p>{oneProduct.description}</p>
    </div>
  );
}

export default ViewProduct;
