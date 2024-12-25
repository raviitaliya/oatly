import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const ProductNavbar = () => {
  return (
    <div>

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
    </div>
  )
}

export default ProductNavbar