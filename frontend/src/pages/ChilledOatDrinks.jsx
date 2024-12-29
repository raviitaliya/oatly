import { useProductStore } from '../store/Store'
import { useEffect } from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'


const ChilledOatDrinks = () => {

  const { chilledoatdrinks, loading, error, getchilledoatdrinks } = useProductStore();

  useEffect(() => {
    if (chilledoatdrinks.length === 0) {
      getchilledoatdrinks();
    }
  }, []);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div>
    <div className='flex flex-wrap gap-7 items-center'>
      {chilledoatdrinks.map((product) => (
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

export default ChilledOatDrinks