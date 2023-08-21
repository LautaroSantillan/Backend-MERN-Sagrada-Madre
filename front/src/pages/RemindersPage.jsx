import { useReminders } from "../context/RemindersContext";
import { useEffect } from "react";
import ReminderCard from "../components/ReminderCard";

function RemindersPage(){
    const { getReminders, reminders } = useReminders();

    useEffect(() => {
        getReminders();
    }, [])

    if(reminders.length === 0) return (
        <div className="flex h-[calc(100vh-100px)] items-center">
            <h1>There are not reminders</h1>
        </div>
    );

    return(
        <div className="grid grid-cols-3 gap-2 my-36">
            {reminders.map((reminder) => (
                <ReminderCard reminder={reminder} key={reminder._id} />
            ))}
        </div>
    )
}

export default RemindersPage;