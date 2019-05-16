import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        title: "free cocktail",
        icon: <FaCocktail />,
        info:
          "lorem epsum is very good for dummy products like i 'm building so be careful handling lorem"
      },
      {
        title: "free hiking",
        icon: <FaHiking />,
        info:
          "lorem epsum is very good for dummy products like i 'm building so be careful handling lorem"
      },
      {
        title: "free shuttleVan",
        icon: <FaShuttleVan />,
        info:
          "lorem epsum is very good for dummy products like i 'm building so be careful handling lorem"
      },
      {
        title: "free coldrink",
        icon: <FaBeer />,
        info:
          "lorem epsum is very good for dummy products like i 'm building so be careful handling lorem"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
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
  }
}
