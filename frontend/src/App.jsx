import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
// import About from "./About";
// import Contact from "./Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
