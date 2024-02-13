import mongoose, { Schema} from "mongoose";

const ItemSchema = new Schema({
  itemName: String,
  price: Number
});

const ItemModel = mongoose.models?.Item || mongoose.model("Item", ItemSchema)

export default ItemModel;