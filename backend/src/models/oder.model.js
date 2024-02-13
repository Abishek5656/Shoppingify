import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    name: {
      type: String,
    },
    itemId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    categoryName: {
      type: String,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model("Order", orderSchema);
