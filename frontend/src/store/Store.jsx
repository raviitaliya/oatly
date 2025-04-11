import { create } from "zustand";
import api from "../api/api";
import Cookies from "js-cookie";
import axios from "axios";
import { io } from "socket.io-client";
import { toast } from "react-hot-toast";

const API = "http://localhost:8000/api";

const socket = io("http://localhost:8000"); // Updated to port 8000

socket.on("orderUpdate", (data) => {
  console.log("Received orderUpdate:", data);
  useProductStore.setState((state) => {
    if (state.trackingOrderId === data.orderId) {
      const updatedOrders = state.orders.map((order) =>
        order.orderId === data.orderId
          ? { ...order, status: data.status, location: data.coordinates }
          : order
      );
      return {
        orders: updatedOrders,
        location: data.status === "Delivered" ? null : data.coordinates,
        trackingOrderId:
          data.status === "Delivered" ? null : state.trackingOrderId,
      };
    }
    return state;
  });
  if (data.status === "Delivered") {
    console.log("Tracking stopped for Order:", data.orderId);
  }
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Adjust key as per your storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const loadCartFromLocalStorage = () => {
  try {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return [];
  }
};

const saveCartToLocalStorage = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

export const useProductStore = create((set, get) => ({
  products: [],
  oatDrinkProducts: [],
  chilledoatdrinks: [],
  cooking: [],
  spread: [],
  oatgurt: [],
  IceCream: [],
  SoftServe: [],
  random: [],
  cart: loadCartFromLocalStorage(),
  orders: [],
  assignedOrders: [],
  currentOrder: null,
  location: null,
  analytics: null,
  inventory: [],
  feedback: [],

  oneProduct: null,
  selectedProduct: null,
  loading: false,
  error: null,
  user: null,
  otp: null,

  isSignUpOpen: false,
  isSingInOpen: false,
  isOtpOpen: false,
  isResetOpen: false,
  isAddToCartOpen: false,

  deliveryProfile: null,

  setProducts: (products) => set({ products }),
  setoatDrinkProducts: (oatDrinkProducts) => set({ oatDrinkProducts }),
  setchilledoatdrinks: (chilledoatdrinks) => set({ chilledoatdrinks }),
  setcooking: (cooking) => set({ cooking }),
  setspread: (spread) => set({ spread }),
  setoatgurt: (oatgurt) => set({ oatgurt }),
  seticeCream: (IceCream) => set({ IceCream }),
  setsoftServe: (SoftServe) => set({ SoftServe }),
  setoneProduct: (oneProduct) => set({ oneProduct }),
  setrandom: (random) => set({ random }),
  setverificatonToken: (otp) => set({ otp }),
  setUser: (user) => set({ user }),

  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  setClearState: () => set({ oneProduct: null, error: null, loading: false }),

  openSignUp: () =>
    set({ isSignUpOpen: true, isOtpOpen: false, isSignInOpen: false }),
  closeSignUp: () => set({ isSignUpOpen: false }),

  openOtp: () =>
    set({ isOtpOpen: true, isSignUpOpen: false, isSignInOpen: false }),
  closeOtp: () => set({ isOtpOpen: false }),

  openSignIn: () =>
    set({ isSignInOpen: true, isSignUpOpen: false, isOtpOpen: false }),
  closeSignIn: () => set({ isSignInOpen: false }),

  openReset: () =>
    set((state) => ({ ...state, isResetOpen: true, isSignInOpen: false })),
  closeReset: () => set((state) => ({ ...state, isResetOpen: false })),

  openAddToCart: () => set({ isAddToCartOpen: true }),
  closeAddToCart: () => set({ isAddToCartOpen: false }),

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
    if (get().loading) return;
    set({ loading: true, error: null });
    try {
      const response = await api.post("/auth/signup", formData);

      if (response.status === 200) {
        set({
          user: response.data.user,
          otp: response.data.user.verificatonToken,
          loading: false,
          isSignUpOpen: false,
          isOtpOpen: true,
        });
        return response;
      } else {
        set({ user: null, loading: false, error: response.data.message });
        return response;
      }
    } catch (error) {
      set({
        user: null,
        loading: false,
        error: error.response?.data?.message || "Failed to sign up",
      });
      console.error("Signup Error:", error);
      return error.response;
    }
  },

  verifyEmail: async (otp) => {
    set({ loading: true, error: null });
    try {
      const { user } = get();
      const response = await api.post("/auth/verify-email", {
        email: user.email,
        code: otp,
      });

      if (response.status === 200) {
        set({
          loading: false,
          isOtpOpen: false,
          isSignInOpen: true,
        });
        return { success: true };
      } else {
        set({ loading: false, error: response.data.message });
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.message || "Failed to verify email",
      });
      console.error("Error during email verification:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Failed to verify email",
      };
    }
  },

  signInUser: async (formData) => {
    set({ loading: true, error: null });

    try {
      // console.log("Form Data:", formData);
      const response = await api.post("/auth/login", formData);
      if (response.status === 200) {
        set({ user: response.data.user, loading: false });

        const token = Cookies.set("token", response.data.token, { expires: 7 });

        const cookie = response.data.token;

        if (token) {
          localStorage.setItem("token", cookie);
        }

        console.log("Login successful:", response.data);
        return response;
      } else {
        set({ user: null, loading: false, errorf: response.data.message });
      }
    } catch (error) {
      set({
        user: null,
        loading: false,
        error: error.response?.data?.message || "Failed to sign in",
      });
    }
  },

  forgotPassword: async (email) => {
    set({ loading: true, error: null });
    try {
      const response = await api.post("/auth/forgot-password", { email });

      if (response.status === 200) {
        set({ loading: false });
        return { success: true };
      } else {
        set({ loading: false, error: response.data.message });
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.message || "Failed to send reset link",
      });
      console.error("Error sending reset link:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Failed to send reset link",
      };
    }
  },

  resetPassword: async (token, password) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(
        `${API}/auth/set-newPassword/${token}`,
        {
          password,
        }
      );

      console.log(response.data);

      set({ message: response.data.message, loading: false });
    } catch (error) {
      set({
        loading: false,
        error: error.response.data.message || "Error resetting password",
      });
      throw error;
    }
  },

  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/auth/check-auth", {
        withCredentials: true,
      });
      set({ user: response.data.user, loading: false });
    } catch (error) {
      set({
        user: null,
        loading: false,
        error: error.response?.data?.message || "Failed to fetch user",
      });
    }
  },

  logOut: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.post("/auth/logout", {
        withCredentials: true,
      });

      if (response.data.success) {
        localStorage.removeItem("token");
        Cookies.remove("token");
        set({ user: null, loading: false });
        console.log("Logout successful");
      } else {
        set({ loading: false, error: "Failed to log out" });
      }
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.message || "Failed to log out",
      });
      console.error("Error during logout:", error);
    }
  },

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * parseFloat(item.price),
              }
            : item
        );
      } else {
        updatedCart = [
          ...state.cart,
          {
            ...product,
            quantity: 1,
            totalPrice: parseFloat(product.price),
          },
        ];
      }

      console.log("Updated Cart in addToCart:", updatedCart);
      saveCartToLocalStorage(updatedCart);

      return { cart: updatedCart };
    }),

  increaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.price,
            }
          : item
      );

      saveCartToLocalStorage(updatedCart);

      return { cart: updatedCart };
    }),

  decreaseQuantity: (id) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: (item.quantity - 1) * item.price,
            }
          : item
      );

      saveCartToLocalStorage(updatedCart);

      return { cart: updatedCart };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);

      saveCartToLocalStorage(updatedCart);

      return { cart: updatedCart };
    }),

  clearCart: () =>
    set(() => {
      localStorage.removeItem("cart");

      return { cart: [] };
    }),

  getDeliveryBoyProfile: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/delivery_boy/profile");
      if (response.data.success) {
        set({
          deliveryProfile: response.data.profile,
          loading: false,
        });
      }
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.message || "Failed to fetch profile",
      });
    }
  },

  updateDeliveryBoyProfile: async (profileData) => {
    set({ loading: true, error: null });
    try {
      const response = await api.put("/delivery_boy/profile", profileData);
      if (response.data.success) {
        set({
          deliveryProfile: response.data.profile,
          loading: false,
        });
      }
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.message || "Failed to update profile",
      });
    }
  },

  toggleAvailability: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.post("/delivery_boy/toggle-availability");
      // console.log(response.data.isAvailable);
      
      if (response?.data?.success) {
        set((state) => ({
          deliveryProfile: {
            ...state.deliveryProfile,
            isAvailable: response.data.isAvailable,
          },
          loading: false,
        }));
      }
    } catch (error) {
      alert("Error: " + (error.message || "Unknown error"));
      set({
        loading: false,
        error: error.response?.data?.message || "Failed to toggle availability",
      });
    }
  },

  fetchAssignedOrders: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/delivery_boy/orders");
      console.log("Fetched Assigned Orders:", response.data.orders);
      if (response.data.success)
        set({ assignedOrders: response.data.orders, loading: false });
    } catch (error) {
      set({
        loading: false,
        error:
          error.response?.data?.message || "Failed to fetch assigned orders",
      });
    }
  },

  acceptOrder: async (orderId) => {
    set({ loading: true, error: null });
    try {
      const response = await api.post("/delivery_boy/accept-order", {
        orderId,
      });
      console.log("Accept Order Response:", response.data);
      if (response.data.success) get().fetchAssignedOrders();
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.message || "Failed to accept order",
      });
    }
  },

  updateOrderStatus: async (orderId, status, coordinates) => {
    set({ loading: true, error: null });
    try {
      const response = await api.post("/delivery_boy/update-status", {
        orderId,
        status,
        coordinates,
      });
      console.log("Update Order Status Response:", response.data);
      if (response.data.success) {
        get().fetchAssignedOrders();
      }
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.message || "Failed to update order status",
      });
    }
  },

  getEarnings: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/delivery_boy/earnings");
      console.log(response);
      if (response.data.success)
        set({ earnings: response.data.data, loading: false });
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.message || "Failed to fetch earnings",
      });
      throw error;
    }
  },

  placeOrder: async () => {
    set({ loading: true, error: null });
    const { cart, user, fetchOrders } = get(); 

    if (!cart.length) {
      set({ loading: false, error: "Cart is empty" });
      return;
    }
    if (!user) {
      set({ loading: false, error: "Please sign in to place an order" });
      return;
    }

    try {
      const getCurrentLocation = () =>
        new Promise((resolve, reject) => {
          if (!navigator.geolocation) {
            reject(new Error("Geolocation not supported"));
          }
          navigator.geolocation.getCurrentPosition(
            (position) =>
              resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              }),
            (error) => reject(new Error(`Location error: ${error.message}`))
          );
        });

      const location = await getCurrentLocation();
      const totalAmount = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      const orderData = {
        items: cart.map((item) => ({
          productName: item.name,
          quantity: item.quantity,
          price: item.price,
          productImage: item.image,
        })),
        totalAmount,
        location: {
          type: "Point",
          coordinates: [location.longitude, location.latitude],
        },
      };

      const response = await api.post("/orders/create", orderData);

      if (response.data.success) {
        const { order, pendingOrder } = response.data;
        return new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          script.onload = () => {
            const options = {
              key: order.key,
              amount: order.amount * 100,
              currency: order.currency,
              order_id: order.orderId,
              name: "Oatly",
              description: "Order Payment",
              handler: async (paymentResponse) => {
                const verifyData = {
                  razorpay_order_id: paymentResponse.razorpay_order_id,
                  razorpay_payment_id: paymentResponse.razorpay_payment_id,
                  razorpay_signature: paymentResponse.razorpay_signature,
                  items: pendingOrder.items,
                  totalAmount: pendingOrder.totalAmount,
                  deliveryAddress: pendingOrder.deliveryAddress,
                  location: pendingOrder.location,
                };
                const verifyResponse = await api.post(
                  "/orders/verify-payment",
                  verifyData
                );
                if (verifyResponse.data.success) {
                  set({
                    currentOrder: verifyResponse.data.order,
                    cart: [],
                    loading: false,
                  });
                  localStorage.removeItem("cart");
                  await fetchOrders(); 
                  resolve(true);
                }
              },
              modal: {
                ondismiss: () => {
                  set({ loading: false, error: "Payment was cancelled" });
                  reject(new Error("Payment cancelled by user"));
                },
              },
              prefill: {
                name: user.name,
                email: user.email,
                contact: user.mobile,
              },
            };
            const rzp = new window.Razorpay(options);
            rzp.open();
          };
          script.onerror = () => {
            set({ loading: false, error: "Failed to load Razorpay script" });
            reject(new Error("Razorpay script failed to load"));
          };
          document.body.appendChild(script);
        });
      }
    } catch (error) {
      set({
        loading: false,
        error: error.response?.data?.message || "Failed to place order",
      });
      throw error;
    }
  },

  fetchOrders: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/orders/my-orders");
      console.log("Full API Response from /orders/my-orders:", response); 
      console.log("Orders data:", response.data.orders); 
      if (response.data.success) {
        set({ orders: response.data.orders || [], loading: false }); 
      } else {
        console.log("API success false:", response.data);
        set({ loading: false, error: "API returned success: false" });
      }
    } catch (error) {
      console.error("Fetch orders error:", error.response || error);
      set({
        loading: false,
        error: error.response?.data?.message || "Failed to fetch orders",
      });
    }
  },

  cancelOrder: async (orderId) => {
    set({ loading: true, error: null });
    try {
      const response = await api.post("/orders/cancel", { orderId });
      console.log("Cancel Order Response:", response.data);
      if (response.data.success) {
        await get().fetchOrders(); 
        set({ loading: false });
      } else {
        set({
          loading: false,
          error: response.data.message || "Failed to cancel order",
        });
      }
    } catch (error) {
      console.error("Cancel order error:", error.response || error);
      set({
        loading: false,
        error: error.response?.data?.message || "Failed to cancel order",
      });
    }
  },
}));
