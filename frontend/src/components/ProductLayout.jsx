import { Link } from "react-router-dom";
import Navbar from "./Navbar";
// import ProductNavbar from "./ProductNavbar";

function ProductLayout({ children }) {
  return (
    <div className="app-container">
      <header>
     <Navbar />
     {/* <ProductNavbar/> */}
      </header>
      <main>
        {children}
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default ProductLayout;