import React, { useEffect } from "react";
import { useParams, Link ,useNavigate} from "react-router-dom";
import { useProductStore } from "../store/Store";


function ViewProduct() {
  const navigate = useNavigate();
  const { id, category } = useParams();
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
    <div className="">
   

      <img src={oneProduct.image} alt={oneProduct.productname || "Product"} />
      <h1>{oneProduct.productname}</h1>
      <p>{oneProduct.description}</p>
    </div>
  );
}

export default ViewProduct;
