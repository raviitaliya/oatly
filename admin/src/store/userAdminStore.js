import { create } from "zustand";
import { toast } from "@/hooks/use-toast";
import api from "@/api/api";
import { io } from "socket.io-client";

const API = "http://localhost:8000/api";

const socket = io("http://localhost:8000");

export const useAdminStore = create((set) => ({
  products: [],
  users: [],
  deliveryBoys: [],
  loading: false,
  error: null,

  // Add Product Action
  addProduct: async (productData, image) => {
    set({ loading: true, error: null });
    try {
      const formData = new FormData();
      Object.keys(productData).forEach((key) => {
        formData.append(key, productData[key]);
      });
      if (image) {
        formData.append("image", image);
      }

      const response = await api.post("/admin/addProduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data) {
        set((state) => ({
          products: [...state.products, response.data],
          loading: false,
        }));
        toast({
          title: "Success",
          description: "Product added successfully",
        });
        return true;
      }
    } catch (error) {
      set({
        error: error.message || "Something went wrong",
        loading: false,
      });
      toast({
        title: "Error",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
      return false;
    }
  },

  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/auth/users");
      set({ users: response.data.users, loading: false });
      console.log(response);
      
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch users",
        loading: false,
      });
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to fetch users",
        variant: "destructive",
      });
    }
  },

  deleteUser: async (userId) => {
    set({ loading: true, error: null });
    try {
      await api.delete(`/auth/users/${userId}`);
      set((state) => ({
        users: state.users.filter((user) => user._id !== userId),
        loading: false,
      }));
      toast({ title: "Success", description: "User deleted successfully" });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to delete user",
        loading: false,
      });
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to delete user",
        variant: "destructive",
      });
    }
  },

  toggleBlockUser: async (userId) => {
    set({ loading: true, error: null });
    try {
      await api.patch(`/auth/users/${userId}/block`);
      set((state) => ({
        users: state.users.map((user) =>
          user._id === userId ? { ...user, isBlocked: !user.isBlocked } : user
        ),
        loading: false,
      }));
      toast({ title: "Success", description: "User status updated" });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to update user status",
        loading: false,
      });
      toast({
        title: "Error",
        description:
          error.response?.data?.message || "Failed to update user status",
        variant: "destructive",
      });
    }
  },

  fetchDeliveryBoys: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/delivery_boy/delivery-boys");
      set({ deliveryBoys: response.data.deliveryBoys, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch delivery boys",
        loading: false,
      });
      toast({
        title: "Error",
        description:
          error.response?.data?.message || "Failed to fetch delivery boys",
        variant: "destructive",
      });
    }
  },

  deleteDeliveryBoy: async (userId) => {
    set({ loading: true, error: null });
    try {
      await api.delete(`/delivery_boy/delivery-boys/${userId}`);
      set((state) => ({
        deliveryBoys: state.deliveryBoys.filter(
          (db) => db.userId._id !== userId
        ),
        loading: false,
      }));
      toast({
        title: "Success",
        description: "Delivery boy deleted successfully",
      });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to delete delivery boy",
        loading: false,
      });
      toast({
        title: "Error",
        description:
          error.response?.data?.message || "Failed to delete delivery boy",
        variant: "destructive",
      });
    }
  },

  toggleBlockDeliveryBoy: async (userId) => {
    set({ loading: true, error: null });
    try {
      await api.patch(`/delivery_boy/delivery-boys/${userId}/block`);
      set((state) => ({
        deliveryBoys: state.deliveryBoys.map((db) =>
          db.userId._id === userId
            ? {
                ...db,
                userId: { ...db.userId, isBlocked: !db.userId.isBlocked },
              }
            : db
        ),
        loading: false,
      }));
      toast({ title: "Success", description: "Delivery boy status updated" });
    } catch (error) {
      set({
        error:
          error.response?.data?.message ||
          "Failed to update delivery boy status",
        loading: false,
      });
      toast({
        title: "Error",
        description:
          error.response?.data?.message ||
          "Failed to update delivery boy status",
        variant: "destructive",
      });
    }
  },
}));
