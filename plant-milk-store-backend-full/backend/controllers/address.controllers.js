import { Address } from "../models/address.model.js";
export const listAddresses = async (req, res) => {
  try {
    res.json({
      success: true,
      addresses: await Address.find({ userId: req.userId }).sort({
        isDefault: -1,
        createdAt: -1,
      }),
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
export const createAddress = async (req, res) => {
  try {
    if (req.body.isDefault)
      await Address.updateMany(
        { userId: req.userId },
        { $set: { isDefault: false } },
      );
    const address = await Address.create({ ...req.body, userId: req.userId });
    res.status(201).json({ success: true, address });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const updateAddress = async (req, res) => {
  try {
    if (req.body.isDefault)
      await Address.updateMany(
        { userId: req.userId },
        { $set: { isDefault: false } },
      );
    const address = await Address.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true, runValidators: true },
    );
    if (!address)
      return res
        .status(404)
        .json({ success: false, message: "Address not found" });
    res.json({ success: true, address });
  } catch (e) {
    res.status(400).json({ success: false, message: e.message });
  }
};
export const deleteAddress = async (req, res) => {
  try {
    const address = await Address.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });
    if (!address)
      return res
        .status(404)
        .json({ success: false, message: "Address not found" });
    res.json({ success: true, message: "Address deleted" });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
