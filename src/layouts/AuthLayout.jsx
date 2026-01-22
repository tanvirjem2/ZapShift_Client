import React from 'react';
import authImg from "../assets/authImage.png"
import { Outlet } from 'react-router';
import ZapShift from '../pages/shared/ZapShift/ZapShift';

const AuthLayout = () => {
    return (
        <div className="p-12 bg-base-200">
            <ZapShift />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1 border-2'>
                    <img
                        src={authImg}
                        className="shadow-2xl"
                    />
                </div>
                <div className='flex-1 border-2'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;