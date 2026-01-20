import React from "react";
import ServiceCard from "./ServiceCard";
import {
    FaShippingFast,
    FaGlobeAsia,
    FaWarehouse,
    FaMoneyBillWave,
    FaBuilding,
    FaUndoAlt,
} from "react-icons/fa";

const servicesData = [
    {
        id: 1,
        title: "Express & Standard Delivery",
        description:
            "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
        icon: FaShippingFast,
    },
    {
        id: 2,
        title: "Nationwide Delivery",
        description:
            "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
        icon: FaGlobeAsia,
    },
    {
        id: 3,
        title: "Fulfillment Solution",
        description:
            "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
        icon: FaWarehouse,
    },
    {
        id: 4,
        title: "Cash on Home Delivery",
        description:
            "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
        icon: FaMoneyBillWave,
    },
    {
        id: 5,
        title: "Corporate Service / Contract In Logistics",
        description:
            "Customized corporate services which includes warehouse and inventory management support.",
        icon: FaBuilding,
    },
    {
        id: 6,
        title: "Parcel Return",
        description:
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
        icon: FaUndoAlt,
    },
];

const Services = () => {
    return (
        <section className="py-16 mb-24 rounded-4xl bg-[#03373D] sm:p-3 md:p-14 lg:p-28">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl text-white md:text-4xl font-bold mb-4">
                        Our Services
                    </h2>
                    <p className="text-[#DADADA]">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map(({ id, title, description, icon: Icon }) => (
                        <ServiceCard
                            key={id}
                            title={title}
                            description={description}
                            icon={Icon}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
