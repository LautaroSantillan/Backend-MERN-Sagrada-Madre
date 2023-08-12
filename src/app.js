// IMPORTS
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from './routes/auth.routes.js';
import reminderRoutes from "./routes/reminders.routes.js";

const app = express();

// MIDDLEWARES
app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use("/api", authRoutes); 
app.use("/api", reminderRoutes);

export default app;