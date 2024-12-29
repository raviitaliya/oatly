import { NavLink } from "react-router-dom";

const ProductNavbar = () => {
  return (
    <div>
      <div className="w-full flex justify-center pb-10">
        <ul className="flex list-none gap-14 text-lg font-font2">
          <li className="cursor-hand font-medium  ">
            <NavLink
              to="/our-products"
              end
              className={({ isActive }) =>
                `hover:border-b-2 hover:cursor-hand hover:border-black ${isActive ? "border-b-2 border-black" : ""}`
              }
            >
              All products
            </NavLink>
          </li>
          <li className="cursor-hand font-medium ">
            <NavLink
              to="/our-products/oat-drink"
              className={({ isActive }) =>
                `hover:border-b-2 hover:cursor-hand hover:border-black ${isActive ? "border-b-2 border-black" : ""}`
              }
            >
              Oat Drink
            </NavLink>
          </li>
          <li className="cursor-hand font-medium ">
            <NavLink
              to="/our-products/chilled-oat-drinks"
              className={({ isActive }) =>
                `hover:border-b-2 hover:cursor-hand hover:border-black ${isActive ? "border-b-2 border-black" : ""}`
              }
            >
              Chilled Oat Drinks
            </NavLink>
          </li>
          <li className="cursor-hand font-medium ">
            <NavLink
              to="/our-products/Cooking"
              className={({ isActive }) =>
                `hover:border-b-2 hover:cursor-hand hover:border-black ${isActive ? "border-b-2 border-black" : ""}`
              }
            >
              Cooking
            </NavLink>
          </li>
          <li className="cursor-hand font-medium ">
            <NavLink
              to="/our-products/Spread"
              className={({ isActive }) =>
                `hover:border-b-2 hover:cursor-hand hover:border-black ${isActive ? "border-b-2 border-black" : ""}`
              }
            >
              Spread
            </NavLink>
          </li>
          <li className="cursor-hand font-medium ">
            <NavLink
              to="/our-products/Oatgurt"
              className={({ isActive }) =>
                `hover:border-b-2 hover:cursor-hand hover:border-black ${isActive ? "border-b-2 border-black" : ""}`
              }
            >
              Oatgurt
            </NavLink>
          </li>
          <li className="cursor-hand font-medium ">
            <NavLink
              to="/our-products/Ice-Cream"
              className={({ isActive }) =>
                `hover:border-b-2 hover:cursor-hand hover:border-black ${isActive ? "border-b-2 border-black" : ""}`
              }
            >
              Ice Cream
            </NavLink>
          </li>
          <li className="cursor-hand font-medium ">
            <NavLink
              to="/our-products/Soft-Serve"
              className={({ isActive }) =>
                `hover:border-b-2 hover:cursor-hand hover:border-black ${isActive ? "border-b-2 border-black" : ""}`
              }
            >
              Soft Serve
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductNavbar;