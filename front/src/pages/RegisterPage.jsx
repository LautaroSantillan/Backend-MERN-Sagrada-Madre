import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (values) =>{
        signup(values);
    });

    useEffect(() => {
        if(isAuthenticated) navigate("/reminders");
    }, [isAuthenticated])

    return(
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-orange-200 max-w-md p-10 rounded-md">
                {
                    registerErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 text-black" key={i}>
                            {error}
                        </div>
                    ))
                }
                <h1 className="text-2xl font-bold text-black">REGISTER</h1>
                <form onSubmit={onSubmit}>
                    <input type="text" {...register("username", { required: true })} 
                    className="w-full bg-orange-100 text-black px-4 py-2 my-2 rounded-md"
                    placeholder="Username"
                    />
                    {errors.username && (
                        <p className="text-red-500">Username is required</p>
                    )}
                    <input type="email" {...register("email", { required: true })} 
                    className="w-full bg-orange-100 text-black px-4 py-2 my-2 rounded-md"
                    placeholder="Email"
                    />
                    {errors.email && (
                        <p className="text-red-500">Email is required</p>
                    )}
                    <input type="password" {...register("password", { required: true })} 
                    className="w-full bg-orange-100 text-black px-4 py-2 my-2 rounded-md"
                    placeholder="Password"
                    />
                    {errors.password && (
                        <p className="text-red-500">Password is required</p>
                    )}
                    <button type="submit" className="bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-md my-2">Register</button>
                </form>
                <p className="flex gap-x-2 justify-between text-black">
                    Already have an account? <Link to="/login" className="text-orange-600 hover:text-black">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;