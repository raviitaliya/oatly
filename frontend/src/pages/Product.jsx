import { useEffect } from 'react';
import { useProductStore } from '../store/Store';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import ProductNavbar from '@/components/ProductNavbar';

const Product = () => {
  const { products, loading, error, fetchProducts } = useProductStore();


  useEffect(() => {
    fetchProducts();
  }, []);



  if (loading) return <div className="pt-20 container mx-auto px-4">Loading...</div>;
  if (error) return <div className="pt-20 container mx-auto px-4">Error: {error}</div>;

  return ( 
    <div className="pt-20 container  mx-auto px-4">
      <section >
        <ProductNavbar />
      </section>
      <section className='mt-2'>
        <Outlet />
      </section>
    </div>
  );
};

export default Product;