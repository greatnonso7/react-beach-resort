import React, { Component } from 'react'
import Title from './Title.component';

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';


export default class Services extends Component {
    state = {
        services: [
            {
                icon:<FaCocktail/>,
                title: 'free cocktails',
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, doloremque."
            },
            {
                icon:<FaHiking/>,
                title: 'endless hiking',
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, doloremque."
            },
            {
                icon:<FaShuttleVan/>,
                title: 'free Shuttle',
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, doloremque."
            },
            {
                icon:<FaBeer/>,
                title: 'strongest Beer',
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, doloremque."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"/>
                <div className="services-center">
                    {this.state.services.map((item, idx) => {
                        return  <article key={idx} className="service">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                    })}
                </div>
            </section >
        )
    }
}
