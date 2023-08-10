import { Router } from "express";
import { register, login, logout } from "../controllers/auth.controller.js";

const router = Router();

// ROUTES POST
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout)

export default router;