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
import { getToken, onMessage } from "firebase/messaging";
import { useEffect } from "react";
import { messaging } from "@/firebase/firebase";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ResetPass from "./pages/ResetPass";
import OtpPage from "./pages/OtpPage";

function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "BEL9fSsDVxDrSbZbi5-6dcFFN9CbcSVwZHP1PJF2tbjaqOHOdXEdfqcZ0BnoJUyrAiad4LvRb2k-jBZye8gnt9s",
      });
      console.log("FCM Token:", token);

     
      await fetch("http://localhost:8000/api/notify/save-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
    } else {
      console.error("Notification permission denied");
    }
  }

  useEffect(() => {
    requestPermission();
  
    
    onMessage(messaging, (payload) => {
      console.log("Foreground notification received:", payload);
  
      const { title, body } = payload.notification;
  
     
      if (Notification.permission === "granted") {
        new Notification(title, { body });
      } else {
        alert(`${title}: ${body}`); 
      }
    });
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
          <Route path="oatly-who" element={<OatlyWho />} />
          <Route path="addToCard" element={<AddToCard />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="signIn" element={<SignIn/>} />
          <Route path="reset-password" element={<ResetPass/>} />
          <Route path="otp" element={<OtpPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
