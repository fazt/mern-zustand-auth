import mongoose from "mongoose";
import { MONGO_URI } from "./config";

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(conn.connection.name);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
