import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

// ROUTES GET
router.get('/reminders', authRequired, (req, res) => res.send("reminders"))

export default router