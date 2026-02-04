import React from 'react';
import authImg from "../assets/authImage.png";
import { Outlet } from 'react-router';
import ZapShift from '../pages/shared/ZapShift/ZapShift';
import { motion } from 'framer-motion';

const AuthLayout = () => {
    return (
        <div className="min-h-screen w-full px-4 sm:px-6 lg:px-12">

            <ZapShift />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className="
                    flex
                    flex-col-reverse
                    lg:flex-row-reverse
                    items-center
                    justify-center
                    gap-8
                    lg:gap-12
                    mt-10
                "
            >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={authImg}
                        alt="Authentication"
                        className="
                            w-full
                            max-w-sm
                            sm:max-w-md
                            lg:max-w-lg
                            rounded-2xl
                            shadow-2xl
                            object-contain
                        "
                    />
                </div>

                {/* Form Section */}
                <div className="w-full lg:w-1/2 lg:px-10">
                    <Outlet />
                </div>

            </motion.div>
        </div>
    );
};

export default AuthLayout;
