import { Link } from "react-router-dom";
import { useReminders } from "../context/RemindersContext";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

function ReminderCard({ reminder }) {
    const { deleteReminder } = useReminders();

    return(
        <div className="bg-orange-200 max-w-md w-full p-10 rounded-md text-black">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{reminder.title}</h1>
                <div className="flex gap-x-2 items-center">
                    <Link to={`/reminders/${reminder._id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                        Edit
                    </Link>
                    <button 
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                        onClick={() => {
                            deleteReminder(reminder._id);
                    }}>Delete</button>
                </div>
            </header>
            <p className="text-black">{reminder.description}</p>
            <p>{dayjs(reminder.date).utc().format("DD/MM/YYYY")}</p>
        </div>
    )
}

export default ReminderCard