import mongoose from "mongoose"

const connectDB = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DATABASE_NAME}`
    )
    console.log("Connected to MongoDB!")
  } catch (error) {
    console.error(`Database error: ${error}`)
  }
}

export default connectDB
