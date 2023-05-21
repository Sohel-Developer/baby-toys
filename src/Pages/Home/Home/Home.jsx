import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Offer from '../Offer/Offer';
import Subscribe from '../Subscribe/Subscribe';
import Shop from '../Shop/Shop';
import Gallery from '../../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner />
            <Feature />
            <Shop />
            <Gallery />
            <Offer />
            <Subscribe />

        </div>
    );
};

export default Home;