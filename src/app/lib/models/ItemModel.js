import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
  itemName: String,
  price: Number
},{ timestamps: true });

const ItemModel = mongoose.models?.Item || mongoose.model("Item", itemSchema)

export default ItemModel;