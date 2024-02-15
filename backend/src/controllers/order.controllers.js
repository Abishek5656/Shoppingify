import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Order } from "../models/oder.model.js";

export const orderProduct = asyncHandler(async (req, res) => {
  const { name, orderList } = req.body;

  if (!name || !orderList) {
    throw new  ApiError(400, "All fields ar required");
  }


  console.log("orderList")
  console.log(orderList)


  const order = await Order.create({
    name,
    orderList,
  });

  console.log("order")
  console.log(order)

  if (!order) {
    throw new  ApiError(400, "something went wrong while creating the order");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, order, "Order Created Sucessfully"));
});
