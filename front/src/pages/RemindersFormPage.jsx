import { useForm } from "react-hook-form";
import { useReminders } from "../context/RemindersContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

function RemindersFormPage(){
    const { register, handleSubmit, setValue } = useForm();
    const { createReminder, getReminder, updateReminder } = useReminders();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadReminder(){
            if(params.id){
                const reminder = await getReminder(params.id);
                console.log(reminder);
                setValue('title', reminder.title);
                setValue('description', reminder.description);
                setValue("date", dayjs(reminder.date).utc().format("YYYY-MM-DD"));
            }
        }
        loadReminder()
    }, []);

    const onSubmit = handleSubmit((data) => {
        const dataValid = {
            ...data,
            date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
        }

        if(params.id){
            updateReminder(params.id, dataValid);
            navigate("/reminders");
        } else {
            createReminder(dataValid);
            navigate("/reminders");
        }
    })

    return(
        <div className="flex h-[calc(100vh-10px)] items-center justify-center">
            <div className="bg-orange-200 max-w-md w-full p-10 rounded-md">
                <form onSubmit={onSubmit}>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        placeholder="Title" 
                        {...register("title")} 
                        className="w-full bg-orange-100 text-black px-4 py-2 rounded-md my-2" 
                        autoFocus 
                    />

                    <label htmlFor="description">Description</label>
                    <textarea 
                        rows="3" 
                        placeholder="Description" 
                        {...register("description")} 
                        className="w-full bg-orange-100 text-black px-4 py-2 rounded-md my-2"
                    ></textarea>

                    <label htmlFor="date">Date</label>
                    <input 
                        type="date" {...register('date')} 
                        className="w-full bg-orange-100 text-black px-4 py-2 rounded-md my-2"
                    />

                    <button className="bg-indigo-500 px-3 py-2 rounded-md">Save</button>
                </form>
            </div>
        </div>
    )
}

export default RemindersFormPage;