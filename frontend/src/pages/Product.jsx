import { useEffect, useState } from "react";
import { useProductStore } from "../store/Store";
import { Outlet, useParams } from "react-router-dom";
import ProductNavbar from "@/components/ProductNavbar";

const Product = () => {
  const { loading, error, fetchProducts } = useProductStore();

  const { id } = useParams();

  useEffect(() => {
    setIsProduct(id);
  }, [id]);

  const [IsProduct, setIsProduct] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading)
    return <div className="pt-20 container mx-auto px-4">Loading...</div>;
  if (error)
    return <div className="pt-20 container mx-auto px-4">Error: {error}</div>;

  return (
    <div className="pt-20 mx-auto ">
      <section>{IsProduct ? <div> </div> : <ProductNavbar />}</section>
      <section className="mt-2">
        <Outlet />
      </section>
    </div>
  );
};

export default Product;
