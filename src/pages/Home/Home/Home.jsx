import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarquee';
import Benefits from '../Benefits/Benefits';
import HowItWorks from '../HowItWorks/HowItWorks';
import BeMerchant from '../BeMerchant/BeMerchant';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorks />
            <Services />
            <ClientLogosMarquee />
            <Benefits />
            <BeMerchant />
            <Testimonials />
        </div>
    );
};

export default Home;