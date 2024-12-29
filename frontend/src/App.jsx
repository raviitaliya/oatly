import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Layout from "./components/Layout";
import OatDrink from "./pages/OatDrink";
import ChilledOatDrinks from "./pages/ChilledOatDrinks";
import AllProduct from "./pages/AllProduct";
import Cooking from "./pages/Cooking";
import Spread from "./pages/Spread";
import Oatmeal from "./pages/Oatmeal";
import IceCream from "./pages/IceCream";
import SoftServe from "./pages/SoftServe";
import ViewProduct from "./pages/ViewProduct";

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
            <Route path="cooking" element={<Cooking />} />
            <Route path="spread" element={<Spread />} />
            <Route path="oatgurt" element={<Oatmeal />} />
            <Route path="ice-cream" element={<IceCream />} />
            <Route path="soft-serve" element={<SoftServe />} />
            <Route path=":id" element={<ViewProduct />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
