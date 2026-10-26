import { DeliveryZone } from "../models/deliveryZone.model.js";
import { DeliverySlot } from "../models/deliverySlot.model.js";
export const listZones = async (req, res) => {
  try {
    res.json({
      success: true,
      zones: await DeliveryZone.find({ isActive: true }).sort({ name: 1 }),
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const createZone = async (req, res) => {
  try {
    res
      .status(201)
      .json({ success: true, zone: await DeliveryZone.create(req.body) });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const updateZone = async (req, res) => {
  try {
    const zone = await DeliveryZone.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json({ success: true, zone });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const listSlots = async (req, res) => {
  try {
    const filter = { isActive: true };
    if (req.query.date) {
      const d = new Date(req.query.date);
      filter.date = {
        $gte: new Date(d.setHours(0, 0, 0, 0)),
        $lt: new Date(d.setHours(23, 59, 59, 999)),
      };
    }
    res.json({
      success: true,
      slots: await DeliverySlot.find(filter).sort({ date: 1, startTime: 1 }),
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const createSlot = async (req, res) => {
  try {
    res
      .status(201)
      .json({ success: true, slot: await DeliverySlot.create(req.body) });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
