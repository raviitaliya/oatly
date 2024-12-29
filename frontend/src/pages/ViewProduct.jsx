import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../store/Store";

function ViewProduct() {
  const { id } = useParams();
  const { oneProduct, loading, error, getOneProduct, setClearState } = useProductStore();

  useEffect(() => {
    
    if (oneProduct && oneProduct._id === id) return;

    setClearState();
    getOneProduct(id);
  }, [id, oneProduct, getOneProduct, setClearState]); 


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
