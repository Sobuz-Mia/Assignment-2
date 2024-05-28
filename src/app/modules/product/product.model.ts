import { Schema, model } from "mongoose";
import { Product, Variant } from "./product.interface";

const variantSchema = new Schema<Variant>({
  type: {
    type: String,
    required: [true, "Variant type is required"],
  },
  value: {
    type: String,
    required: [true, "Variant value is required"],
  },
});
const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "Product price must be a positive number"],
  },
  category: {
    type: String,
    required: [true, "Product category is required"],
  },
  tags: {
    type: [String],
    required: [true, "Product tags are required"],
    validate: {
      validator: (v: string[]) => v.length > 0,
      message: "There must be at least one tag",
    },
  },
  variants: {
    type: [variantSchema],
    required: [true, "At least one variant is required"],
  },
  inventory: {
    quantity: {
      type: Number,
      required: [true, "Inventory quantity is required"],
      min: [0, "Inventory quantity must be a non-negative number"],
    },
    inStock: {
      type: Boolean,
      required: [true, "Inventory inStock status is required"],
    },
  },
});

export const ProductModel = model<Product>("Product", productSchema);
