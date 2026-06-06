import React from 'react';
import './Hero.css';

const avatars = [
  { id: 1, src: 'https://randomuser.me/api/portraits/men/32.jpg', style: { bottom: '10%', left: '3%' } },
  { id: 2, src: 'https://randomuser.me/api/portraits/men/45.jpg', style: { bottom: '18%', left: '11%' } },
  { id: 3, src: 'https://randomuser.me/api/portraits/men/67.jpg', style: { bottom: '35%', left: '28%' } },
  { id: 4, src: 'https://randomuser.me/api/portraits/men/12.jpg', style: { bottom: '20%', left: '36%' } },
  { id: 5, src: 'https://randomuser.me/api/portraits/men/55.jpg', style: { bottom: '35%', right: '34%' } },
  { id: 6, src: 'https://randomuser.me/api/portraits/men/23.jpg', style: { bottom: '42%', right: '14%' } },
  { id: 7, src: 'https://randomuser.me/api/portraits/men/78.jpg', style: { bottom: '12%', right: '3%' } },
];

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__squiggle-left">
        <svg viewBox="0 0 80 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 10 C20 60, 80 110, 30 160 C-10 210, 70 250, 40 290" stroke="#0a0a0a" strokeWidth="2.5" fill="none" />
          <path d="M30 20 C-10 70, 50 130, 10 180 C-20 220, 40 260, 20 290" stroke="#e8533a" strokeWidth="2.5" fill="none" />
        </svg>
      </div>

      <div className="hero__content">
        <h1 className="hero__heading">
          The <span className="hero__word hero__word--underline">thinkers</span> and
          <br />
          doers were <span className="hero__word hero__word--pink">changing</span>
          <br />
          the <span className="hero__word hero__word--green">status</span> Quo with
        </h1>

        <p className="hero__sub">
          We are a team of strategists, designers communicators, researchers.
          <br />
          Together, we believe that progress only happens when you refuse to play things safe.
        </p>
      </div>

      <div className="hero__purple-shape" />

      <div className="hero__avatars">
        {avatars.map((a) => (
          <div key={a.id} className="hero__avatar" style={a.style}>
            <img src={a.src} alt="team member" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
