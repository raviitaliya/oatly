import { Link, NavLink } from 'react-router-dom';

const ProductNavbar = () => {
  return (
    <div>
      <div className='w-full flex  justify-center pb-10 '>
        <ui className="flex list-none gap-14 text-lg font-font2 m-[]">
          <Link to='/our-products'>
            <li className='cursor-hand hover:border-b-2 border-black font-medium m-[10px]'>All products</li>
          </Link>
          <NavLink to='/our-products/oat-drink'>
            <li className='cursor-hand hover:border-b-2 border-black font-medium m-[10px]'>Oat Drink</li>
          </NavLink>
          <Link to='/our-products/chilled-oat-drink' className={({ isActive }) =>
            ` ${isActive ? ":border-b-2" : "border-none"}`}>
            <li className='cursor-hand hover:border-b-2 border-black font-medium m-[10px]'>Chilled Oat Drinks</li>
          </Link>
          <Link to='/our-products/Cooking'>
            <li className='cursor-hand hover:border-b-2 border-black font-medium m-[10px]'>Cooking</li>
          </Link>
          <Link to='/our-products/Spread'>
            <li className='cursor-hand hover:border-b-2 border-black font-medium m-[10px]'>Spread</li>
          </Link>
          <Link to='/our-products/Oatmeal'>
            <li className='cursor-hand hover:border-b-2 border-black font-medium m-[10px]'>Oatmeal</li>
          </Link>
          <Link to='/our-products/Ice-Cream'>
            <li className='cursor-hand hover:border-b-2 border-black font-medium m-[10px]'>Ice Cream</li>
          </Link>
          <Link to='/our-products/Soft-Serve'>
            <li className='cursor-hand hover:border-b-2 border-black font-medium m-[10px]'>Soft Serve</li>
          </Link>
        </ui>
      </div>
    </div>
  )
}

export default ProductNavbar