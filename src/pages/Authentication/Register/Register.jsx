import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }}
            className="
                w-full
                flex
                justify-center
                px-4
                sm:px-6
            "
        >
            <div
                className="
                    card
                    w-full
                    max-w-sm
                    sm:max-w-md
                    shadow-2xl
                "
            >
                <div className="card-body p-6 sm:p-8">
                    <h1 className="text-3xl text-[#0F172A] sm:text-4xl font-bold">
                        Create an Account
                    </h1>

                    <p className="text-sm text-[#0F172A] sm:text-base">
                        Register with ZapShift
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="fieldset">

                            <label className="label text-[#0F172A]">Name</label>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="Name"
                            />

                            <label className="label text-[#0F172A] mt-3">Email</label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                className="input w-full"
                                placeholder="Email"
                            />

                            {errors.email?.type === "required" && (
                                <span className="text-red-500 text-sm">
                                    This field is required
                                </span>
                            )}

                            <label className="label text-[#0F172A] mt-3">Password</label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6
                                })}
                                className="input w-full"
                                placeholder="Password"
                            />

                            {errors.password?.type === "required" && (
                                <span className="text-red-500 text-sm">
                                    This field is required
                                </span>
                            )}

                            {errors.password?.type === "minLength" && (
                                <span className="text-red-500 text-sm">
                                    Must Be 6 Characters
                                </span>
                            )}

                            <button
                                className="
                                    btn
                                    w-full
                                    p-4
                                    border-none
                                    text-[#1F1F1F]
                                    bg-[#CAEB66]
                                    mt-5
                                "
                            >
                                Register
                            </button>

                        </fieldset>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Register;
