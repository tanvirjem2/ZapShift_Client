import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarquee';
import Benefits from '../Benefits/Benefits';
import HowItWorks from '../HowItWorks/HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner />
            <HowItWorks />
            <Services />
            <ClientLogosMarquee />
            <Benefits />
        </div>
    );
};

export default Home;