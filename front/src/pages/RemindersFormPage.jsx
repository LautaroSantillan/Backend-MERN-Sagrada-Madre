import { useForm } from "react-hook-form";
import { useReminders } from "../context/RemindersContext";

function RemindersFormPage(){
    const { register, handleSubmit } = useForm();
    const { createReminder } = useReminders();

    const onSubmit = handleSubmit((data) => {
        createReminder(data);
    })

    return(
        <div className="bg-orange-400 max-w-md w-full p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    {...register("title")} 
                    className="w-full bg-orange-300 text-black px-4 py-2 rounded-md my-2" 
                    autoFocus 
                />
                <textarea 
                    rows="3" 
                    placeholder="Description" 
                    {...register("description")} 
                    className="w-full bg-orange-300 text-black px-4 py-2 rounded-md my-2"
                ></textarea>
                <button>Save</button>
            </form>
        </div>
    )
}

export default RemindersFormPage;