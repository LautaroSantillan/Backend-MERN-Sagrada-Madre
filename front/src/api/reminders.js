import axios from "./axios";

export const getRemindersRequest = () => axios.get("/reminders");

export const getReminderRequest = (id) => axios.get(`/reminders/${id}`);

export const createReminderRequest = (reminder) => axios.post("/reminders", reminder);

export const updateReminderRequest = (id, reminder) => axios.put(`/reminders/${id}`, reminder);

export const deleteReminderRequest = (id) => axios.delete(`/reminders/${id}`);