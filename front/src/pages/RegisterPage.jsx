import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RegisterPage(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: RegisterError } = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        if(isAuthenticated) navigate("/reminders");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit (async (values) => {
        signup(values);
    });
    
    return(
        <div className="bg-orange-200 max-w-md p-10 rounded-md">
            {
                RegisterError.map((error, i) => {
                    <div className="bg-red-500 p-2 text-white" key={i}>
                        {error}
                    </div>
                })
            }
            <form onSubmit={onSubmit}>
                <input type="text" { ...register("username", { required: true })} 
                    className="w-full bg-orange-100 text-black px-4 py-2 rounded-md my-2"
                    placeholder="Username"
                />
                {errors.username && (
                    <p className="text-red-500">Username is required</p>
                )}
                <input type="email" { ...register("email", { required: true })} 
                    className="w-full bg-orange-100 text-black px-4 py-2 rounded-md my-2"
                    placeholder="Email"
                />
                {errors.email && (
                    <p className="text-red-500">Email is required</p>
                )}
                <input type="password" { ...register("password", { required: true })} 
                    className="w-full bg-orange-100 text-black px-4 py-2 rounded-md my-2"
                    placeholder="Password"
                />
                {errors.password && (
                    <p className="text-red-500">Password is required</p>
                )}
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage