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
        <section className="py-20 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <img src={customerImage} className="mx-auto mb-6 w-48" alt="" />
                <h2 className="text-[#03373D] text-4xl font-bold mb-4">What our customers are sayings</h2>
                <p className="max-w-xl mx-auto text-gray-500 mb-16">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                    Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>

                {/* Carousel Container */}
                <div className="relative h-100 flex items-center justify-center">
                    {testimonialsData.map((item, index) => {
                        let position = index - activeIndex;
                        // Loop logic
                        if (position < -2) position += testimonialsData.length;
                        if (position > 2) position -= testimonialsData.length;

                        return (
                            <TestimonialCard
                                key={item.id}
                                testimonial={item}
                                position={position}
                                isActive={activeIndex === index}
                            />
                        );
                    })}
                </div>

                {/* Controls */}
                <div className="flex justify-center items-center gap-4 mt-8">
                    <button onClick={prevSlide}
                        className="w-12 h-12 rounded-full 
                        text-black 
                        bg-white 
                        flex 
                        items-center 
                        justify-center 
                        shadow-sm 
                        hover:bg-lime-400 transition-colors"
                    >
                        <span className="text-xl">←</span>
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex gap-2">
                        {testimonialsData.map((_, i) => (
                            <div key={i}
                                className={`h-2 w-2 rounded-full transition-all ${activeIndex === i ? "bg-[#03373D] w-4" : "bg-gray-300"}`} />
                        ))}
                    </div>

                    <button onClick={nextSlide}
                        className="w-12 h-12 rounded-full 
                        text-black 
                        bg-white 
                        flex 
                        items-center 
                        justify-center 
                        shadow-sm 
                        hover:bg-lime-400 transition-colors"
                    >
                        <span className="text-xl">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
