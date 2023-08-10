// IMPORTS
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.routes.js';
import reminderRoutes from "./routes/reminders.routes.js";

// MIDDLEWARES
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use("/api", authRoutes); 
app.use("/api", reminderRoutes);

export default app;