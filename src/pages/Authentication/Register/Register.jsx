import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-4xl font-bold">Create an Account</h1>
                <p>Register with ZapShift</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">

                        <label className="label">Name</label>
                        <input type="name" className="input" placeholder="Name" />

                        <label className="label">Email</label>
                        <input type="email"  {...register("email", { required: true })}
                            className="input" placeholder="Email" />

                        {errors.email?.type === "required" && (
                            <span className='text-red-500'>This field is required</span>
                        )}

                        <label className="label">Password</label>
                        <input type="password" {...register("password", { required: true, minLength: 6 })}
                            className="input" placeholder="Password" />

                        {errors.password?.type === "required" && (
                            <span className='text-red-500'>This field is required</span>
                        )}

                        {errors.password?.type === "minLength" && (
                            <span className='text-red-500'>Must Be 6 Characters</span>
                        )}

                        <button
                            className='btn p-4 border-none 
                        text-[#1F1F1F] 
                        bg-[#CAEB66]
                        mt-2'>
                            Register
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;