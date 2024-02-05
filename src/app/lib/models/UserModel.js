
import mongoose, { Schema} from "mongoose";

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: 'user'
  }
})

const UserModel = mongoose.models?.User || mongoose.model("User", userSchema);

export default UserModel;