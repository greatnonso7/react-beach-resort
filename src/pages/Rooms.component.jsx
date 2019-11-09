import React from 'react'
import Hero from '../components/Hero.component';
import Banner from '../components/Banner.component';
import { Link } from 'react-router-dom';


const Rooms = () => {
    return (
        <Hero hero='roomsHero'>
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
    )
}

export default Rooms
