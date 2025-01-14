import AddToCardBtn from "@/components/ui/AddToCardBtn";
import Navbar from "../components/Navbar";
import { getToken } from "firebase/messaging";
import { useEffect } from "react";
import { messaging } from "@/firebase/firebase";

const Home = () => {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:
          "BEL9fSsDVxDrSbZbi5-6dcFFN9CbcSVwZHP1PJF2tbjaqOHOdXEdfqcZ0BnoJUyrAiad4LvRb2k-jBZye8gnt9s",
      });
      console.log("Token Gen", token);
      
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <div>
      <Navbar />
      <h1 className="font-font1 text-4xl">hello world</h1>
      <h1 className="font-font2 text-2xl">hello world</h1>
      <h1 className="font-font2 text-2xl">hello world</h1>
      <h1 className="font-font2 text-2xl">hello world</h1>

      <AddToCardBtn />
    </div>
  );
};

export default Home;
