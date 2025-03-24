import { create } from "zustand";
import { toast } from "@/hooks/use-toast";
import api from "@/api/api";
import { io } from "socket.io-client";

const API = "http://localhost:8000/api";

const socket = io("http://localhost:8000");

export const useAdminStore = create((set) => ({
  products: [],
  users: [],
  orders: [],
  deliveryBoys: [],
  loading: false,
  error: null,
  dashboardStats: {
    totalRevenue: 0,
    activeDeliveryPartners: 0,
    activeOrders: 0,
    totalUsers: 0,
    newUsers: 0,
    revenueGrowth: 0
  },
  salesData: {
    labels: [],
    datasets: [{
      label: 'Monthly Revenue',
      data: [],
      backgroundColor: 'rgba(29, 78, 216, 0.5)',
      borderColor: 'rgb(29, 78, 216)',
      borderWidth: 1
    }]
  },
  deliveryData: {
    labels: [],
    datasets: [{
      label: 'Deliveries',
      data: [],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  recentActivity: {
    orders: [],
    topDeliveryPartners: []
  },
  inventoryStats: {
    lowStock: [],
    categoryDistribution: [],
    productPerformance: []
  },
  realtimeStats: {
    orders: {
      newOrders: 0,
      processingOrders: 0,
      deliveredOrders: 0,
      totalRevenue: 0
    },
    activeDeliveryPartners: 0
  },

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

  fetchOrders: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/orders/");
      // console.log("Responser",response);
      
      set({ orders: response.data.orders, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch orders",
        loading: false,
      });
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to fetch orders",
        variant: "destructive",
      });
    }
  },

  updateOrderStatus: async (orderId, status) => {
    set({ loading: true, error: null });
    try {
      const response = await api.patch(`/orders/${orderId}/status`, { status });
      set((state) => ({
        orders: state.orders.map((order) =>
          order._id === orderId ? { ...order, status } : order
        ),
        loading: false,
      }));
      toast({ title: "Success", description: "Order status updated" });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to update order status",
        loading: false,
      });
      toast({
        title: "Error",
        description:
          error.response?.data?.message || "Failed to update order status",
        variant: "destructive",
      });
    }
  },

  assignDeliveryBoy: async (orderId, deliveryBoyId) => {
    set({ loading: true, error: null });
    try {
      const response = await api.patch(
        `/orders/${orderId}/assign-delivery-boy`,
        { deliveryBoyId }
      );
      set((state) => ({
        orders: state.orders.map((order) =>
          order._id === orderId
            ? { ...order, deliveryBoyId, status: "Out for Delivery" }
            : order
        ),
        loading: false,
      }));
      toast({ title: "Success", description: "Delivery boy assigned" });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to assign delivery boy",
        loading: false,
      });
      toast({
        title: "Error",
        description:
          error.response?.data?.message || "Failed to assign delivery boy",
        variant: "destructive",
      });
    }
  },

  fetchDashboardStats: async () => {
    set({ loading: true, error: null });
    try {
      const [statsRes, inventoryRes] = await Promise.all([
        api.get('/admin/dashboard/stats'),
        api.get('/admin/dashboard/inventory')
      ]);

      if (statsRes.data.success) {
        const { overview, charts, recentActivity } = statsRes.data.data;

        // Initialize with empty arrays if data is undefined
        const safeRecentActivity = {
          orders: recentActivity?.orders || [],
          topDeliveryPartners: recentActivity?.topDeliveryPartners || []
        };

        set({
          dashboardStats: {
            totalRevenue: overview?.totalRevenue || 0,
            activeDeliveryPartners: overview?.activeDeliveryPartners || 0,
            activeOrders: overview?.activeOrders || 0,
            totalUsers: overview?.totalUsers || 0,
            newUsers: overview?.newUsers || 0,
            revenueGrowth: overview?.revenueGrowth || 0
          },
          salesData: {
            labels: charts?.monthlyRevenue?.map(item => item._id) || [],
            datasets: [{
              label: 'Monthly Revenue',
              data: charts?.monthlyRevenue?.map(item => item.revenue) || [],
              backgroundColor: 'rgba(29, 78, 216, 0.5)',
              borderColor: 'rgb(29, 78, 216)',
              borderWidth: 1
            }]
          },
          deliveryData: {
            labels: charts?.deliveryAnalytics?.map(item => item._id) || [],
            datasets: [{
              label: 'Deliveries',
              data: charts?.deliveryAnalytics?.map(item => item.deliveries) || [],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          },
          recentActivity: safeRecentActivity
        });
      }

      if (inventoryRes.data.success) {
        set({
          inventoryStats: inventoryRes.data.data || {}
        });
      }

      set({ loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch dashboard data",
        loading: false
      });
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to fetch dashboard data",
        variant: "destructive"
      });
    }
  },

  fetchRealtimeStats: async () => {
    try {
      const response = await api.get('/admin/dashboard/realtime');
      
      if (response.data.success) {
        set({
          realtimeStats: response.data.data
        });
      }
    } catch (error) {
      console.error('Error fetching realtime stats:', error);
      // Don't show toast for realtime errors to avoid spam
    }
  },

  startRealtimeUpdates: () => {
    // Setup WebSocket listeners for real-time updates
    socket.on('orderStatusUpdate', (data) => {
      set((state) => ({
        realtimeStats: {
          ...state.realtimeStats,
          orders: {
            ...state.realtimeStats.orders,
            ...data
          }
        }
      }));
    });

    socket.on('deliveryPartnerUpdate', (data) => {
      set((state) => ({
        realtimeStats: {
          ...state.realtimeStats,
          activeDeliveryPartners: data.activeCount
        }
      }));
    });

    // Start polling for realtime updates as backup
    const interval = setInterval(() => {
      useAdminStore.getState().fetchRealtimeStats();
    }, 30000);

    return () => {
      clearInterval(interval);
      socket.off('orderStatusUpdate');
      socket.off('deliveryPartnerUpdate');
    };
  },

  // Add export functionality
  exportAnalytics: async (type) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get(`/admin/analytics/export/${type}`, {
        responseType: 'blob'
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${type}_report.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      toast({
        title: "Success",
        description: "Report exported successfully"
      });
      set({ loading: false });
    } catch (error) {
      set({
        error: "Failed to export report",
        loading: false
      });
      toast({
        title: "Error",
        description: "Failed to export report",
        variant: "destructive"
      });
    }
  }
}));
