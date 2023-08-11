import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getReminders, getReminder, createReminders, updateReminder, deleteReminders } from "../controllers/reminders.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { reminderSchema } from "../schemas/reminder.schema.js";

const router = Router();

// ROUTES REMINDERS
router.get('/reminders', authRequired, getReminders);

router.get('/reminders/:id', authRequired, getReminder);

router.post('/reminders', authRequired, validateSchema(reminderSchema), createReminders);

router.put('/reminders/:id', authRequired, updateReminder);

router.delete('/reminders/:id', authRequired, deleteReminders);

export default router