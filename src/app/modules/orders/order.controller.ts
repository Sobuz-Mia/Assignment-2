import { Request, Response } from "express";
import { OrderServices } from "./order.services";
// create a order
const createAOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await OrderServices.createAOrderInDB(order);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
};

// get all orders data
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    if (email) {
      const result = await OrderServices.getOrderDataByEmail(email);
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully for user email!",
        data: result,
      });
      return;
    }
    const result = await OrderServices.getAllOrderData();
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    } else {
      res.status(401).json({
        success: false,
        message: String(error),
      });
    }
  }
};

export const OrderController = {
  createAOrder,
  getAllOrder,
};
