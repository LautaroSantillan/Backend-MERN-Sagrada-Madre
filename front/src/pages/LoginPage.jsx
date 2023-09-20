import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, errors: signinErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const onSubmit =  handleSubmit((data) => {
        signin(data);
    });

    useEffect(() => {
        if(isAuthenticated) navigate("/reminders");
    }, [isAuthenticated])

    return(
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-orange-200 max-w-md w-full p-10 rounded-md">
                {
                    signinErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 text-black text-center my-2" key={i}>
                            {error}
                        </div>
                    ))
                }
                <h1 className="text-2xl font-bold text-black">LOGIN</h1>
                <form onSubmit={onSubmit}>
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
                    <button type="submit" className="bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-md my-2">Login</button>
                </form>
                <p className="flex gap-x-2 justify-between text-black">
                    Don't have an account? <Link to="/register" className="text-orange-600 hover:text-black">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage