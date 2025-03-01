// components/MyOrders.jsx
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useProductStore } from "@/store/Store";

const socket = io("http://localhost:8000", { withCredentials: true });

function MyOrders() {
  const { fetchOrders, orders, cancelOrder, loading, error } = useProductStore();
  const [trackingOrderId, setTrackingOrderId] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, [fetchOrders]);

  useEffect(() => {
    socket.on("connect", () => console.log("Socket.IO connected"));
    socket.on("connect_error", (err) => console.error("Socket.IO error:", err));
    socket.on("disconnect", () => console.log("Socket.IO disconnected"));

    socket.on("locationUpdate", (data) => {
      console.log("Received locationUpdate:", data);
      if (data.orderId === trackingOrderId) {
        console.log("Setting location to:", data.coordinates);
        setLocation(data.coordinates);
      } else {
        console.log("Mismatch - Received:", data.orderId, "Tracking:", trackingOrderId);
      }
    });

    socket.on("statusUpdate", (data) => {
      console.log("Received statusUpdate:", data);
      if (data.orderId === trackingOrderId && data.status === "Delivered") {
        console.log("Stopping tracking due to Delivered");
        setTrackingOrderId(null);
        setLocation(null);
        socket.off("locationUpdate");
      }
    });

    return () => {
      socket.off("locationUpdate");
      socket.off("statusUpdate");
    };
  }, [trackingOrderId]);

  const handleStartTracking = (orderId) => {
    const orderIdStr = orderId.toString();
    console.log("Starting tracking for:", orderIdStr);
    setTrackingOrderId(orderIdStr);
    socket.emit("trackOrder", orderIdStr); // Join the room
  };

  const handleStopTracking = () => {
    console.log("Stopping tracking for:", trackingOrderId);
    setTrackingOrderId(null);
    setLocation(null);
    socket.off("locationUpdate");
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
                      Address: {order.deliveryAddress ? `${order.deliveryAddress.address1}, ${order.deliveryAddress.city}, ${order.deliveryAddress.state}, ${order.deliveryAddress.zipcode}` : "Not specified"}
                      <br />
                      {order.createdAt ? new Date(order.createdAt).toLocaleString() : "Date not available"} - Status: {order.status}
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