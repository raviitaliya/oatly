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
import ThingsWeDo from "./pages/ThingsWeDo";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import CookiePolicy from "./pages/CookiePolicy";
import Accessibility from "./pages/Accessibility";
import Careers from "./pages/Careers";
import Chackout from "./pages/Chackout";
import Error from "./pages/Error";
import MyOrders from "./pages/MyOrders";
import DeliveryBoyDashbord from "./pages/DeliveryBoyDashbord";
import Formal from "./pages/Formal";
import Milkfacts from "./pages/Milkfacts";
import Oatpilot from "./pages/Oatpilot";
import Farmain from "./pages/farm/Farmain";
import FarmerShakingFarmers from "./pages/FarmerShakingFarmers";
import Dairyfacts from "./pages/Dairyfacts";
import WisconsinSupperClubSwapsDairy from "./pages/WisconsinSupperClubSwapsDairy";
import Petition from "./pages/Petition";
 

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
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/delivery-boy" element={<DeliveryBoyDashbord />} />
          {/* <Route path="/404-error" element={<Error />} /> */}
          <Route path="oatly-who" element={<OatlyWho />} />
          <Route path="things-we-do" element={<ThingsWeDo/>}/>
          <Route path="addToCard" element={<AddToCard />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="reset-password" element={<ResetPass />} />
          <Route path="set-newPassword/:token" element={<NewPassword />} />
          <Route path="otp" element={<OtpPage />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="faqs" element={<Faqs/>} />
          <Route path="cookie-policy" element={<CookiePolicy/>} />
          <Route path="accessibility" element={<Accessibility/>} />
          <Route path="career" element={<Careers/>} />
          <Route path="sustainability" element={<Formal/>} />
          <Route path="petition" element={<Petition/>} />
          <Route path="milk-myths" element={<Milkfacts/>} />
          <Route path="out-pilote" element={<Oatpilot/>} />
          <Route path="farm" element={<Farmain/>} />
          <Route path="farmer-shaking" element={<FarmerShakingFarmers/>} />
          <Route path="ditch-milk" element={<Dairyfacts/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
