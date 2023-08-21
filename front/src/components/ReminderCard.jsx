import { Link } from "react-router-dom";
import { useReminders } from "../context/RemindersContext"

function ReminderCard({ reminder }) {
    const { deleteReminder } = useReminders();

    return(
        <div className="bg-orange-200 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{reminder.title}</h1>
                <div className="flex gap-x-2 items-center">
                    <button onClick={() => {
                        deleteReminder(reminder._id);
                    }}>Delete</button>
                    <Link to={`/reminders/${reminder._id}`}>Edit</Link>
                </div>
            </header>
            <p className="text-slate-300">{reminder.description}</p>
            <p>{new Date(reminder.date).toLocaleDateString()}</p>
        </div>
    )
}

export default ReminderCard