import React from 'react';
import PrimaryOutlineButton from '../../shared/PrimaryOutlineButton/PrimaryOutlineButton';
import { LuArrowUpRight } from "react-icons/lu";

const FAQ = () => {
    return (
        <div>
            <div className='text-center w-1/2 mx-auto'>
                <h2 className='font-extrabold text-4xl text-[#03373D] mb-6'>Frequently Asked Question (FAQ)</h2>
                <p className='mb-10 text-[#606060]'>Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                    Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>

            <div className='w-3/4 mx-auto space-y-4'>
                <div className="collapse collapse-arrow bg-white">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-[#03373D] font-semibold">How does this courier service work?</div>
                    <div className="collapse-content text-[#606060] text-sm">
                        ZapShift Courier works through a simple and reliable process.
                        Once you place a delivery request, our team collects the parcel from your pickup location, processes it at the nearest delivery hub, and delivers it safely to the destination.
                        You can track your shipment in real time and receive regular status updates from pickup to delivery.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-[#03373D] font-semibold">Is ZapShift suitable for all types of customers and businesses?</div>
                    <div className="collapse-content text-[#606060] text-sm">
                        Yes, ZapShift Courier is designed to serve individuals, small businesses, SMEs, and large corporate clients.
                        Whether you need to send personal parcels or manage bulk e-commerce deliveries, our flexible service plans and nationwide coverage make ZapShift suitable for all types of customers.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-[#03373D] font-semibold">Does ZapShift ensure safe and on-time delivery?</div>
                    <div className="collapse-content text-[#606060] text-sm">
                        Absolutely. ZapShift prioritizes parcel safety and timely delivery. Every shipment is handled with care, monitored through our tracking system, and delivered by trained delivery partners.
                        Our optimized logistics network ensures fast delivery while minimizing the risk of damage or delay.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-[#03373D] font-semibold">Does ZapShift offer Cash on Delivery (COD) and tracking features?</div>
                    <div className="collapse-content text-[#606060] text-sm">
                        Yes, ZapShift provides a secure Cash on Delivery (COD) service along with real-time parcel tracking.
                        Customers and merchants can track delivery progress online and receive COD payments quickly through our transparent and reliable settlement system.</div>
                </div>
                <div className="collapse collapse-arrow bg-white">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-[#03373D] font-semibold">How will I be notified about delivery updates or service changes?</div>
                    <div className="collapse-content text-[#606060] text-sm">
                        You will receive delivery updates via SMS, email, or through your ZapShift dashboard. Notifications include pickup confirmation, in-transit updates, delivery status, and COD payment details.
                        For any service changes or announcements, we also notify our users in advance.
                    </div>
                </div>
                <div className='flex items-center justify-center mt-10'>
                    <button className='btn p-4 border-none text-[#1F1F1F] text-[20px] bg-[#CAEB66]'>See More FAQ’s</button>
                    <button className='btn btn-circle text-8xl bg-black text-[#CAEB66]'><LuArrowUpRight /></button>
                </div>
            </div>

        </div>
    );
};

export default FAQ;