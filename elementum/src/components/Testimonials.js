import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    text: "Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.",
    src: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
  {
    id: 2,
    text: "Working with Elementum was a fantastic experience. They understood our vision and delivered something that exceeded our expectations completely. The team is professional, creative, and deeply committed to quality.",
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    text: "The results spoke for themselves. Our bounce rate dropped by 35% and conversions went up significantly. Elementum really knows how to blend design and strategy to drive real business outcomes.",
    src: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
];

const surroundingAvatars = [
  { src: 'https://randomuser.me/api/portraits/men/55.jpg', style: { top: '5%', left: '5%' } },
  { src: 'https://randomuser.me/api/portraits/women/33.jpg', style: { top: '5%', left: '20%' } },
  { src: 'https://randomuser.me/api/portraits/men/76.jpg', style: { top: '35%', left: '3%' } },
  { src: 'https://randomuser.me/api/portraits/men/11.jpg', style: { bottom: '10%', left: '3%' } },
  { src: 'https://randomuser.me/api/portraits/men/88.jpg', style: { top: '5%', right: '8%' } },
  { src: 'https://randomuser.me/api/portraits/women/66.jpg', style: { top: '35%', right: '3%' } },
  { src: 'https://randomuser.me/api/portraits/men/37.jpg', style: { bottom: '10%', right: '3%' } },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="testimonials" id="contact">
      <h2 className="testimonials__heading">
        What <span className="testimonials__highlight">our customer</span>
        <br />
        says About Us
      </h2>
      <div className="testimonials__heading-underline" />

      {surroundingAvatars.map((a, i) => (
        <div key={i} className="testimonials__surround-avatar" style={a.style}>
          <img src={a.src} alt="" />
        </div>
      ))}

      <div className="testimonials__card">
        <div className="testimonials__quotes testimonials__quotes--open">"</div>
        <p className="testimonials__text">{testimonials[active].text}</p>
        <div className="testimonials__quotes testimonials__quotes--close">"</div>
      </div>

      <div className="testimonials__dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`testimonials__dot ${active === i ? 'testimonials__dot--active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
