import { ProductModel } from "../product/product.model";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";
import OrderValidationSchema from "./order.validation.schema";

const createAOrderInDB = async (order: Order) => {
  const productId = order.productId;
  const orderValidate = OrderValidationSchema.parse(order);
  const product = await ProductModel.findById({ _id: productId });
  if (!product) {
    throw new Error("Product Not Found");
  }
  // insufficient stock
  if (order.quantity > product.inventory.quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }
  const orderData = await OrderModel.create(orderValidate);

  // product quantity update
  product.inventory.quantity = product.inventory.quantity - order.quantity;
  // update in stock boolean value
  product.inventory.inStock = product.inventory.quantity > 0;

  if (product.inventory.quantity === 0) {
    product.inventory.inStock = false;
  }
  // update product save in the database
  await product.save();
  // created order and return it
  return orderData;
};
// get all order data

const getAllOrderData = async () => {
  const result = await OrderModel.find();
  return result;
};
// get order by email

const getOrderDataByEmail = async (email: string) => {
  const result = await OrderModel.find({ email });
  if (result.length < 1) {
    throw new Error("Order not found");
  }
  return result;
};

export const OrderServices = {
  createAOrderInDB,
  getAllOrderData,
  getOrderDataByEmail,
};
