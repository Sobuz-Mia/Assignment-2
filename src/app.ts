import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.routes";

// parsers

app.use(express.json());
app.use(cors());
// all routers here
app.use("/api/products", ProductRoutes);
// app.get("/", ProductRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
