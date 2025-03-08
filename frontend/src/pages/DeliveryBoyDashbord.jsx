import { useProductStore } from "@/store/Store";
import React, { useEffect, useState } from "react";

function DeliveryBoyDashboard() {
  const {
    profile,
    assignedOrders,
    loading,
    error,
    fetchAssignedOrders,
    acceptOrder,
    updateOrderStatus,
    getDeliveryBoyProfile,
    isAvailable,
    toggleAvailability,
  } = useProductStore();

  const [activeOrderId, setActiveOrderId] = useState(null);
  const [deliveryInterval, setDeliveryInterval] = useState(null);

  useEffect(() => {
    getDeliveryBoyProfile();
    fetchAssignedOrders();
  }, [getDeliveryBoyProfile, fetchAssignedOrders]);

  useEffect(() => {
    if (isAvailable) {
      const interval = setInterval(fetchAssignedOrders, 10000);
      return () => clearInterval(interval);
    }
  }, [isAvailable, fetchAssignedOrders]);

  const handleAcceptOrder = (orderId) => {
    console.log("Accepting Order:", orderId);
    acceptOrder(orderId);
  };

  const handleStartDelivery = (orderId) => {
    console.log("Starting Delivery for Order:", orderId);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coordinates = [
          position.coords.longitude,
          position.coords.latitude,
        ];
        updateOrderStatus(orderId, "Out for Delivery", coordinates);
        setActiveOrderId(orderId);

        const interval = setInterval(() => {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              const newCoords = [pos.coords.longitude, pos.coords.latitude];
              console.log("Sending new coordinates:", newCoords);
              updateOrderStatus(orderId, "Out for Delivery", newCoords);
            },
            (err) => console.error("Geolocation Error:", err)
          );
        }, 10000);
        setDeliveryInterval(interval);
      },
      (err) => {
        console.error("Geolocation Error:", err);
        updateOrderStatus(orderId, "Out for Delivery");
      }
    );
  };

  const handleMarkDelivered = (orderId) => {
    console.log("Marking Order as Delivered:", orderId);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coordinates = [
          position.coords.longitude,
          position.coords.latitude,
        ];
        updateOrderStatus(orderId, "Delivered", coordinates);
        if (deliveryInterval) {
          clearInterval(deliveryInterval);
          setDeliveryInterval(null);
        }
        setActiveOrderId(null);
      },
      (err) => {
        console.error("Geolocation Error:", err);
        updateOrderStatus(orderId, "Delivered");
        if (deliveryInterval) {
          clearInterval(deliveryInterval);
          setDeliveryInterval(null);
        }
        setActiveOrderId(null);
      }
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Delivery Boy Dashboard</h1>
      {profile && (
        <div className="mb-6">
          <p className="text-lg">Welcome, {profile.fullName}</p>
          <p>Availability: {isAvailable ? "Available" : "Unavailable"}</p>
          <button
            onClick={toggleAvailability}
            className={`mt-2 px-4 py-2 rounded ${
              isAvailable ? "bg-red-500" : "bg-green-500"
            } text-white`}
          >
            {isAvailable ? "Go Offline" : "Go Online"}
          </button>
        </div>
      )}
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <h2 className="text-2xl font-semibold mb-2">Assigned Orders</h2>
      {assignedOrders.length === 0 ? (
        <p className="text-gray-500">No orders available</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {assignedOrders.map((order) => (
            <li key={order.orderId} className="border p-4 rounded-lg shadow-md">
              <p className="font-semibold">Order #{order.orderId}</p>
              <p>
                Customer: {order.customerName} ({order.customerMobile})
              </p>
              <p>Total: ₹{order.totalAmount}</p>
              <p>Status: {order.status}</p>
              <p>
                Address: {order.deliveryAddress.address1},{" "}
                {order.deliveryAddress.city}
              </p>
              <div className="mt-2">
                {order.items.map((item, index) => (
                  <p key={index} className="text-sm">
                    {item.productName} - ₹{item.price} x {item.quantity}
                  </p>
                ))}
              </div>
              <div className="mt-2 flex gap-2">
                {order.status === "Pending" && (
                  <button
                    onClick={() => handleAcceptOrder(order.orderId)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Accept Order
                  </button>
                )}
                {order.status === "Assigned" && (
                  <button
                    onClick={() => handleStartDelivery(order.orderId)}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Start Delivery
                  </button>
                )}
                {order.status === "Out for Delivery" && (
                  <button
                    onClick={() => handleMarkDelivered(order.orderId)}
                    className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                  >
                    Mark as Delivered
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DeliveryBoyDashboard;
