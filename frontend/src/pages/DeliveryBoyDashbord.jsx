// components/DeliveryBoyDashboard.jsx
import React, { useEffect } from "react";
import { useProductStore } from "@/store/Store";

function DeliveryBoyDashboard() {
  const {
    user,
    fetchUser,
    logOut,
    fetchAssignedOrders,
    acceptOrder,
    updateOrderStatus,
    getDeliveryBoyProfile,
    assignedOrders,
    profile,
    loading,
    error,
    location,
  } = useProductStore();

  useEffect(() => {
    if (!user) fetchUser();
    fetchAssignedOrders();
    getDeliveryBoyProfile();
  }, [fetchUser, fetchAssignedOrders, getDeliveryBoyProfile]);

  if (!user || user.role !== "delivery_boy") {
    return <p>Please log in as a delivery boy</p>;
  }

  const handleMarkDelivered = (orderId) => {
    updateOrderStatus(orderId, "Delivered");
  };

  return (
    <div className="container mx-auto p-4 h-screen w-full">
      <div>
        <h1 className="font-font1 text-[44px] mt-24">Delivery Boy Dashboard</h1>
        <button onClick={logOut} className="mb-4 p-2 bg-red-500 text-white">Logout</button>
        {profile && (
          <div className="mb-4">
            <p>Welcome, {profile.fullName}!</p>
            <p>Mobile: {profile.mobile}</p>
            <p>Total Deliveries: {profile.totalDeliveries}</p>
            <p>Earnings: ₹{profile.earnings}</p>
          </div>
        )}
        <div className="flex flex-col gap-4">
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {assignedOrders.length === 0 ? (
            <p>No assigned orders</p>
          ) : (
            <ul>
              {assignedOrders.map((order) => (
                <div className="border p-5" key={order.orderId}>
                  <li className="flex items-center gap-4 mb-2">
                    <div>
                      Order Id: {order.orderId}: {order.items[0].productName} - ₹{order.totalAmount} x {order.items[0].quantity}
                      <br />
                      Address: {order.deliveryAddress ? `${order.deliveryAddress.address1}, ${order.deliveryAddress.city}, ${order.deliveryAddress.state}, ${order.deliveryAddress.zipcode}` : "Not specified"}
                      <br />
                      Customer: {order.user?.name || "Unknown"} ({order.user?.mobile || "N/A"})
                      <br />
                      {order.createdAt ? new Date(order.createdAt).toLocaleString() : "Date not available"} - Status: {order.status}
                      <button
                        onClick={() => acceptOrder(order.orderId)}
                        className="ml-2 text-green-500"
                        disabled={order.status !== "Assigned"}
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleMarkDelivered(order.orderId)}
                        className="ml-2 text-blue-500"
                        disabled={order.status !== "Out for Delivery"}
                      >
                        Mark Delivered
                      </button>
                    </div>
                  </li>
                  {order.status === "Out for Delivery" && location && (
                    <div className="mt-2">
                      <p>Current Location: Lat {location[1]}, Lng {location[0]}</p>
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

export default DeliveryBoyDashboard;