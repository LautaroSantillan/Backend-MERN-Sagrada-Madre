import { useForm } from "react-hook-form";
import { useReminders } from "../context/RemindersContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

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
            }
        }
        loadReminder()
    }, []);

    const onSubmit = handleSubmit((data) => {
        if(params.id){
            updateReminder(params.id, data);
            navigate("/reminders");
        } else {
            createReminder(data);
            navigate("/reminders");
        }
    })

    return(
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-orange-200 max-w-md w-full p-10 rounded-md">
                <form onSubmit={onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Title" 
                        {...register("title")} 
                        className="w-full bg-orange-100 text-black px-4 py-2 rounded-md my-2" 
                        autoFocus 
                    />
                    <textarea 
                        rows="3" 
                        placeholder="Description" 
                        {...register("description")} 
                        className="w-full bg-orange-100 text-black px-4 py-2 rounded-md my-2"
                    ></textarea>
                    <button>Save</button>
                </form>
            </div>
        </div>
    )
}

export default RemindersFormPage;