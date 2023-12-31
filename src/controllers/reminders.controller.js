import Reminder from "../models/reminder.model.js";

export const getReminders = async (req, res) => {
    try {
        const reminders = await Reminder.find({
            user: req.user.id,
        }).populate('user');
        res.json(reminders);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const createReminders = async (req, res) => {
    try {
        const { title, description, date } = req.body;
        const newReminder = new Reminder({
            title,
            description,
            date,
            user: req.user.id,
        });
        const savedReminder = await newReminder.save();
        res.json(savedReminder);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const getReminder = async (req, res) => {
    try {
        const reminder = await Reminder.findById(req.params.id).populate('user');
        if(!reminder) return res.status(404).json({ message: "Reminder not found" });
        res.json(reminder);
    } catch (error) {
        return res.status(404).json({ message: "Reminder not found" });
    }
}

export const updateReminder = async (req, res) => {
    try {
        const reminder = await Reminder.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if(!reminder) return res.status(404).json({ message: "Reminder not found" });
        res.json(reminder);
    } catch (error) {
        return res.status(404).json({ message: "Reminder not found" });
    }
}

export const deleteReminders = async (req, res) => {
    try {
        const reminder = await Reminder.findByIdAndDelete(req.params.id, req.body, {
            new: true,
        });
        if(!reminder) return res.status(404).json({ message: "Reminder not found" });
        res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "Reminder not found" });
    }
}