
import mongoose from 'mongoose'

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("DB Connected Successfully")
  } catch (error) {
    console.log(error)    
  }  
}

export default DBConnection
 