import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useProductStore } from "../store/Store";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function ViewProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { oneProduct, loading, error, getOneProduct, setClearState } =
    useProductStore();

  const handleNavigate = (path) => {
    navigate(path);
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
    <div className="">
      <Breadcrumb className="mb-6 z-50 relative !mt-[-66px] ml-16 font-font2">
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

      <section className=" py-8 px-4 mt-[73px]">
        <div className="max-w-9xl max-h-[38rem] mx-auto flex  items-center justify-center">
          <div className="text-left w-[51rem] flex flex-col justify-center">
            <h1 className="text-[88px] font-bold font-font1 mb-4 leading-[80px]">
              {oneProduct.productname}
            </h1>
            <div className="mt-0 w-[85%]">
              <p className=" text-[20px] font-font2 ">
                {oneProduct.desription}
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full h-full">
              <img
                src={oneProduct.image}
                alt="Oatly Oat Drink for Coffee and Tea Jigger 20 ml"
                className="w-[50.5rem] h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ViewProduct;
