// import mongoose, { Schema } from "mongoose";

// const orderSchema = new Schema(
//   {
//       name: {
//         typeo:String
//       },
//       Date: {
//         type: Date
//       },
//       orderList:[

//       ]
//   },
//   {
//     timestamps: true,
//   }
// );

// export const Order = mongoose.model("Order", orderSchema);

import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    userName: {
      type: String,
      required: true
    },
    orderDate: {
      type: Date,
      default: Date.now
    },
    orderList: {
      type: Array,
      default: []
    }
  },
  {
    timestamps: true
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;

