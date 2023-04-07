import React from 'react';
import HeroSection from './HeroSection';
import Offers from './Offers';

function HomeLayout(props) {
    return (
        <div>
            <HeroSection />
            <Offers />
        </div>
    );
}

export default HomeLayout;