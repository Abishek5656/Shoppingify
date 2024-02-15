import { Router } from "express";
import { orderProduct } from "../controllers/order.controllers";

const router = Router();


router.route("/create-order").post(orderProduct);


export default router;