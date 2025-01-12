import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useProductStore } from "../store/Store";
import Oatme from "../assets/ProductSvg/Oatme.svg";
import animation from "../assets/ProductSvg/animation.svg";
import tree from "../assets/ProductSvg/tree.svg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import OatlyTv from "@/components/OatlyTv";
import Footer from "@/components/Footer";
import AddToCardBtn from "@/components/ui/AddToCardBtn";

function ViewProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { oneProduct, loading, error, getOneProduct, setClearState } =
    useProductStore();
  const [quantity, setQuantity] = useState(1);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Function to handle quantity decrease
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addToCart = () => {
    const productDetails = {
      id: oneProduct._id,
      name: oneProduct.productname,
      image: oneProduct.image,
      price: oneProduct.price,
      quantity: quantity,
      totalPrice: oneProduct.price * quantity,
    };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productDetails);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  useEffect(() => {
    if (oneProduct && oneProduct._id === id) return;

    setClearState();
    getOneProduct(id);
  }, [id, oneProduct, getOneProduct, setClearState]);

  if (loading) return <div>Loading...</div>;
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
            <div className="mt-4">
              <div>
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </div>
              <AddToCardBtn onClick={addToCart} />
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

      <OatlyTv />
      <Footer />
    </div>
  );
}

export default ViewProduct;
