import React from 'react';
import OpeningHours from '../../../Shared/Sections/OpeningHours/OpeningHours';
import Sponsor from '../../../Shared/Sections/Sponsor/Sponsor';
import AboutUs from '../AboutUs/AboutUs';
import ArtDirector from '../ArtDirector/ArtDirector';
import Banner from '../Banner/Banner';
import Colorist from '../Colorist/Colorist';
import Hair from '../Hair/Hair';
import PremiumHair from '../PremiumHair/PremiumHair';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Sponsor></Sponsor>
            <AboutUs></AboutUs>
            <OpeningHours></OpeningHours>
            <Hair></Hair>
            <PremiumHair></PremiumHair>
            <ArtDirector></ArtDirector>
            <Colorist></Colorist>
        </>
    );
};

export default Home;