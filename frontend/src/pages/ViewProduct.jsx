import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductStore } from '../store/Store'
import { useEffect } from 'react'

function ViewProduct() {


  const { id } = useParams('id');

  


  const { oneProduct, loading, error, getOneProduct } = useProductStore();

  useEffect(() => {
    getOneProduct(id);
  }, [id, getOneProduct]);




  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;



  return (
    <div>
      <img src={oneProduct.image} />
    </div>
  )
}

export default ViewProduct
