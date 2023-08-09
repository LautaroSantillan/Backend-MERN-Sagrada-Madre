// IMPORTS
import express from "express";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js';
import cookieParser from "cookie-parser";
// import reminderRoutes from "./routes/reminders.routes.js"

// MIDDLEWARES
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use("/api", authRoutes); 
// app.use("/api", reminderRoutes);

export default app;