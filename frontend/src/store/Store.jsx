import { create } from "zustand";
import api from "../api/api";




export const useProductStore = create((set, get) => ({
  products: [],
  oatDrinkProducts: [],
  chilledoatdrinks: [],
  cooking: [],
  spread: [],
  oatgurt: [],
  IceCream: [],
  SoftServe: [],
  random:[],
  oneProduct: null,
  selectedProduct: null,
  loading: false,
  error: null,
  user: null,
  otp: null,

  setProducts: (products) => set({ products }),
  setoatDrinkProducts: (oatDrinkProducts) => set({ oatDrinkProducts }),
  setchilledoatdrinks: (chilledoatdrinks) => set({ chilledoatdrinks }),
  setcooking: (cooking) => set({ cooking }),
  setspread: (spread) => set({ spread }),
  setoatgurt: (oatgurt) => set({ oatgurt }),
  seticeCream: (IceCream) => set({ IceCream }),
  setsoftServe: (SoftServe) => set({ SoftServe }),
  setoneProduct: (oneProduct) => set({ oneProduct }),
  setrandom: (random) => set({random}),
  setverificatonToken: (otp) => set({otp}),

  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  setClearState: () => set({ oneProduct: null, error: null, loading: false }),

  fetchProducts: async () => {
    if (get().loading) return;
    set({ loading: true, error: null });
    try {
      const response = await api.get("/admin/getAllProduct");
      set({ products: response.data.products, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch products",
        loading: false,
      });
    }
  },

  getOatDrink: async () => {
    if (get().loading) return;

    set({ loading: true, error: null });
    try {
      const response = await api.get("/admin/oatdrink");

      set({ oatDrinkProducts: response.data.products, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch products",
        loading: false,
      });
    }
  },

  getchilledoatdrinks: async () => {
    if (get().loading) return;

    set({ loading: true, error: null });
    try {
      const response = await api.get("/admin/chilledoatdrinks");

      set({ chilledoatdrinks: response.data.products, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch products",
        loading: false,
      });
    }
  },

  getcooking: async () => {
    if (get().loading) return;

    set({ loading: true, error: null });
    try {
      const response = await api.get("/admin/cooking");

      set({ cooking: response.data.products, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch products",
        loading: false,
      });
    }
  },

  getspread: async () => {
    if (get().loading) return;

    set({ loading: true, error: null });
    try {
      const response = await api.get("/admin/spread");

      set({ spread: response.data.products, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch products",
        loading: false,
      });
    }
  },
  getoatgurt: async () => {
    if (get().loading) return;

    set({ loading: true, error: null });
    try {
      const response = await api.get("/admin/oatgurt");

      set({ oatgurt: response.data.products, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch products",
        loading: false,
      });
    }
  },

  getIceCream: async () => {
    if (get().loading) return;

    set({ loading: true, error: null });
    try {
      const response = await api.get("/admin/Ice-cream");

      set({ IceCream: response.data.products, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch products",
        loading: false,
      });
    }
  },

  getSoftServe: async () => {
    if (get().loading) return;

    set({ loading: true, error: null });
    try {
      const response = await api.get("/admin/soft-serve");

      set({ SoftServe: response.data.products, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch products",
        loading: false,
      });
    }
  },

  getOneProduct: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get(`/admin/${id}`);

      if (response.status === 200) {
        set({ oneProduct: response.data.product, loading: false });
      } else {
        set({ oneProduct: null, loading: false, error: response.data.message });
      }
    } catch (error) {
      set({
        oneProduct: null,
        loading: false,
        error: error.message,
      });
    }
  },

  sendNotification: async (notificationData) => {
    set({ loading: true, error: null });
    try {
      const { tokens, notification } = notificationData;

      // Validate that tokens is an array and not empty
      if (!Array.isArray(tokens) || tokens.length === 0) {
        throw new Error("No valid tokens provided");
      }

      // Prepare the message payload
      const message = {
        notification: {
          title: notification.title,
          body: notification.body,
        },
        tokens: tokens, // Array of device tokens to send the notification to
      };

      // Send the notification to multiple devices using sendToDevice
      const response = await api.post("/notify/send-notification", message);

      if (response.status === 200) {
        set({ loading: false, error: null });
        console.log("Notification sent successfully", response.data);
      } else {
        set({ loading: false, error: "Failed to send notification" });
      }
    } catch (error) {
      set({ loading: false, error: error.message });
      console.error("Error sending notification:", error.message);
    }
  },

  randomProduct: async () => {
    if (get().loading) return;
    set({ loading: true, error: null });
    try {
    
      
      const response = await api.get("/admin/random-products");
      set({ random: response.data.randomProducts, loading: false });
    } catch (error) {
      console.error("Error:", error.message);
      set({
        error: error.response?.data?.message || "Failed to fetch products",
        loading: false,
      });
    }
  },

  signUpUser: async (formData) => {
    set({ loading: true, error: null });
    try {
      const response = await api.post("/auth/signup", formData);
     
      if (response.status === 200) {
        set({ user: response.data.user, loading: false });
        console.log("Signup successful:", response.data);
       set({otp: response.data.user.verificatonToken });
       return response;
       
      } else {
        set({ User: null, loading: false, error: response.data.message  });
      }
    }
    catch (error) {
      set({
        User: null,
        loading: false,
        error: error.response?.data?.message || "Failed to sign up",
      });
    }
  },
  
  verifyEmail: async (otp) => {
    set({ loading: true, error: null });
    try {
      const { user } = get();
      const response = await api.post("/auth/verify-email", { email: user.email, otp });
      console.log("Responseeeeeeeeeeeeeeeeeee:", otp);
      console.log("Responseeeeeeeeeeeeeeeeeee:", user.email);
      console.log("Responseeeeeeeeeeeeeeeeeee:", response);
      if (response.status === 200) {
        set({ loading: false });
        return { success: true };
      } else {
        set({ loading: false, error: response.data.message });
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      set({ loading: false, error: error.response?.data?.message || "Failed to verify email" });
      console.error("Error during email verification:", error);
      return { success: false, message: error.response?.data?.message || "Failed to verify email" };
    }
  }
  
}));
