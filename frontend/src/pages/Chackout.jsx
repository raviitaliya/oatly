// Checkout.jsx
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useProductStore } from "../store/Store";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import Oatme from "../assets/ProductSvg/Oatme.svg";
import animation from "../assets/ProductSvg/animation.svg";
import ProductCard from "./ProductCard";
import OatlyTv from "@/components/OatlyTv";
import Footer from "@/components/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Error from "./Error";

const Checkout = () => {
  const navigate = useNavigate();
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    placeOrder,
    loading,
    error,
    random,
    randomProduct,
    user,
  } = useProductStore();

  console.log(user);

  const totalAmount = cart
    .reduce((sum, item) => sum + item.totalPrice, 0)
    .toFixed(2);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handlePlaceOrder = async () => {
    try {
      const paymentSuccess = await placeOrder();
      if (paymentSuccess) {
        toast.success("Order placed successfully!", {
          duration: 3000,
          style: { background: "#4CAF50", color: "white" },
        });
        navigate("/my-orders");
      }
    } catch (err) {
      toast.error(err.message || "Failed to place order", {
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    if (user && random.length === 0) {
      randomProduct();
    }
  }, [user, random, randomProduct]);

  if (cart.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center bg-gray-100 px-4"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold font-font1 mb-4">
            Your Cart is Empty
          </h2>
          <button
            onClick={() => navigate("/our-products")}
            className="px-4 py-2 text-black bg-[#c8c8c8] hover:bg-[#ebe5e5] rounded-full transition-colors duration-300 font-font2"
          >
            Continue Shopping
          </button>
        </div>
      </motion.div>
    );
  }

  return user ? (
    <div className="bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 min-h-screen"
      >
        <div className="max-w-5xl mx-auto">
          <Breadcrumb className="mb-6 font-font2">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink onClick={() => handleNavigate("/our-products")}>
                  Products
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Checkout</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h2 className="text-3xl font-bold text-gray-800 font-font1 mb-8">
            Checkout
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg shadow-md p-4 flex gap-4 relative"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <img
                      src={Oatme}
                      alt="Oatme decoration"
                      className="w-12 absolute top-2 right-2"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold font-font1">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-font2">₹</span>
                        <span className="text-xl font-font2">{item.price}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-28 border border-black/30 rounded flex items-center justify-between">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            disabled={item.quantity <= 1}
                            className="px-3 text-2xl font-bold font-font2 disabled:opacity-50"
                          >
                            -
                          </button>
                          <span className="font-font2">{item.quantity}</span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="px-3 text-2xl font-font2"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <p className="mt-2 font-medium font-font2">
                        Total: ₹{item.totalPrice.toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-2 text-red-600 hover:text-red-800 text-sm font-font2 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h3 className="text-xl font-semibold font-font1 mb-4">
                  Order Summary
                </h3>
                <div className="space-y-2">
                  <p className="flex justify-between font-font2">
                    <span>Items:</span>
                    <span>{cart.length}</span>
                  </p>
                  <p className="flex justify-between font-semibold font-font2">
                    <span>Total:</span>
                    <span>₹{totalAmount}</span>
                  </p>
                </div>

                {error && (
                  <p className="text-red-500 mt-2 text-sm font-font2">
                    {error}
                  </p>
                )}

                <button
                  onClick={handlePlaceOrder}
                  disabled={loading}
                  className="w-full mt-6 py-3 text-black rounded-full bg-[#c8c8c8] hover:bg-[#ebe5e5] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center font-font2"
                >
                  {loading ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-2"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                  ) : null}
                  {loading ? "Processing..." : "Place Order"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <section className="mt-8 bg-gray-100">
        <img src={animation} alt="Animation" className="w-full" />
      </section>
      <section className="mt-16 bg-gray-100">
        <h1 className="text-[32px] sm:text-[40px] md:text-[52px] font-bold font-font1 mb-4 text-center">
          Our Popular Products
        </h1>
        {random.length === 0 ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-14">
            {random.map((product) => (
              <Link
                key={product._id}
                to={`/our-products/${product.category
                  .replace(/\s+/g, "-")
                  .toLowerCase()}/${product._id}`}
              >
                <ProductCard
                  imageUrl={product.image}
                  price={product.price}
                  name={product.productname}
                />
              </Link>
            ))}
          </div>
        )}
      </section>

      <OatlyTv />
      <Footer />
    </div>
  ) : (
    <Error msg="Only Logged In Users Can Access This Page..." />
  );
};

export default Checkout;
