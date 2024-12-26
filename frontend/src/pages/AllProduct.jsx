import React from 'react'
import ProductCard from './ProductCard'

const AllProduct = () => {
  return (
    <div>
      <div className='flex  flex-wrap gap-6 justify-center items-center'>

      <ProductCard/>  
      <ProductCard/>  
      <ProductCard/>  
      <ProductCard/>  
      <ProductCard/>  
      <ProductCard/>  

      </div>
    </div>
  )
}

export default AllProduct