import React from 'react';

const HowItWorksCard = ({ item }) => {
    const { title, description, icon: Icon } = item;
    return (
        <div className="card bg-white rounded-2xl p-8 hover:shadow-lg transition duration-300">

            {/* Icon */}
            <div className="text-[#03373D] text-3xl mb-4">
                <Icon />
            </div>

            {/* Title */}
            <h3 className="text-[#03373D] font-semibold mb-2">
                {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#606060] leading-relaxed">
                {description}
            </p>

        </div>
    );
};

export default HowItWorksCard;