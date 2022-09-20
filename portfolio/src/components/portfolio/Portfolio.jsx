import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "this is project management",
      github: "https://github.com",
      demo: "https://dribble.com/Alien_pixels",
    },
    {
      id: 2,
      image: IMG2,
      title: "portfolio react and ui ux design",
      github: "https://github.com",
      demo: "https://dribble.com/Alien_pixels",
    },
    {
      id: 3,
      image: IMG3,
      title: "parking system management",
      github: "https://github.com",
      demo: "https://dribble.com/Alien_pixels",
    },
    {
      id: 4,
      image: IMG4,
      title: "ui desifn bootstrap",
      github: "https://github.com",
      demo: "https://dribble.com/Alien_pixels",
    },
    {
      id: 5,
      image: IMG5,
      title: "portfolio react and ui ux design",
      github: "https://github.com",
      demo: "https://dribble.com/Alien_pixels",
    },
    {
      id: 6,
      image: IMG6,
      title: "portfolio react and ui ux design",
      github: "https://github.com",
      demo: "https://dribble.com/Alien_pixels",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((details) => {
          return (
            <article key={details.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={details.image} alt="" />
              </div>
              <h3>{details.title}</h3>
              <div className="portfolio__item-cta">
                <a href={details.github} target="_blank" className="btn">
                  Github
                </a>
                <a
                  href={details.demo}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
