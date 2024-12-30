import  { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useProductStore } from "../store/Store";
import nice from "../assets/ProductSvg/nice.svg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function ViewProduct() {
  const navigate = useNavigate();
  const { id, category } = useParams();
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

      {/* 
      <h1>{oneProduct.productname}</h1>
      <p>{oneProduct.description}</p> */}
      {/*  */}

      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <p>{oneProduct.productname}</p>
          <p>{oneProduct.desription}</p>
        </div>
        <div className="flex">
          <div className="relative">
            <img
              src={oneProduct.image}
              alt={oneProduct.productname || "Product"}
            />
          </div>

          {/* <div className="absolute top-0 ">
            <img src={nice} className="w-12 " alt="this is nice svg" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
