import express from "express";
import morgan from "morgan";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import noteRoutes from "./routes/notes.routes";

const app = express();

// Middlewares
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);

export default app;
