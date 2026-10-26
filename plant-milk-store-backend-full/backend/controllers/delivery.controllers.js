import { DeliveryBoy } from "../models/deliveryProfile.model.js";
import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";

// Get Delivery Boy Profile
export const getDeliveryBoyProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const deliveryBoy = await DeliveryBoy.findOne({ userId }).populate(
      "userId",
      "email username"
    );
    if (!deliveryBoy) {
      return res
        .status(404)
        .json({ success: false, message: "Delivery boy profile not found" });
    }

    res.status(200).json({
      success: true,
      message: "Profile retrieved successfully",
      profile: {
        fullName: deliveryBoy.fullName,
        mobile: deliveryBoy.mobile,
        vehicleDetails: deliveryBoy.vehicleDetails,
        isAvailable: deliveryBoy.isAvailable,
        location: deliveryBoy.location,
        totalDeliveries: deliveryBoy.totalDeliveries,
        earnings: deliveryBoy.earnings,
        status: deliveryBoy.status,
        email: deliveryBoy.userId.email,
        username: deliveryBoy.userId.username,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create Delivert Boy Profile
export const createDeliveryBoyProfile = async (req, res) => {
  const { fullName, mobile, vehicleDetails, latitude, longitude } = req.body;
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    // Check if the user is a delivery boy
    if (!user || user.role !== "delivery_boy") {
      return res
        .status(400)
        .json({ success: false, message: "Invalid user or role" });
    }

    const existingProfile = await DeliveryBoy.findOne({ userId });
    if (existingProfile) {
      return res.status(400).json({
        success: false,
        message: "Delivery boy profile already exists",
      });
    }

    const deliveryBoyData = {
      userId,
      fullName,
      mobile,
      vehicleDetails,
    };

    // Only add location if coordinates are provided
    if (latitude !== undefined && longitude !== undefined) {
      deliveryBoyData.location = {
        type: "Point",
        coordinates: [longitude, latitude], // GeoJSON order: [longitude, latitude]
      };
    }

    const deliveryBoy = new DeliveryBoy(deliveryBoyData);
    await deliveryBoy.save();

    res.status(201).json({
      success: true,
      message: "Delivery boy profile created successfully",
      profile: deliveryBoy,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Delivery Boy Profile
export const updateDeliveryBoyProfile = async (req, res) => {
  const userId = req.userId;
  const { fullName, mobile, vehicleDetails, isAvailable, location } = req.body;

  try {
    const deliveryBoy = await DeliveryBoy.findOne({ userId });
    if (!deliveryBoy) {
      return res
        .status(404)
        .json({ success: false, message: "Delivery boy profile not found" });
    }

    if (fullName) deliveryBoy.fullName = fullName;
    if (mobile) deliveryBoy.mobile = mobile;
    if (vehicleDetails) deliveryBoy.vehicleDetails = vehicleDetails;
    if (typeof isAvailable !== "undefined")
      deliveryBoy.isAvailable = isAvailable;
    if (location) deliveryBoy.location.coordinates = location;

    await deliveryBoy.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      profile: deliveryBoy,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Assigned Orders
export const getAssignedOrders = async (req, res) => {
  const deliveryBoyId = req.userId; // Assuming middleware sets this from JWT

  try {
    // Fetch orders that are "Pending" (unassigned) or assigned to this delivery boy
    const orders = await Order.find({
      $or: [
        { status: "Pending" }, // Available for any delivery boy
        { deliveryBoyId, status: { $in: ["Assigned", "Out for Delivery"] } }, // Assigned to this delivery boy
      ],
    }).populate("userId", "name mobile");

    console.log("Orders for Delivery Boy:", orders); // Debug log

    res.status(200).json({
      success: true,
      orders: orders.map((order) => ({
        orderId: order._id,
        items: order.items,
        totalAmount: order.totalAmount,
        deliveryAddress: order.deliveryAddress,
        status: order.status,
        createdAt: order.createdAt,
        customerName: order.userId?.name || "Unknown",
        customerMobile: order.userId?.mobile || "N/A",
      })),
    });
  } catch (error) {
    console.error("Error in getAssignedOrders:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Accept an Order
export const acceptOrder = async (req, res) => {
  const { orderId } = req.body;
  const deliveryBoyId = req.userId;

  try {
    const order = await Order.findById(orderId);
    console.log("Order Found:", order); // Debug log

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }
    if (order.status !== "Pending") {
      return res
        .status(400)
        .json({ success: false, message: "Order is not available to accept" });
    }
    if (
      order.deliveryBoyId &&
      order.deliveryBoyId.toString() !== deliveryBoyId.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "Order already assigned to another delivery boy",
      });
    }

    order.deliveryBoyId = deliveryBoyId;
    order.status = "Assigned";
    order.assignedAt = new Date();
    await order.save();

    console.log("Order Accepted:", order); // Debug log
    res.status(200).json({ success: true, message: "Order accepted", order });
  } catch (error) {
    console.error("Error in acceptOrder:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Order Status and Location
export const updateOrderStatus = async (req, res) => {
  const { orderId, status, coordinates } = req.body;
  const deliveryBoyId = req.userId;

  try {
    const order = await Order.findById(orderId);
    console.log("Order Before Update:", order);

    if (!order)
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    if (order.deliveryBoyId.toString() !== deliveryBoyId.toString()) {
      return res
        .status(403)
        .json({ success: false, message: "Order not assigned to you" });
    }
    if (!["Assigned", "Out for Delivery", "Delivered"].includes(status)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid status" });
    }

    order.status = status;
    if (coordinates) order.location.coordinates = coordinates;
    if (status === "Delivered") order.deliveredAt = new Date();
    await order.save();

    console.log("Order After Update:", order);

    res.status(200).json({
      success: true,
      message: "Order status updated",
      order: {
        orderId: order._id,
        status: order.status,
        coordinates: order.location.coordinates,
      },
    });
  } catch (error) {
    console.error("Error in updateOrderStatus:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Earnings
export const getEarnings = async (req, res) => {
  const userId = req.userId;
  console.log(userId);

  try {
    const deliveryBoy = await DeliveryBoy.findOne({ userId });
    if (!deliveryBoy) {
      return res
        .status(404)
        .json({ success: false, message: "Delivery boy not found" });
    }

    res.status(200).json({
      success: true,
      data: {
        totalEarnings: deliveryBoy.earnings,
        totalDeliveries: deliveryBoy.totalDeliveries,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Toggle Availability
export const toggleAvailability = async (req, res) => {
  const userId = req.userId;
  
  try {
    const deliveryBoy = await DeliveryBoy.findOne({ userId });
    if (!deliveryBoy) {
      return res
        .status(404)
        .json({ success: false, message: "Delivery boy profile not found" });
    }

    deliveryBoy.isAvailable = !deliveryBoy.isAvailable;
    await deliveryBoy.save();

    res.status(200).json({
      success: true,
      message: `Availability set to ${
        deliveryBoy.isAvailable ? "online" : "offline"
      }`,
      isAvailable: deliveryBoy.isAvailable,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// fetch All Delivery Boys
export const fetchAllDeliveryBoy = async (req, res) => {
  try {
    const deliveryBoys = await DeliveryBoy.find().populate(
      "userId",
      "name email"
    );
    res.status(200).json({ success: true, deliveryBoys });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const bolckToggleDeliveryBoy = async (req, res) => {
  try {
    const { userId } = req.params;
    const deliveryBoy = await DeliveryBoy.findOne({ userId }).populate(
      "userId"
    );
    if (!deliveryBoy || !deliveryBoy.userId) {
      return res
        .status(404)
        .json({ success: false, message: "Delivery boy not found" });
    }
    const user = deliveryBoy.userId;
    user.isBlocked = !user.isBlocked; // Toggle block status
    await user.save();
    res.status(200).json({
      success: true,
      message: `Delivery boy ${
        user.isBlocked ? "blocked" : "unblocked"
      } successfully`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
