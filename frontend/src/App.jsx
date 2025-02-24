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
import OatlyWho from "./pages/OatlyWho";
import AddToCard from "./pages/AddToCard";
import { useEffect } from "react";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import ResetPass from "./auth/ResetPass";
import OtpPage from "./pages/OtpPage";
import { useProductStore } from "./store/Store";
import NewPassword from "./pages/NewPassword";
import Chackout from "./pages/Chackout";

function App() {
  const { fetchUser } = useProductStore();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="our-products" element={<Product />}>
            <Route path="" element={<AllProduct />} />
            <Route path="oat-drink" element={<OatDrink />} />
            <Route path="chilled-oat-drinks" element={<ChilledOatDrinks />} />
            <Route path="cooking" element={<Cooking />} />
            <Route path="spread" element={<Spread />} />
            <Route path="oatgurt" element={<Oatmeal />} />
            <Route path="ice-cream" element={<IceCream />} />
            <Route path="soft-serve" element={<SoftServe />} />
            <Route path=":category/:id" element={<ViewProduct />} />
          </Route>
          <Route path="/checkout" element={<Chackout />} />
          <Route path="oatly-who" element={<OatlyWho />} />
          <Route path="addToCard" element={<AddToCard />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="reset-password" element={<ResetPass />} />
          <Route path="set-newPassword/:token" element={<NewPassword />} />
          <Route path="otp" element={<OtpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
