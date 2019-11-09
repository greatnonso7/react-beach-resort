import React from 'react'
import Hero from '../components/Hero.component'
import Banner from '../components/Banner.component';
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <Hero>
            <Banner title="404" subtitle="Page Not Found">
                <Link to="/" className="btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
    )
}

