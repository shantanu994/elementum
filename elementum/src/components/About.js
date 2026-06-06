import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="studio">
      <div className="about__top">
        <div className="about__top-text">
          <h2 className="about__heading">
            <span className="about__heading-word about__heading-word--underline">Tomorrow</span> should
            <br />
            be better than <span className="about__heading-word about__heading-word--green">today</span>
          </h2>
          <p className="about__body">
            We are a team of strategists, designers communicators, researchers.
            Together, we believe that progress only happens when you refuse to play things safe.
          </p>
          <a href="#services" className="about__link">
            Read more <span className="about__link-line">——————→</span>
          </a>
        </div>

        <div className="about__top-image">
          <div className="about__red-shape about__red-shape--top-right" />
          <div className="about__img-circle">
            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80" alt="Team meeting" />
          </div>
        </div>
      </div>

      <div className="about__curve">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 Q300 0, 600 40 Q900 80, 1200 40" stroke="#e8533a" strokeWidth="2.5" fill="none" />
        </svg>
      </div>

      <div className="about__bottom">
        <div className="about__bottom-image">
          <div className="about__red-shape about__red-shape--bottom-left" />
          <div className="about__red-shape about__red-shape--bottom-right" />
          <div className="about__img-circle">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80" alt="Team working" />
          </div>
        </div>

        <div className="about__bottom-text">
          <h2 className="about__heading">
            <span className="about__heading-word about__heading-word--green">See</span> how we can
            <br />
            help you progress
          </h2>
          <p className="about__body">
            We add a layer of fearless insights and action that allows change makers to accelerate their
            progress in areas such as brand, design digital comms and social research.
          </p>
          <a href="#services" className="about__link">
            Read more <span className="about__link-line">——————→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
