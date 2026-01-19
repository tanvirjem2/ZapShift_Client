import React from 'react';
import {
    FaTruckPickup,
    FaMoneyBillWave,
    FaWarehouse,
    FaBuilding,
} from "react-icons/fa";
import HowItWorksCard from './HowItWorksCard';

const howItWorksData = [
    {
        id: 1,
        title: "Booking Pick & Drop",
        description:
            "From personal packages to business shipments — we deliver on time, every time.",
        icon: FaTruckPickup,
    },
    {
        id: 2,
        title: "Cash On Delivery",
        description:
            "From personal packages to business shipments — we deliver on time, every time.",
        icon: FaMoneyBillWave,
    },
    {
        id: 3,
        title: "Delivery Hub",
        description:
            "From personal packages to business shipments — we deliver on time, every time.",
        icon: FaWarehouse,
    },
    {
        id: 4,
        title: "Booking SME & Corporate",
        description:
            "From personal packages to business shipments — we deliver on time, every time.",
        icon: FaBuilding,
    },
];


const HowItWorks = () => {
    return (
        <section className="my-24 py-16">
            <div className="container mx-auto px-4">

                {/* Section Title */}
                <h2 className="text-2xl md:text-3xl font-semibold text-[#03373D] mb-10">
                    How it Works
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {howItWorksData.map((item) => (
                        <HowItWorksCard key={item.id} item={item} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;