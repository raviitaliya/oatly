// components/MyOrders.jsx
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useProductStore } from "@/store/Store";

function MyOrders() {
  const { fetchOrders, orders, cancelOrder, loading, error } = useProductStore();
  const [trackingOrderId, setTrackingOrderId] = useState(null);
  const [location, setLocation] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, [fetchOrders]);

  useEffect(() => {
    const socketInstance = io("http://localhost:8000", { withCredentials: true });
    setSocket(socketInstance);

    socketInstance.on("connect", () => console.log("Socket.IO connected"));
    socketInstance.on("connect_error", (err) => console.error("Socket.IO error:", err));
    socketInstance.on("disconnect", () => console.log("Socket.IO disconnected"));

    socketInstance.on("locationUpdate", (data) => {
      console.log("Received locationUpdate:", data);
      if (data.orderId === trackingOrderId) {
        console.log("Setting location to:", data.coordinates);
        setLocation(data.coordinates);
      } else {
        console.log("Mismatch - Received:", data.orderId, "Tracking:", trackingOrderId);
      }
    });

    socketInstance.on("statusUpdate", (data) => {
      console.log("Received statusUpdate:", data);
      if (data.orderId === trackingOrderId && data.status === "Delivered") {
        console.log("Stopping tracking due to Delivered");
        setTrackingOrderId(null);
        setLocation(null);
        socketInstance.off("locationUpdate");
      }
    });

    return () => {
      socketInstance.disconnect();
    };
  }, [trackingOrderId]);

  const handleStartTracking = (orderId) => {
    if (!socket) {
      console.error("Socket not initialized");
      return;
    }
    const orderIdStr = orderId.toString();
    console.log("Starting tracking for:", orderIdStr);
    setTrackingOrderId(orderIdStr);
    socket.emit("trackOrder", orderIdStr);
  };

  const handleStopTracking = () => {
    if (!socket) return;
    console.log("Stopping tracking for:", trackingOrderId);
    socket.off("locationUpdate");
    setTrackingOrderId(null);
    setLocation(null);
  };

  return (
    <div className="container mx-auto p-4 h-screen w-full">
      <div>
        <h1 className="font-font1 text-[44px] mt-24">My Orders</h1>
        <div className="flex flex-col gap-4">
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {orders.length === 0 ? (
            <p>No orders yet</p>
          ) : (
            <ul>
              {orders.map((order) => (
                <div className="border p-5" key={order.orderId}>
                  <li className="flex items-center gap-4 mb-2">
                    {order.items && order.items.length > 0 && order.items[0].productImage ? (
                      <img
                        src={order.items[0].productImage}
                        alt={order.items[0].productName || `Order #${order.orderId}`}
                        className="w-[10rem] h-[10rem] object-cover"
                      />
                    ) : (
                      <span>No image available</span>
                    )}
                    <div>
                      Order Id: {order.orderId}: {order.items[0].productName} - ₹{order.totalAmount} x {order.items[0].quantity}
                      <br />
                      {new Date(order.createdAt).toLocaleString()} - Status: {order.status}
                      {order.status === "Pending" && (
                        <button
                          onClick={() => cancelOrder(order.orderId)}
                          className="ml-2 text-red-500"
                        >
                          Cancel
                        </button>
                      )}
                      {["Assigned", "Out for Delivery"].includes(order.status) && !trackingOrderId && (
                        <button
                          onClick={() => handleStartTracking(order.orderId)}
                          className="ml-2 text-blue-500"
                        >
                          Track
                        </button>
                      )}
                    </div>
                  </li>
                  {trackingOrderId === order.orderId && order.status === "Out for Delivery" && (
                    <div className="mt-2">
                      <h3>Tracking Order #{order.orderId}</h3>
                      {console.log("Rendering UI with location:", location)}
                      {location ? (
                        <div>
                          <p>Delivery Boy Location: Lat {location[1]}, Lng {location[0]}</p>
                          <MapContainer center={location} zoom={13} style={{ height: "300px", width: "100%" }}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={location} />
                          </MapContainer>
                        </div>
                      ) : (
                        <p>Waiting for location updates...</p>
                      )}
                      <button onClick={handleStopTracking} className="text-gray-500 mt-2">
                        Stop Tracking
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyOrders;