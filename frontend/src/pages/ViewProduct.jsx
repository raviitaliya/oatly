import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductStore } from '../store/Store'
import { useEffect } from 'react'

function ViewProduct() {


  const { id } = useParams('id');


  const { oneProduct, loading, error, getOneProduct } = useProductStore();

  useEffect(() => {
    // Clear the previous product's data before fetching a new one
    setoneProduct(null);
    getOneProduct(id);
  }, [id, getOneProduct, setoneProduct]);



  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;



  return (
    <div>
      <img src={oneProduct.image} />
    </div>
  )
}

export default ViewProduct
