import { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useProductStore } from '../store/Store'
import { Link } from 'react-router-dom';
import OatlyTv from '@/components/OatlyTv';
import Footer from '@/components/Footer';

const AllProduct = () => {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, []);
  console.log(products);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className='flex flex-wrap gap-7 items-center'>
        {products.map((product) => (
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
      <OatlyTv/>
      <Footer/>
    </div>
  )
}

export default AllProduct;