import React from 'react';

const BenefitCard = ({ title, description, image }) => {
    return (
        <div className="bg-white rounded-3xl shadow-sm p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">

            {/* Image */}
            <div className="w-full md:w-1/4 flex justify-center">
                <img
                    src={image}
                    alt={title}
                    className="max-w-45"
                />
            </div>

            {/* Divider */}
            <div className="hidden md:block h-32 border-l-2 border-dashed border-[#03464D]"></div>

            {/* Content */}
            <div className="w-full md:w-3/4 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-[#03373D] mb-3">
                    {title}
                </h3>
                <p className="text-[#606060] leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BenefitCard;