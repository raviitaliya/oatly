import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Layout from "./components/Layout";
import OatDrink from "./pages/OatDrink";
import ChilledOatDrinks from "./pages/ChilledOatDrinks";
import AllProduct from "./pages/AllProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="our-products" element={<Product />}>
          <Route path="" element={<AllProduct />} />

            <Route path="oat-drink" element={<OatDrink />} />
            <Route path="chilled-oat-drink" element={<ChilledOatDrinks />} />

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
