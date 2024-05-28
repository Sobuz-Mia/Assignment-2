import { z } from "zod";

// Define the Variant schema
const VariantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

// Define the Inventory schema
const InventoryValidationSchema = z.object({
  quantity: z.number().min(0),
  inStock: z.boolean(),
});

// Define the Product schema
const ProductValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive("Price must be a positive number"),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(VariantValidationSchema),
  inventory: InventoryValidationSchema,
});

export default ProductValidationSchema;
