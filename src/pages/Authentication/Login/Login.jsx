import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => { console.log(data) }

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
                items-center
                justify-center
                px-4
                sm:px-6
                lg:px-8
            "
        >
            <div
                className="
                    w-full
                    max-w-md
                    sm:max-w-lg
                    bg-white
                    rounded-2xl
                    p-6
                    sm:p-8
                    shadow-sm
                "
            >
                <h1
                    className="
                        font-extrabold
                        text-3xl
                        sm:text-4xl
                        lg:text-5xl
                        text-[#0F172A]
                    "
                >
                    Welcome Back
                </h1>

                <p
                    className="
                        mt-2
                        mb-5
                        text-sm
                        sm:text-base
                        text-[#0F172A]
                    "
                >
                    Login with ZapShift
                </p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">

                        <label className="label text-[#0F172A]">Email</label>
                        <input
                            type="email"
                            {...register('email', { required: true })}
                            className="input w-full"
                            placeholder="Email"
                        />

                        {errors.email?.type === "required" && (
                            <span className="text-red-500 text-sm">
                                This field is required
                            </span>
                        )}

                        <label className="label text-[#0F172A] mt-4">
                            Password
                        </label>

                        <input
                            type="password"
                            {...register('password', {
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

                        <div className="mt-2 text-sm">
                            <a className="link text-[#71717A] link-hover">
                                Forgot password?
                            </a>
                        </div>

                    </fieldset>

                    <button
                        className="
                            btn
                            w-full
                            border-none
                            text-black
                            bg-[#CAEB66]
                            mt-6
                        "
                    >
                        Login
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default Login;
