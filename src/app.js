import express from "express";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js';

// MIDDLEWARES
const app = express();
app.use(morgan('dev'));
app.use(express.json());

// ROUTES
app.use("/api", authRoutes); 

export default app;