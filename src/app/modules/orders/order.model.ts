import { Schema, model } from "mongoose";
import { Order } from "./order.interface";

const orderSchema = new Schema<Order>({
  email: {
    type: String,
    required: [
      true,
      "Invalid email format. Please enter a valid email address",
    ],
  },
  productId: { type: String, required: [true, "Product id must be string"] },
  price: { type: Number, required: [true, "Price will be a positive number"] },
  quantity: { type: Number, required: [true, "Quantity is required"] },
});
export const OrderModel = model<Order>("Orders", orderSchema);
