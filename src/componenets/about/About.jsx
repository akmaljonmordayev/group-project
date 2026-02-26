import React from "react";
import "./About.css";

const About = () => {
  const stats = [
    {
      icon: "/icons/happy-clients.png",
      label: "Happy Clients",
    },
    {
      icon: "/icons/country-tour.png",
      label: "Country Tour",
    },
    {
      icon: "/icons/tourism-award.png",
      label: "Tourism Award",
    },
    {
      icon: "/icons/skilled-support.png",
      label: "Skilled Support",
    },
  ];

  return (
    <section className="about-section">
      <div className="about-hero">
        <div className="about-hero__overlay" />
        <div className="about-hero__content">
          <h1 className="about-hero__title">
            Let's Discover
            <br />
            The Whole World !
          </h1>
          <a href="#deals" className="about-hero__btn">
            FIND AWESOME DEALS
            <span className="about-hero__btn-arrow">→</span>
          </a>
        </div>
      </div>

      <div className="about-stats">
        {stats.map((item, index) => (
          <div className="about-stats__item" key={index}>
            <div className="about-stats__icon-wrap">
              <img
                src={item.icon}
                alt={item.label}
                className="about-stats__icon"
              />
            </div>
            <span className="about-stats__label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;