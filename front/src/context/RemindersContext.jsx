import { createContext, useContext, useState } from "react";
import { createReminderRequest, getRemindersRequest, deleteReminderRequest, getReminderRequest, updateReminderRequest } from "../api/reminders";

const ReminderContext = createContext();

export const useReminders = () => {
    const context = useContext(ReminderContext);
    if(!context) {
        throw new Error("useReminders must be used within a ReminderProvider");
    }

    return context
}

export function ReminderProvider({ children }){
    const [reminders, setReminders] = useState([]);

    const createReminder = async (reminder) => {
        const res = await createReminderRequest(reminder);
        console.log(res);
    }

    const getReminders = async () => {
        try {
            const res = await getRemindersRequest();
            setReminders(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const deleteReminder = async (id) => {
        try {
            const res = await deleteReminderRequest(id);
            if(res.status === 204) setReminders(reminders.filter(reminder => reminder._id != id))
        } catch (error) {
            console.log(error);
        }
    }

    const getReminder = async (id) => {
        try {
            const res = await getReminderRequest(id);
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    const updateReminder = async (id, reminder) => {
        try {
            await updateReminderRequest(id, reminder);
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <ReminderContext.Provider 
            value={{
                reminders,
                createReminder,
                getReminders,
                deleteReminder,
                getReminder,
                updateReminder,
            }}
        >
            {children}
        </ReminderContext.Provider>
    );
}