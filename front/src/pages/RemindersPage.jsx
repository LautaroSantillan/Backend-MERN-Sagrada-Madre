import { useReminders } from "../context/RemindersContext";
import { useEffect } from "react";

function RemindersPage(){
    const { getReminders, reminders } = useReminders();

    useEffect(() => {
        getReminders();
    }, [])

    if(reminders.length === 0) return (<h1>There are not reminders</h1>);

    return(
        <div className="flex h-[calc(100vh-100px)] items-center">
            {reminders.map(reminder => (
                <div key={reminder._id}>
                    <h1>{reminder.title}</h1>
                    <p>{reminder.description}</p>
                </div>
            ))}
        </div>
    )
}

export default RemindersPage;