import React from 'react';
import ZapShift from '../ZapShift/ZapShift';
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-neutral text-neutral-content p-10 rounded-4xl mt-24">

            <aside>
                <ZapShift></ZapShift>
                <p className="font-normal">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to
                    business shipments — we deliver on time, every time.
                </p>
            </aside>

            <div className='flex flex-wrap items-center justify-center gap-9 w-3/4 border-y-2 border-dashed border-[#03464D] py-8'>
                <a target="_blank" href="">Services</a>
                <a target="_blank" href="">Coverage</a>
                <a target="_blank" href="">About Us</a>
                <a target="_blank" href="">Pricing</a>
                <a target="_blank" href="">Blog</a>
                <a target="_blank" href="">Contact</a>
            </div>

            <nav>
                <div className="flex items-center justify-center gap-4">
                    <a target="_blank" href='https://www.linkedin.com/in/md-tanvir-anjum-shozib/'>
                        <FaLinkedin className='text-3xl' />
                    </a>
                    <a target="_blank" href='https://www.linkedin.com/in/md-tanvir-anjum-shozib/'>
                        <FaXTwitter className='text-3xl' />
                    </a>
                    <a target="_blank" href='https://www.linkedin.com/in/md-tanvir-anjum-shozib/'>
                        <FaFacebook className='text-3xl' />
                    </a>
                    <a target="_blank" href='https://www.linkedin.com/in/md-tanvir-anjum-shozib/'>
                        <FaYoutube className='text-3xl' />
                    </a>
                </div>
            </nav>

        </footer>
    );
};

export default Footer;