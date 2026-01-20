import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import customerImage from "../../../assets/customer-top.png";

const testimonialsData = [
    {
        id: 1,
        text: "ZapShift Courier has completely transformed how we handle deliveries. Fast service, accurate tracking, and professional support make them our top choice.",
        name: "Awlad Hossin",
        role: "Senior Product Designer",
    },
    {
        id: 2,
        text: "Their nationwide delivery coverage helped our business grow faster. Parcels reach customers on time, every time, without hassle.",
        name: "Rasel Ahamed",
        role: "CTO",
    },
    {
        id: 3,
        text: "What I love most is their customer support. Any issue is resolved quickly, and the cash on delivery system is very reliable.",
        name: "Nasir Uddin",
        role: "CEO",
    },
    {
        id: 4,
        text: "We’ve been using ZapShift Courier for months now. Their express delivery service in Dhaka is incredibly fast and dependable.",
        name: "Sadia Rahman",
        role: "E-commerce Manager",
    },
    {
        id: 5,
        text: "Smooth pickup, safe delivery, and transparent tracking — ZapShift Courier delivers exactly what they promise.",
        name: "Tanvir Hasan",
        role: "Small Business Owner",
    },
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const prevSlide = () => {
        setActiveIndex((prev) =>
            prev === 0 ? testimonialsData.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setActiveIndex((prev) =>
            prev === testimonialsData.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section className="my-28 overflow-hidden">
            <div className="container mx-auto px-4 text-center">

                {/* Top image */}
                <img src={customerImage} className="mx-auto mb-6" alt="" />

                <h2 className="text-[#03373D] text-4xl font-bold mb-4">
                    What our customers are saying
                </h2>

                <p className="max-w-xl mx-auto text-gray-500 mb-10">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>

                {/* Carousel */}
                <div className="relative h-105 flex items-center justify-center">

                    {testimonialsData.map((item, index) => (
                        <TestimonialCard
                            key={item.id}
                            testimonial={item}
                            position={index - activeIndex}
                        />
                    ))}

                </div>

                {/* Controls */}
                <div className="flex justify-center items-center gap-6 mt-6">
                    <button onClick={prevSlide} className="btn btn-circle btn-outline">
                        ←
                    </button>

                    <button
                        onClick={nextSlide}
                        className="btn btn-circle bg-lime-400 text-black hover:bg-lime-500"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
