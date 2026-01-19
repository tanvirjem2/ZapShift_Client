import React from 'react';
import Marquee from 'react-fast-marquee';

// --- Import Logos ---
import logo1 from "../../../assets/brands/casio.png"
import logo2 from "../../../assets/brands/amazon.png"
import logo3 from "../../../assets/brands/moonstar.png"
import logo4 from "../../../assets/brands/star.png"
import logo5 from "../../../assets/brands/start_people.png"
import logo6 from "../../../assets/brands/randstad.png"
import logo7 from "../../../assets/brands/amazon_vector.png"

const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
];

const ClientLogosMarquee = () => {
    return (
        <section className='mb-24'>
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-[28px] md:text-4xl font-bold mb-2 text-[#03373D]">
                        We've helped thousands of sales teams
                    </h2>
                </div>

                {/* Marquee */}
                <Marquee
                    speed={50}
                    pauseOnHover={true}
                    gradient={false}
                    direction="left"
                >
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="mx-10 flex items-center justify-center"
                        >
                            <img
                                src={logo}
                                alt="Client Logo"
                            />
                        </div>
                    ))}
                </Marquee>

            </div>
        </section>
    );
};

export default ClientLogosMarquee;