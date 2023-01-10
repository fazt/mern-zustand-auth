import { CorsOptions } from "cors";
import { config } from "dotenv";

config();

export const JWT_SECRET = process.env.JWT_SECRET || "secret";

const origin = process.env.ORIGIN || "http://localhost:5173";
export const PORT = process.env.PORT || 5000;
export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/merndb";

export const corsOptions: CorsOptions = {
  origin: [origin],
  credentials: true,
};
