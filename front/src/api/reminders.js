import axios from "./axios";

export const getRemindersRequest = () => axios.get("/reminders");

export const getReminderRequest = (id) => axios.get(`/reminders/${id}`);

export const createReminderRequest = (reminder) => axios.post("/reminders", reminder);

export const updateReminderRequest = (reminder) => axios.put(`/reminders/${reminder._id}`, reminder);

export const deleteReminderRequest = (id) => axios.delete(`/reminders/${id}`);