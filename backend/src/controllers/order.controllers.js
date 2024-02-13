import mongoose from "mongoose";
import { Order } from "../models/oder.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Category } from "../models/category.model.js";

export const orderItems = asyncHandler(async (req, res) => {
  const { categoryId, item_id, item_name, quantity, category } = req.body;

  const searchCategory = await Category.findById(categoryId);

  if (!searchCategory) {
    throw new ApiError(400, "Category Not Found");
  }

  const existingOrder = await Order.find({ itemId: item_id });

  if (existingOrder.length > 0) {
    return res
      .status(200)
      .json(
        new ApiResponse(200, existingOrder, "Item already added to the cart")
      );
  }

  const newOrder = await Order.create({
    name: item_name,
    itemId: item_id,
    quantity: quantity,
    categoryName: searchCategory.categoryName,
    categoryId: searchCategory._id,
  });

  if (!newOrder) {
    throw new ApiError(
      400,
      "Failed to create the order. Please ensure all required fields are provided and try again."
    );
  }

  return res
    .status(201)
    .json(new ApiResponse(201, newOrder, "Item Added to Card"));
});

export const getAllOrders = asyncHandler(async (req, res) => {
  const orderlist = await Order.aggregate([
    {
      $group: {
        _id: "$categoryName",
        orderlist: {
          $push: {
            id: "$_id",
            item_name: "$name",
            item_id: "$itemId",
            quantity: "$quantity",
            item_categoryId: "$categoryId",
          },
        },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);

  if (!orderlist || orderlist.length === 0) {
    throw new ApiError(
      400,
      null,
      "No items found in the order list. Please add items to proceed."
    );
  }
  return res
    .status(200)
    .json(new ApiResponse(200, orderlist, "Retrieved order list successfully"));
});


