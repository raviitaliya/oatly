import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useProductStore } from '../store/Store'
import { Link } from 'react-router-dom';

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
            name={product.productname}
            />
        </Link>
        ))}
      </div>
    </div>
  )
}

export default AllProduct;