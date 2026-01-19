import React from "react";

const ServiceCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="card bg-white shadow-md transition-all duration-300 ease-in-out 
          hover:shadow-2xl
        hover:text-[#03373D]
        hover:bg-[#CAEB66]">
            <div className="card-body items-center text-center">

                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary text-3xl mb-4">
                    <Icon />
                </div>

                {/* Title */}
                <h3 className="card-title text-lg font-semibold text-[#03373D]">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#606060]">
                    {description}
                </p>

            </div>
        </div>
    );
};

export default ServiceCard;
