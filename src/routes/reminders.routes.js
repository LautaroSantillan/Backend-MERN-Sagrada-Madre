import { Router } from "express";
import { auth } from "../middlewares/validateToken.js";

const router = Router();

router.get('/reminders', auth, (req, res) => res.send('reminders'));

export default router;