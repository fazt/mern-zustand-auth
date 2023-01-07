import mongoose from "mongoose";

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/merndb");
    console.log(conn.connection.name);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
