import React from "react";

const ServiceCard = ({ icon: Icon, title, description }) => {
    return (
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
            <div className="card-body items-center text-center">

                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary text-3xl mb-4">
                    <Icon />
                </div>

                {/* Title */}
                <h3 className="card-title text-lg font-semibold">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500">
                    {description}
                </p>

            </div>
        </div>
    );
};

export default ServiceCard;
