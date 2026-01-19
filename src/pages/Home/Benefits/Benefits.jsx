import React from 'react';
import BenefitCard from './BenefitCard';

// import illustrations
import tracking from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";
import support from "../../../assets/safe-delivery.png";

// --- Data ---

const benefitsData = [
    {
        id: 1,
        title: "Live Parcel Tracking",
        description:
            "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
        image: tracking,
    },
    {
        id: 2,
        title: "100% Safe Delivery",
        description:
            "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
        image: safeDelivery,
    },
    {
        id: 3,
        title: "24/7 Call Center Support",
        description:
            "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        image: support,
    },
];

const Benefits = () => {
    return (
        <section className="py-24 border-y border-dashed border-[#03464D]">
            <div className="container mx-auto px-4 space-y-8">
                {benefitsData.map((item) => (
                    <BenefitCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default Benefits;