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
          <Route path="/our-products" element={<Product />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
