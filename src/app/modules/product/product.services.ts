import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductInDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};
const getAllProducts = async () => {
  const result = await ProductModel.find();
  return result;
};
const getSingleProduct = async (productId: string) => {
  const result = await ProductModel.findOne({ _id: productId });
  return result;
};

export const ProductServices = {
  createProductInDB,
  getAllProducts,
  getSingleProduct,
};
