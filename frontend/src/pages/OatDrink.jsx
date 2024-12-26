import { useProductStore } from '../store/Store'
import { useEffect } from 'react'
import ProductCard from './ProductCard'


const Oatdrink = () => {

  const { oatDrinkProducts, loading, error, getOatDrink } = useProductStore();

  useEffect(() => {
    if (oatDrinkProducts.length === 0) {
      getOatDrink();
    }
  }, []);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
    <div className='flex flex-wrap gap-7 items-center'>
      {oatDrinkProducts.map((product) => (
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

export default Oatdrink