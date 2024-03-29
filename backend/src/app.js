import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//routes import
import productRouter from "./routes/product.route.js";
import orderRouter from "./routes/order.route.js";

//routes declaration
app.use("/api/v1/product", productRouter);
app.use("/api/v1/orders", orderRouter)

export { app };
