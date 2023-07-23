import mongoose from "mongoose";

async function connectDB(DB_URL: any) {
  try {
    await mongoose.connect(DB_URL);
    console.log("Success connection");
  } catch (e) {
    throw new Error("Failed to connect DB");
  }
}

export default connectDB;
