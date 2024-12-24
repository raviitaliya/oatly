import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="app-container">
      <header>
     <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default Layout;