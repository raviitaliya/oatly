import { useProductStore } from '../store/Store'
import { useEffect } from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import OatlyTv from '@/components/OatlyTv'
import Footer from '@/components/Footer'


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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-4 md:px-8 lg:px-24'>
      {chilledoatdrinks.map((product) => (
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

export default ChilledOatDrinks