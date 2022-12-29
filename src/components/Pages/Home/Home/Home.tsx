import React from 'react';
import Sponsor from '../../../Shared/Sections/Sponsor/Sponsor';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sponsor></Sponsor>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;