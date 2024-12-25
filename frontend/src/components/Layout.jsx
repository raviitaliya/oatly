import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="app-container">
      <header>
     <Navbar />
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default Layout;