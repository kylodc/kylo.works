import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import portrait from './assets/me-portrait.PNG'; // save your image with this name in src/assets

const roles = [
  "computer engineer.",
  "builder.",
  "problem solver."
];

export default function Home() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);



  const staticText = "Hey, I'm Kylo — a\n";

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const currentRole = roles[textIndex];
    const typingSpeed = isDeleting ? 40 : 120;
    const pauseTime = 1500;

    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setText(currentRole.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (charIndex > 0) {
          setText(currentRole.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);

  }, [charIndex, isDeleting, textIndex]);

  return (
    <div className="page-wrapper">
      <section id="home" className="portfolio-hero page-section">
        <div className="portfolio-hero-text">
          <div className="heading-wrap">
            <h1 className="gradient-text welcome">
              {staticText}
              {text}
              <span className="cursor">|</span>
            </h1>
          </div>

          <p className="portfolio-description">
            Welcome to my portfolio. This website highlights my journey in Computer Engineering, showcasing my skills, growth, and passion for building and learning through real-world projects.
          </p>

          <div className="portfolio-actions">
            <button className="portfolio-btn" onClick={() => navigate('/works')}>View Works</button>
            <div className="portfolio-socials">
              <a href="https://www.linkedin.com/in/kylodc/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn"></a>
              <a href="https://www.facebook.com/jnkdc.wp/" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook"></a>
              <a href="mailto:johnkylodc12@gmail.com" className="social-icon google" aria-label="Email"></a>
            </div>
          </div>
        </div>

        <div className="portfolio-hero-image">
          <div className="portrait-frame">
            <img src={portrait} alt="Portrait of Kylo" className="hero-portrait" />
          </div>
        </div>
      </section>
    </div>
  );
}
