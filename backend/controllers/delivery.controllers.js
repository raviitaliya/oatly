// controllers/deliveryBoy.controller.js
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
  const userId = req.userId;

  try {
    const deliveryBoy = await DeliveryBoy.findOne({ userId });
    if (!deliveryBoy) {
      return res
        .status(404)
        .json({ success: false, message: "Delivery boy profile not found" });
    }

    const orders = await Order.find({
      deliveryBoyId: deliveryBoy._id,
      status: { $in: ["Assigned", "Out for Delivery"] },
    }).populate("userId", "name mobile address1");

    res.status(200).json({
      success: true,
      message: "Assigned orders retrieved successfully",
      orders: orders.map((order) => ({
        orderId: order._id,
        items: order.items,
        totalAmount: order.totalAmount,
        deliveryAddress: order.deliveryAddress,
        status: order.status,
        user: order.userId,
      })),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Accept an Order
export const acceptOrder = async (req, res) => {
  const { orderId } = req.body;
  const userId = req.userId;

  try {
    const deliveryBoy = await DeliveryBoy.findOne({ userId });
    if (!deliveryBoy) {
      return res
        .status(404)
        .json({ success: false, message: "Delivery boy profile not found" });
    }

    const order = await Order.findOne({
      _id: orderId,
      deliveryBoyId: deliveryBoy._id,
      status: "Assigned",
    });
    if (!order) {
      return res.status(400).json({
        success: false,
        message: "Order not found or not assigned to you",
      });
    }

    order.status = "Out for Delivery";
    await order.save();

    res.status(200).json({
      success: true,
      message: "Order accepted successfully",
      order: {
        orderId: order._id,
        status: order.status,
        deliveryAddress: order.deliveryAddress,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Order Status and Location
export const updateOrderStatus = async (req, res) => {
  const { orderId, status, coordinates } = req.body;
  const userId = req.userId;

  try {
    const deliveryBoy = await DeliveryBoy.findOne({ userId });
    if (!deliveryBoy) {
      return res
        .status(404)
        .json({ success: false, message: "Delivery boy profile not found" });
    }

    const order = await Order.findOne({
      _id: orderId,
      deliveryBoyId: deliveryBoy._id,
    });
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found or not assigned to you",
      });
    }

    const validTransitions = {
      Assigned: ["Out for Delivery"],
      "Out for Delivery": ["Delivered"],
    };
    if (!validTransitions[order.status]?.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Cannot change status from ${order.status} to ${status}`,
      });
    }

    order.status = status;
    if (status === "Out for Delivery" && coordinates) {
      order.location.coordinates = coordinates;
      deliveryBoy.location.coordinates = coordinates; // Sync delivery boy location

      const payload = [
        {
          topic: "location-updates",
          messages: JSON.stringify({
            orderId: order._id.toString(),
            coordinates,
          }),
        },
      ];

      await new Promise((resolve, reject) => {
        producer.send(payload, (err, data) => {
          if (err) {
            console.error("Kafka send error:", err);
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    }
    if (status === "Delivered") {
      order.deliveredAt = new Date();
      deliveryBoy.totalDeliveries += 1;
      deliveryBoy.earnings += 10; // Example: $10 per delivery
    }
    await order.save();
    await deliveryBoy.save();

    res.status(200).json({
      success: true,
      message: `Order status updated to ${status}`,
      order: {
        orderId: order._id,
        status: order.status,
        location: order.location,
        deliveredAt: order.deliveredAt,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Earnings
export const getEarnings = async (req, res) => {
  const userId = req.userId;

  try {
    const deliveryBoy = await DeliveryBoy.findOne({ userId });
    if (!deliveryBoy) {
      return res
        .status(404)
        .json({ success: false, message: "Delivery boy profile not found" });
    }

    const deliveredOrders = await Order.find({
      deliveryBoyId: deliveryBoy._id,
      status: "Delivered",
    });

    const todayEarnings =
      deliveredOrders.filter(
        (order) =>
          order.deliveredAt?.toDateString() === new Date().toDateString()
      ).length * 10;

    res.status(200).json({
      success: true,
      message: "Earnings retrieved successfully",
      data: {
        totalEarnings: deliveryBoy.earnings,
        todayEarnings,
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
