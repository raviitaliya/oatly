import { useEffect } from 'react';
import { useProductStore } from '../store/Store';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Product = () => {
  const { products, loading, error, fetchProducts } = useProductStore();

  const pathname = useLocation().pathname

  useEffect(() => {
    fetchProducts();
  }, []);



  if (loading) return <div className="pt-20 container mx-auto px-4">Loading...</div>;
  if (error) return <div className="pt-20 container mx-auto px-4">Error: {error}</div>;

  return (
    <div className="pt-20 container mx-auto px-4">
      <div className='w-full flex  justify-center pb-10 '>
        <ui className="flex list-none gap-14 text-lg font-font2">
          <Link>
            <li className='cursor-hand hover:border-b-2 border-black font-medium p-[2px]'>All products</li>
          </Link>
          <Link to='/oat-drink'>
            <li className='cursor-hand hover:border-b-2 border-black font-medium p-[2px]'>Oat Drink</li>
          </Link>
          <Link to='/chilled-oat-drink' className={({ isActive }) =>
                  `hover:border-b-2 ${isActive ? ":border-b-2" : "border-none"}`}>
            <li className='cursor-hand hover:border-b-2 border-black font-medium p-[2px]'>Chilled Oat Drinks</li>
          </Link>
          <Link to='/oat-drink'>
            <li className='cursor-hand hover:border-b-2 border-black font-medium p-[2px]'>Cooking</li>
          </Link>
          <Link to='/oat-drink'>
            <li className='cursor-hand hover:border-b-2 border-black font-medium p-[2px]'>Spread</li>
          </Link>
          <Link to='/oat-drink'>
            <li className='cursor-hand hover:border-b-2 border-black font-medium p-[2px]'>Oatmeal</li>
          </Link>
          <Link >
            <li className='cursor-hand hover:border-b-2 border-black font-medium p-[2px]'>Ice Cream</li>
          </Link>
          <Link >
            <li className='cursor-hand hover:border-b-2 border-black font-medium p-[2px]'>Soft Serve</li>
          </Link>
        </ui>
      </div>





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