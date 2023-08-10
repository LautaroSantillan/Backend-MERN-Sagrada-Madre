import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

// ROUTES POST
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// ROUTES GET
router.get('/profile', authRequired, profile);

export default router;