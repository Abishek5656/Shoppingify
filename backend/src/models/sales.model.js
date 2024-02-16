import mongoose, { Schema } from "mongoose";

const salesSchema = new Schema(

      {
            categoryId:{
                  type: Schema.Types.ObjectId,
                  ref: "Category",
            },
            categoryName: {
                  type: String,
            },
            itemId:{
                  type: Schema.Types.ObjectId,
                  ref: "Product", 
            },
            itemName: {
                  
            }
      }
)