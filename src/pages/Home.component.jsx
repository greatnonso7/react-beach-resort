import React from 'react'
import Hero from '../components/Hero.component';
import Banner from '../components/Banner.component';
import Services from '../components/Services.component';
import FeaturedRooms from '../components/FeaturedRooms.component';
// import Button from '../components/StyledHero.component';

import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <React.Fragment>
            <Hero>
                <Banner title="luxurious rooms" subtitle="Deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">Our Rooms</Link>
                </Banner>
            </Hero>
            
            <Services />
            <FeaturedRooms />
        </React.Fragment>
    )
}

