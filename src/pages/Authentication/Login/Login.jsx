import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    // --- React Hook Form ---

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // -- pass the onSubmit in handleSubmit ---

    const onSubmit = (data) => { console.log(data) }

    return (
        <div>
            <h1 className='font-extrabold text-5xl'>Welcome Back</h1>
            <p className='mb-5'>Login with ZapShift</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">

                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })}
                        className="input" placeholder="Email" />

                    {errors.email?.type === "required" && (
                        <span className='text-red-500'>This field is required</span>
                    )}

                    <label className="label">Password</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: true,
                            minLength: 6
                        })}
                        className="input" placeholder="Password" />

                    {errors.password?.type === "required" && (
                        <span className='text-red-500'>This field is required</span>
                    )}

                    {errors.password?.type === "minLength" && (
                        <span className='text-red-500'>Must Be 6 Characters</span>
                    )}

                    <div><a className="link link-hover">Forgot password?</a></div>

                </fieldset>
                <button className="btn text-[black] bg-[#CAEB66] mt-4">Login</button>

            </form>
        </div>
    );
};

export default Login;