import { ProductModel } from "../product/product.model";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createAOrderInDB = async (order: Order) => {
  const productId = order.productId;
  const product = await ProductModel.findById({ _id: productId });
  const orderData = await OrderModel.create(order);
  if (product) {
    // insufficient stock
    if (orderData.quantity > product.inventory.quantity) {
      throw new Error("Insufficient quantity available in inventory");
    }

    // product quantity update
    product.inventory.quantity -= order.quantity;
    // update in stock boolean value
    product.inventory.inStock = product.inventory.quantity > 0;
    console.log(orderData);
  }
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
