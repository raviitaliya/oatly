import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useProductStore } from "@/store/Store";

function MyOrders() {
  const { fetchOrders, orders, cancelOrder, startTracking, stopTracking, loading, error, location } = useProductStore();
  const [trackingOrderId, setTrackingOrderId] = useState(null);

  // Fetch orders on mount and every 5 seconds
  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, [fetchOrders]);

  // Debugging: Log orders whenever they change
  useEffect(() => {
    if (orders.length > 0) {
      console.log("Current Orders in MyOrders:", orders);
    }
  }, [orders]);

  const handleStartTracking = (orderId) => {
    console.log("Starting tracking for Order ID:", orderId);
    setTrackingOrderId(orderId);
    startTracking(orderId);
  };

  const handleStopTracking = () => {
    console.log("Stopping tracking for Order ID:", trackingOrderId);
    setTrackingOrderId(null);
    stopTracking();
  };

  return (
    <div className="container mx-auto p-4 h-screen w-full">
      <h1 className="text-4xl mt-24 font-bold">My Orders</h1>
      {error && <p className="text-red-500">{error}</p>}
      {orders.length === 0 ? (
        <p className="text-gray-500">No orders yet</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {orders.map((order) => (
            <div className="border p-5 rounded-lg shadow-md" key={order.orderId}>
              <div className="flex flex-col gap-2">
                {/* Order Header */}
                <div className="flex items-center gap-4 mb-2">
                  {order.items && order.items.length > 0 && order.items[0].productImage ? (
                    <img
                      src={order.items[0].productImage}
                      alt={order.items[0].productName || "Product Image"}
                      className="w-40 h-40 object-cover rounded"
                      onError={(e) => {
                        console.log(`Image failed to load for Order #${order.orderId}`);
                        e.target.src = "/fallback-image.png"; // Add a fallback image in your public folder
                      }}
                    />
                  ) : (
                    <span className="text-gray-500">No image available</span>
                  )}
                  <div>
                    <p className="font-semibold">
                      Order #{order.orderId}
                    </p>
                    <p>
                      Total: ₹{order.totalAmount} | Status: <span className="font-medium">{order.status}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Placed on: {new Date(order.createdAt).toLocaleString()}
                    </p>
                    <p className="text-sm">
                      Address: {order.deliveryAddress?.address1 || "N/A"}, {order.deliveryAddress?.city || "N/A"},{" "}
                      {order.deliveryAddress?.state || "N/A"}, {order.deliveryAddress?.zipcode || "N/A"}
                    </p>
                  </div>
                </div>

                {/* Items List */}
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Items:</h3>
                  {order.items && order.items.length > 0 ? (
                    <ul className="list-disc ml-5">
                      {order.items.map((item, index) => (
                        <li key={index} className="text-sm">
                          {item.productName || "Unknown Product"} - ₹{item.price} x {item.quantity || "N/A"}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No items found</p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-2">
                  {order.status === "Pending" && (
                    <button
                      onClick={() => {
                        console.log(`Cancelling Order #${order.orderId}`);
                        cancelOrder(order.orderId);
                      }}
                      className="text-red-500 hover:underline"
                    >
                      Cancel
                    </button>
                  )}
                  {["Assigned", "Out for Delivery"].includes(order.status) && !trackingOrderId && (
                    <button
                      onClick={() => handleStartTracking(order.orderId)}
                      className="text-blue-500 hover:underline"
                    >
                      Track
                    </button>
                  )}
                </div>

                {/* Tracking Section */}
                {trackingOrderId === order.orderId && order.status === "Out for Delivery" && (
                  <div className="mt-4 border-t pt-4">
                    <h3 className="text-lg font-medium">Tracking Order #{order.orderId}</h3>
                    {location ? (
                      <div>
                        <p className="text-sm">
                          Delivery Location: Lat {location[1]}, Lng {location[0]}
                        </p>
                        <MapContainer center={location} zoom={13} style={{ height: "300px", width: "100%" }}>
                          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                          <Marker position={location} />
                        </MapContainer>
                      </div>
                    ) : (
                      <p className="text-gray-500">Waiting for location updates...</p>
                    )}
                    <button
                      onClick={handleStopTracking}
                      className="text-gray-500 hover:underline mt-2"
                    >
                      Stop Tracking
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyOrders;