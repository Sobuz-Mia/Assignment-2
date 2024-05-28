import { Product } from "./product.interface";
import { ProductModel } from "./product.model";
import ProductValidationSchema from "./product.zod.validations";

// create a product functions here
const createProductInDB = async (product: Product) => {
  const productValidate = ProductValidationSchema.parse(product);
  const result = await ProductModel.create(productValidate);
  return result;
};

// get all product start here
const getAllProducts = async () => {
  const result = await ProductModel.find();
  return result;
};

// get single product
const getSingleProduct = async (productId: string) => {
  const result = await ProductModel.findOne({ _id: productId });
  return result;
};
// get single product end here

// this is an product update functions here
const updateSingleProduct = async (productId: string, product: Product) => {
  const productValidate = ProductValidationSchema.parse(product);
  const updateQuery = {
    $set: productValidate,
  };
  const result = await ProductModel.findOneAndUpdate(
    { _id: productId },
    updateQuery,
    {
      new: true,
    },
  );
  if (!result) {
    throw new Error("Product not found");
  }
  return result;
};
// product update functions end here

const deleteProductFromDB = async (productId: string) => {
  const result = await ProductModel.findOneAndDelete({ _id: productId });
  return result;
};
// search functionality
const searchByValue = async (searchTerm: string) => {
  const searchName = new RegExp(searchTerm, "i");
  const result = await ProductModel.find({
    name: { $regex: searchName },
  });
  return result;
};
export const ProductServices = {
  createProductInDB,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteProductFromDB,
  searchByValue,
};
