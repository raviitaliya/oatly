import { Product } from "../models/addProduct.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const LoginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const username = "Oatly123";
    const password = "Oatly123";

    if (username === username && password === password) {
      return res.status(200).json(200, "User Logged in Successfully");
    } else {
      return res.status(200).json(200, "User Logged in Failed");
    }
  } catch (error) {}
};

export const AddProudct = async (req, res) => {
  const {
    productname,
    desription,
    category,
    heading1,
    desription1,
    heading2,
    desription2,
    qustion1,
    answer1,
    price,
  } = req.body;

  try {
    if (
      [
        productname,
        desription,
        category,
        heading1,
        desription1,
        heading2,
        desription2,
        qustion1,
        answer1,
        price,
      ].some((field) => !field?.trim())
    ) {
      return res
        .status(400)
        .json({ status: 400, message: "All fields are required" });
    }

    const imageLocalPath = req.files?.image[0]?.path;

    if (!imageLocalPath) {
      return res
        .status(400)
        .json({ status: 400, message: "Avatar file is required" });
    }

    const image = await uploadOnCloudinary(imageLocalPath);

    if (!image) {
      return res
        .status(500)
        .json({ status: 500, message: "Failed to upload image" });
    }

    const product = await Product.create({
      productname,
      desription,
      category,
      image: image.url,
      heading1,
      desription1,
      heading2,
      desription2,
      qustion1,
      answer1,
      price,
    });

    return res.status(201).json({
      status: 201,
      product,
      message: "Product created successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Product not added",
      error: error.message,
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No products found",
      });
    }

    return res.status(200).json({
      status: 200,
      products,
      message: "Products fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching products",
      error: error.message,
    });
  }
};

export const OatDrink = async (req, res) => {
  try {
    const products = await Product.find({ category: "Oat Drink" });

    // console.log(products);

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No Oat Drinks found",
      });
    }
    return res.status(200).json({
      status: 200,
      products,
      message: "Oat Drinks fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching Oat Drinks",
      error: error.message,
    });
  }
};

export const ChilledOatDrinks = async (req, res) => {
  try {
    const products = await Product.find({ category: "Chilled Oat Drinks" });

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No Chilled Oat Drinks found",
      });
    }
    return res.status(200).json({
      status: 200,
      products,
      message: "Oat Drinks fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching Oat Drinks",
      error: error.message,
    });
  }
};

export const Cooking = async (req, res) => {
  try {
    const products = await Product.find({ category: "Cooking" });

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No Cooking found",
      });
    }
    return res.status(200).json({
      status: 200,
      products,
      message: "Oat Drinks fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching Oat Drinks",
      error: error.message,
    });
  }
};

export const Spread = async (req, res) => {
  try {
    const products = await Product.find({ category: "Spread" });

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No Cooking found",
      });
    }
    return res.status(200).json({
      status: 200,
      products,
      message: "Oat Drinks fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching Oat Drinks",
      error: error.message,
    });
  }
};
export const Oatgurt = async (req, res) => {
  try {
    const products = await Product.find({ category: "Oatgurt" });

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No Cooking found",
      });
    }
    return res.status(200).json({
      status: 200,
      products,
      message: "Oat Drinks fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching Oat Drinks",
      error: error.message,
    });
  }
};

export const IceCream = async (req, res) => {
  try {
    const products = await Product.find({ category: "Ice Cream" });

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No Cooking found",
      });
    }
    return res.status(200).json({
      status: 200,
      products,
      message: "Oat Drinks fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching Oat Drinks",
      error: error.message,
    });
  }
};

export const SoftServe = async (req, res) => {
  try {
    const products = await Product.find({ category: "Soft Serve" });

    if (!products || products.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "No Cooking found",
      });
    }
    return res.status(200).json({
      status: 200,
      products,
      message: "Oat Drinks fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching Oat Drinks",
      error: error.message,
    });
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        status: 404,
        message: "Product not found",
      });
    }
    return res.status(200).json({
      status: 200,
      product,
      message: "Product fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching product",
      error: error.message,
    });
  }
};

export const randomProducts = async (req, res) => {
  try {
    const randomProducts = await Product.aggregate([{ $sample: { size: 4 } }]);

    if (!randomProducts || randomProducts.length === 0) {
      return res.status(404).json({
        status: 404,
        message: "Products not found",
      });
    }

    return res.status(200).json({
      status: 200,
      randomProducts,
      message: "Products fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching random products:", error);

    return res.status(500).json({
      status: 500,
      message: "An error occurred while fetching products",
      error: error.message,
    });
  }
};
