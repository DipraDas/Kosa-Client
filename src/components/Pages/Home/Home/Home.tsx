import React from 'react';
import OpeningHours from '../../../Shared/Sections/OpeningHours/OpeningHours';
import Sponsor from '../../../Shared/Sections/Sponsor/Sponsor';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sponsor></Sponsor>
            <AboutUs></AboutUs>
            <OpeningHours></OpeningHours>
        </div>
    );
};

export default Home;