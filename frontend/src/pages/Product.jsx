import { useEffect, useState } from 'react';
import { useProductStore } from '../store/Store';
import { Link, Outlet, useParams,useNavigate ,useLocation} from 'react-router-dom';
import ProductNavbar from '@/components/ProductNavbar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Product = () => {
  const { products, loading, error, fetchProducts, oneProduct } = useProductStore();

  const { id } = useParams();

  const handleNavigate = (path) => {
    navigate(path);
  };


  useEffect(() => {
    setIsProduct(id);
  }, [id])


  const [IsProduct, setIsProduct] = useState(false)



  useEffect(() => {
    fetchProducts();
  }, []);



  if (loading) return <div className="pt-20 container mx-auto px-4">Loading...</div>;
  if (error) return <div className="pt-20 container mx-auto px-4">Error: {error}</div>;

  return (
    <div className="pt-20   mx-auto px-4">
      <section >
        {
          IsProduct ? <div> </div> : <ProductNavbar />
        }

        <Breadcrumb className="mb-6 z-50 relative !mt-[-66px] ml-16 font-font2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => handleNavigate('/our-products')} >
                Products
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => handleNavigate(`/our-products/${oneProduct.category}`)}>
                {oneProduct.category}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{oneProduct.productname}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

      </section>
      <section className='mt-2'>
        <Outlet />
      </section>
    </div>
  );
};

export default Product;