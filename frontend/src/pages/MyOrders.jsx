import { useProductStore } from "@/store/Store";
import React, { useEffect } from "react";

function MyOrders() {
  const { fetchOrders, orders, cancelOrder, startTracking, loading, error } =
    useProductStore();
  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);
  return (
    <>
      <div className="container mx-auto p-4 h-screen w-full">
        <div>
          <h2 className="font-font1 text-xl mt-24">Your Orders</h2>
          <div className="flex ">
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {orders.length === 0 ? (
              <p>No orders yet</p>
            ) : (
              <ul>
                {orders.map((order) => (
                  <li key={order.orderId}>
                    Order #{order.orderId} {order.productImage || "hello "} - ₹{order.totalAmount}{" "}
                    - Status: {order.status}
                    {order.status === "Pending" && (
                      <button onClick={() => cancelOrder(order.orderId)}>
                        Cancel
                      </button>
                    )}
                    {["Assigned", "Out for Delivery"].includes(
                      order.status
                    ) && (
                      <button onClick={() => startTracking(order.orderId)}>
                        Track
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyOrders;
