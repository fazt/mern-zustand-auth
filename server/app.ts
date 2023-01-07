import express from "express";
import morgan from "morgan";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import noteRoutes from "./routes/notes.routes";
import { corsOptions } from "./config";

const app = express();

// Middlewares
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);

// error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err, req, res, _) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});


export default app;
