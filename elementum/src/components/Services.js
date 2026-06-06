import React, { useState } from 'react';
import './Services.css';

const services = [
  {
    category: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
  },
  {
    category: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    category: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
];

const Services = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="services" id="services">
      <div className="services__curve-top">
        <svg viewBox="0 0 900 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M900 10 Q700 90, 500 50 Q300 10, 0 80" stroke="#e8533a" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="services__header">
        <h2 className="services__heading">
          What we <span className="services__heading-word">can</span>
          <br />
          offer you!
        </h2>
        <div className="services__heading-underline" />
      </div>

      <div className="services__list">
        {services.map((s, i) => (
          <div
            key={i}
            className={`services__item ${hovered === i ? 'services__item--hovered' : ''}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="services__category">{s.category}</span>
            <span className="services__title">{s.title}</span>
            <span className="services__arrow">——→</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
