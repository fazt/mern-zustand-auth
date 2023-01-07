import { CorsOptions } from "cors";

export const JWT_SECRET = "secret";

export const corsOptions: CorsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
};
