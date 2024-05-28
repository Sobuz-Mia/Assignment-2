import { z } from "zod";

const OrderValidationSchema = z.object({
  email: z.string().email("Invalid Email Format"),
  productId: z.string(),
  price: z.number().min(0, "Price must be a positive number"),
  quantity: z.number().min(0, "Quantity Must be a positive number"),
});

export default OrderValidationSchema;
