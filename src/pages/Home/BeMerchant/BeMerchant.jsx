import React from "react";
import locationPhoto from "../../../assets/location-merchant.png";
import PrimaryOutlineButton from "../../shared/PrimaryOutlineButton/PrimaryOutlineButton";
import bgImage from "../../../assets/be-a-merchant-bg.png"

const BeMerchant = () => {
    return (
        <section data-aos="zoom-in-up"
            className="mt-20 bg- bg-[#03373d] rounded-4xl px-6 py-12 lg:p-20 bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">

                {/* Image */}
                <img
                    src={locationPhoto}
                    alt="Merchant location"
                    className="max-w-full lg:max-w-132.5"
                />

                {/* Content */}
                <div className="text-[#FFF]">
                    <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                        Merchant and Customer Satisfaction
                        is Our First Priority
                    </h1>

                    <p className="py-6 text-base opacity-90 max-w-xl">
                        We offer the lowest delivery charge with the highest value along with
                        100% safety of your product. Pathao courier delivers your parcels in
                        every corner of Bangladesh right on time.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <PrimaryOutlineButton text="Become a Merchant" />
                        <PrimaryOutlineButton text="Earn with ZapShift Courier" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BeMerchant;
