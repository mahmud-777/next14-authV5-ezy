import mongoose from "mongoose";

const DBConnect = async ()=> {
  try {
    await mongoose.connect("mongodb://localhost:27017/products")
    console.log("DB Connected ")
  } catch (error) {
    console.log(error)    
  }

}

export default DBConnect;