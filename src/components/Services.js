import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state={
        sevices:[
            {
                icon: <FaCocktail />,
                title: "free cocktail",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odio?"
            },
            {
                icon: <FaHiking />,
                title: "endless hiking",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odio?"
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odio?"
            },
            {
                icon: <FaBeer />,
                title: "strongest beer",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odio?"
            }
            
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.sevices.map((service, index) => {
                        return(
                            <article key={index} className="service">
                                <span>{service.icon}</span>
                                <h6>{service.title}</h6>
                                <p>{service.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
