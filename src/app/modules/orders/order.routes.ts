import express, { Router } from "express";
import { OrderController } from "./order.controller";
const router = express.Router();

router.post("/", OrderController.createAOrder);
router.get("/", OrderController.getAllOrder);
export const OrderRoutes = router;
