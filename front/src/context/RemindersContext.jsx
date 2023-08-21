import { createContext, useContext, useState } from "react";
import { createReminderRequest, getRemindersRequest } from "../api/reminders";

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

    return(
        <ReminderContext.Provider 
            value={{
                reminders,
                createReminder,
                getReminders,
            }}
        >
            {children}
        </ReminderContext.Provider>
    );
}