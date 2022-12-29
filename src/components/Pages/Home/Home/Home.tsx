import React from 'react';
import OpeningHours from '../../../Shared/Sections/OpeningHours/OpeningHours';
import Sponsor from '../../../Shared/Sections/Sponsor/Sponsor';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Hair from '../Hair/Hair';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sponsor></Sponsor>
            <AboutUs></AboutUs>
            <OpeningHours></OpeningHours>
            <Hair></Hair>
        </div>
    );
};

export default Home;