import { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/admin/getAllProduct');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="pt-20 container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg shadow-lg p-4">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img 
                src={product.image} 
                alt={product.productname} 
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{product.productname}</h2>
            <p className="text-gray-600 mb-2">{product.desription}</p>
            <p className="text-lg font-bold text-blue-600">Price: {product.price}</p>
            <div className="mt-4">
              <h3 className="font-semibold">{product.heading1}</h3>
              <p className="text-gray-600">{product.desription1}</p>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">{product.heading2}</h3>
              <p className="text-gray-600">{product.desription2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;