import { Subscription } from "../models/subscription.model.js";
export const listSubscriptions = async (req, res) => {
  try {
    res.json({
      success: true,
      subscriptions: await Subscription.find({ userId: req.userId })
        .populate("items.productId items.variantId")
        .sort({ createdAt: -1 }),
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const createSubscription = async (req, res) => {
  try {
    const frequencyDays = Number(req.body.frequencyDays || 30);
    if (![7, 15, 30].includes(frequencyDays))
      return res
        .status(400)
        .json({
          success: false,
          message: "Frequency must be 7, 15 or 30 days",
        });
    const sub = await Subscription.create({
      ...req.body,
      userId: req.userId,
      frequencyDays,
      nextRunAt:
        req.body.nextRunAt || new Date(Date.now() + frequencyDays * 86400000),
    });
    res.status(201).json({ success: true, subscription: sub });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const updateSubscription = async (req, res) => {
  try {
    const sub = await Subscription.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true, runValidators: true },
    );
    if (!sub)
      return res
        .status(404)
        .json({ success: false, message: "Subscription not found" });
    res.json({ success: true, subscription: sub });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const cancelSubscription = async (req, res) => {
  try {
    const sub = await Subscription.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { status: "cancelled" },
      { new: true },
    );
    res.json({ success: true, subscription: sub });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
