import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useProductStore } from "../store/Store";
import Oatme from "../assets/ProductSvg/Oatme.svg";
import animation from "../assets/ProductSvg/animation.svg";
import tree from "../assets/ProductSvg/tree.svg";
import Cart from "../components/Cart";
import api from "../api/api";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import OatlyTv from "@/components/OatlyTv";
import Footer from "@/components/Footer";
import ProductCard from "./ProductCard";
import PaymentBtn from "@/components/PaymentBtn";
import axios from "axios";

function ViewProduct() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    oneProduct,
    randomProduct,
    loading,
    error,
    random,
    getOneProduct,
    setClearState,
    openAddToCart,
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  } = useProductStore();

  const product = cart.find((item) => item.id === id);
  console.log("Product in Cart:", product);

  const quantity = product ? product.quantity : 1;
  const totalPrice = product
    ? product.totalPrice
    : oneProduct
    ? oneProduct.price
    : 0;

  // console.log(random);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleOnclick = () => {
    console.log("Add to Cart clicked");
    if (oneProduct) {
      addToCart({
        id: oneProduct._id,
        name: oneProduct.productname,
        price: oneProduct.price,
        image: oneProduct.image,
      });
      setIsCartOpen(!isCartOpen);
      openAddToCart();
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  }

  useEffect(() => {
    if (oneProduct && oneProduct._id === id) return;

    setClearState();
    randomProduct();
    getOneProduct(id);
  }, [id, oneProduct, getOneProduct, randomProduct, setClearState]);

  // const checkoutHandler = async (amount) => {
  //   console.log(amount);

  //   const {
  //     data: { key },
  //   } = await api.get("/payment/getkey");

  //   const {
  //     data: { order },
  //   } = await axios.post("http://localhost:8000/api/payment/create-order", {
  //     amount,
  //   });

  //   // console.log(order);

  //   const options = {
  //     key,
  //     amount: order.amount,
  //     currency: "INR",
  //     name: "Oatly",
  //     dscription: "hello guys",
  //     image:
  //       "https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_1280.png",
  //     order_id: order.id,
  //     callback_url: "http://localhost:8000/api/payment/payment-verification",
  //     prefill: {
  //       name: "Gaurav Kumar",
  //       email: "gaurav.kumar@example.com",
  //       contact: "9000090000",
  //     },
  //     notes: {
  //       item_name: "Max Ninja 200 Wireless Gaming Mouse",
  //       quantity: "1",
  //       price: "₹4,499",
  //       address: "Razorpay Corporate Office",
  //     },
  //     theme: {
  //       color: "#000000",
  //     },
  //   };

  //   const razor = new window.Razorpay(options);
  //   razor.open();
  //   console.log(window);
  // };

  // if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!oneProduct) return <div>No product found</div>;

  return (
    <div className="m-0 p-0">
      <Breadcrumb className="mb-6 z-50 relative !mt-[-66px] ml-20 font-font2 ">
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
            <BreadcrumbLink
              onClick={() =>
                handleNavigate(
                  `/our-products/${oneProduct.category
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`
                )
              }
            >
              {oneProduct.category}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>{oneProduct.productname}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="lg:py-8 px-4 lg:  mt-[73px]">
        <div className="max-w-9xl max-h-[38rem] mx-auto flex items-center justify-center">
          <div className="text-left w-[51rem] flex flex-col justify-center items-start ">
            <h1 className="sm:text-[40px] md:text-[52px] lg:text-[88px] font-bold font-font1 mb-4 lg:leading-[80px]">
              {oneProduct.productname}
            </h1>
            <div className="mt-0 w-[85%]">
              <p className=" lg:text-[20px] font-font2 ">
                {oneProduct.desription}
              </p>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <span className="text-2xl font-font2">₹ </span>
              <span className="text-2xl font-font2">{oneProduct.price}</span>
            </div>
            <div className="mt-2">
              <div className="my-4 w-28 border border-black/30 rounded">
                <div className="flex items-center justify-between">
                  <button
                    className=" px-3 rounded text-2xl font-bold font-font2  "
                    onClick={() => decreaseQuantity(product.id)}
                    disabled={!product || product.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{product ? product.quantity : 1}</span>
                  <button
                    className="px-3 rounded text-2xl font-font2"
                    onClick={() => increaseQuantity(product.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <Cart
                isOpen={isCartOpen}
                isbuttonclick={handleOnclick}
                variant="default"
              />
              <PaymentBtn
                amount={totalPrice}
                onClick={handleCheckout}
                disabled={loading}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full h-auto">
              <div>
                <img
                  src={oneProduct.image}
                  alt="Oatly Oat Drink for Coffee and Tea Jigger 20 ml"
                  className="w-full max-w-[50.5rem] h-auto object-contain mx-auto relative"
                />
                <img
                  src={Oatme}
                  alt="this is svg"
                  className="w-[2rem] sm:w-[5.5rem] md:w-24 lg:w-48 left-[67%] top-[5%] sm:left-[67%] sm:top-[4%] absolute"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <img src={animation} alt="this is animation svg" className="w-full" />
      </section>
      <section className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-center items-start  xl:gap-28 mt-16 w-full">
        <div className=" flex flex-col gap-14 xl:w-[790px] h-[790px] w-full">
          <div className=" w-full h-[316px] xl:h-[316px] flex flex-col">
            <div>
              <h1 className=" text-[25px] sm:text-[28px] md:text-[30px] lg:text-[45px] xl:text-[60px] font-bold font-font1 mb-4 lg:leading-[70px]">
                {oneProduct.heading1}
              </h1>
            </div>
            <div className="text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-font2">
              <p>{oneProduct.desription1}</p>
            </div>
          </div>

          <div className="w-full h-[316px]">
            <div>
              <h1 className="text-[25px] sm:text-[28px] md:text-[33px] lg:text-[45px] xl:text-[60px] font-bold font-font1 mb-4 lg:leading-[70px]">
                {oneProduct.heading2}
              </h1>
            </div>
            <div className="text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-font2">
              <p>{oneProduct.desription2}</p>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-[659px] xl:h-[894px] h-auto relative">
          <div className="border-2 border-dashed rounded-[20px] border-black w-full xl:h-[245px] h-[245px] flex items-start relative">
            <div className="w-[75%] h-full flex flex-col p-4 items-start">
              <h1 className="font-font1 sm:text-[16px] md:text-[25px] lg:text-[32px]">
                {oneProduct.qustion1}
              </h1>
              <div className="w-[80%] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px] font-font2">
                <p>{oneProduct.answer1}</p>
              </div>
            </div>
            <div className=" relative w-[25%] h-full">
              <img
                src={tree}
                alt="this is svg"
                className=" absolute top-[-20px] left-[-11] z-10 "
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" flex justify-center items-center">
          <h1 className="text-[32px] sm:text-[40px] md:text-[52px] font-bold font-font1 mb-4">
            Our Popular Products
          </h1>
        </div>

        <div className=" flex flex-wrap justify-center gap-14 items-center ">
          {random.map((product) => (
            <Link
              key={product._id}
              to={`/our-products/${product.category
                .replace(/\s+/g, "-")
                .toLowerCase()}/${product._id}`}
            >
              <ProductCard
                key={product._id}
                imageUrl={product.image}
                price={product.price}
                name={product.productname}
              />
            </Link>
          ))}
        </div>
      </section>
      <OatlyTv />
      <Footer />
    </div>
  );
}

export default ViewProduct;
