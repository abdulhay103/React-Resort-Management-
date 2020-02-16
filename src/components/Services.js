import React, { useState } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

const Services = () => {
  const [sevices, setSevices] = useState({
    items: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odio?"
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odio?"
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odio?"
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odio?"
      }
    ]
  });

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {sevices.items.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
