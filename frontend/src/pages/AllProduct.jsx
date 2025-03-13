import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useProductStore } from "../store/Store";
import { Link } from "react-router-dom";
import OatlyTv from "@/components/OatlyTv";
import Footer from "@/components/Footer";
import MainImage from "../assets/Footer/AllProductPage.jpg";

const AllProduct = () => {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, []);
  console.log(products);

  // if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-4 md:px-8 lg:px-24">
        <img src={MainImage} className="w-full max-w-[700px] md:col-span-2 lg:col-span-2 object-cover" />

        {products.map((product) => (
          <Link
            key={product._id}
            to={`/our-products/${product.category
              .replace(/\s+/g, "-")
              .toLowerCase()}/${product._id}`}
          >
            <ProductCard
              key={product._id}
              imageUrl={product.image}
              price={product.price}
              name={product.productname}
            />
          </Link>
        ))}
      </div>
      <OatlyTv />
      <Footer />
    </div>
  );
};

export default AllProduct;
