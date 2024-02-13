import { Router } from "express";
import { orderItems, getAllOrders } from "../controllers/order.controllers.js";

const router = Router();

router.route("/create-order").post(orderItems);

router.route("/orderlist").get(getAllOrders);

export default router;
