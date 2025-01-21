import AddToCardBtn from "@/components/ui/AddToCardBtn";
import Navbar from "../components/Navbar";
import { useState } from "react";
import  {useProductStore}  from "@/store/Store";

const Home = () => {
  const { sendNotification, loading, error } = useProductStore();
  const [notificationData, setNotificationData] = useState({
    title: "",
    message: "",
    tokens: ['fElDgF2WNo2xr3ioh-HHen:APA91bHGqyegXpXU5FM8twzZN3rkNEn1q-TammpBQynttEevi6v4SvzwzjkU8B3ynqiamrJtobhwx5zOdWIMk8d_2JenShtxOiWUo3zc4VX9J0lTu8vS1l4'], // This should be a valid array of device tokens
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotificationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (notificationData.tokens.length === 0) {
      alert("Please provide at least one token");
      return;
    }
  
    if (!notificationData.title || !notificationData.message) {
      alert("Title and message are required");
      return;
    }
  
    const payload = {
      notification: {
        title: notificationData.title,  
        body: notificationData.message, 
      },
      tokens: notificationData.tokens, 
    };
  
    console.log("Submitting notification data:", payload); 
  
    await sendNotification(payload); 
  };
  return (
    <div>
      <Navbar />
      <h1 className="font-font1 text-4xl">hello world</h1>
      <h1 className="font-font2 text-2xl">hello world</h1>
      <h1 className="font-font2 text-2xl">hello world</h1>
      <h1 className="font-font2 text-2xl">hello world</h1>

      <AddToCardBtn />
      <h1>Send Notification</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={notificationData.title}
            onChange={handleChange}
            placeholder="Enter the notification title"
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={notificationData.message}
            onChange={handleChange}
            placeholder="Enter the notification body"
          />
        </div>
        <div>
          <label>Device Tokens (comma-separated):</label>
          <input
            type="text"
            name="tokens"
            value={notificationData.tokens.join(", ")} // Join tokens into a comma-separated string
            onChange={(e) =>
              setNotificationData({
                ...notificationData,
                tokens: e.target.value.split(",").map((token) => token.trim()), // Split into an array of tokens
              })
            }
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Notification"}
        </button>
      </form>

      {error && <p>Error: {error}</p>}
     
    </div>

    

  );
};

export default Home;
