import React from 'react';
import authImg from "../assets/authImage.png"
import { Outlet } from 'react-router';
import ZapShift from '../pages/shared/ZapShift/ZapShift';

const AuthLayout = () => {
    return (
        <div className="p-12 border-2 rounded-2xl">
            <ZapShift />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1 border-2 rounded-2xl'>
                    <img
                        src={authImg}
                        className="shadow-2xl"
                    />
                </div>
                <div className='flex-1 border-2 lg:p-11 rounded-2xl'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;