import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useProductStore } from '../store/Store'

const AllProduct = () => {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    if (products === 0) {
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
          <ProductCard
            key={product._id}
            imageUrl={product.image}
            name={product.productname}
          />
        ))}
      </div>
    </div>
  )
}

export default AllProduct;