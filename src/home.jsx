import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import coachImage from './assets/WhatsApp Image 2026-04-24 at 13.01.23.jpeg';
import CircularGallery from './CircularGallery';

import img1 from './assets/WhatsApp Image 2026-04-24 at 13.00.56.jpeg';
import img2 from './assets/WhatsApp Image 2026-04-24 at 13.01.10.jpeg';
import img3 from './assets/WhatsApp Image 2026-04-24 at 13.01.16 (1).jpeg';
import img4 from './assets/WhatsApp Image 2026-04-24 at 13.01.16.jpeg';
import img5 from './assets/WhatsApp Image 2026-04-24 at 13.14.11.jpeg';
import vid1 from './assets/WhatsApp Video 2026-04-24 at 13.00.55.mp4';

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const galleryRef = useRef(null);
  const mobileScrollRef = useRef(null);

  const slideNext = () => {
    if (isMobile && mobileScrollRef.current) {
      mobileScrollRef.current.scrollBy({ left: window.innerWidth * 0.8, behavior: 'smooth' });
    } else if (galleryRef.current) {
      galleryRef.current.next();
    }
  };

  const slidePrev = () => {
    if (isMobile && mobileScrollRef.current) {
      mobileScrollRef.current.scrollBy({ left: -window.innerWidth * 0.8, behavior: 'smooth' });
    } else if (galleryRef.current) {
      galleryRef.current.prev();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const galleryItems = [
    { image: img1, text: 'Training', type: 'image' },
    { image: img2, text: 'Technique', type: 'image' },
    { image: img3, text: 'Power', type: 'image' },
    { image: vid1, text: 'Action', type: 'video' },
    { image: img4, text: 'Balance', type: 'image' },
    { image: img5, text: 'Focus', type: 'image' }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:Baigazeem356@gmail.com?subject=Coaching Inquiry from ${name}&body=${body}`;
  };

  return (
    <div className="home-container">
      <div className="sticky-hero">
        <nav className="navbar">
          <div className="logo">ELITE CRICKET COACHING</div>
          <div className="nav-links">
            <a href="#programs">Programs</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
          </div>
        </nav>

        <main className="hero-content">
          <div className="tag">ELITE PERFORMANCE ACADEMY</div>
          <h1 className="headline">
            Master <span className="highlight">Left-Arm</span><br />
            Side-Arm Bowling
          </h1>
          <p className="subheadline">
            Transform your game with elite coaching and specialized techniques designed to create unplayable angles and devastating variations.
          </p>
          <div className="cta-group">
            <button className="btn-primary" onClick={() => window.location.href = 'tel:+919634005747'}>BOOK A SESSION</button>
            <button className="btn-secondary" onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}>VIEW DRILLS</button>
          </div>
        </main>

        <section className="stats-section">
          <div className="stat-card">
            <span className="stat-number">100+</span>
            <span className="stat-label">PLAYERS TRAINED</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">5+</span>
            <span className="stat-label">YEARS EXPERIENCE</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">10+</span>
            <span className="stat-label">PROS IMPACTED</span>
          </div>
        </section>
      </div>

      <section id="about" className="about-section">
        <div className="about-image-container">
          <img src={coachImage} alt="Coach Azeem Baig" className="about-image" />
        </div>
        <div className="about-content">
          <h2 className="about-title">Coach Azeem Baig</h2>
          <div className="about-description">
            <p>
              With enhanced coaching experience and a background as a shortlisted Ranji Trophy player, Azeem Baig has established himself as a highly effective cricket trainer and Sidearm Specialist.
            </p>
            <p>
              His methodology focuses on developing critical playing skills, building strong team coordination, and fostering leadership. Having served as Head Coach at multiple academies and currently with WPL UP Warriorz, he bridges the gap between raw talent and high-performance execution.
            </p>
          </div>
          <blockquote className="about-quote">
            "My objective as a coach is to develop players' skills, build strong team coordination, and create a disciplined and high-performance cricket environment."
          </blockquote>
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <h2 className="gallery-title">Action & Highlights</h2>
        
        <div className="gallery-controls">
          <button className="gallery-btn prev-btn" onClick={slidePrev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="gallery-btn next-btn" onClick={slideNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        {isMobile ? (
          <div className="mobile-carousel" ref={mobileScrollRef}>
            {galleryItems.map((item, idx) => (
              <div key={idx} className="mobile-carousel-item">
                {item.type === 'video' ? (
                  <video src={item.image} autoPlay loop muted playsInline className="mobile-carousel-media" />
                ) : (
                  <img src={item.image} alt={item.text} className="mobile-carousel-media" />
                )}
                <div className="mobile-carousel-text">{item.text}</div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery
              ref={galleryRef}
              items={galleryItems} 
              bend={3} 
              textColor="#ffffff" 
              borderRadius={0.05} 
              scrollSpeed={0.05}
              autoScrollSpeed={0.02}
              scrollEase={0.05} 
            />
          </div>
        )}
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-info">
          <h2 className="contact-title">Start Your Journey</h2>
          <p className="contact-desc">
            Ready to elevate your game? Book a consultation or inquire about our programs today. We respond to all inquiries within 24 hours.
          </p>

          <a href="mailto:Baigazeem356@gmail.com" className="contact-block">
            <div className="contact-icon email-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </div>
            <div className="contact-text">
              <span className="contact-label">EMAIL US</span>
              <span className="contact-value">Baigazeem356@gmail.com</span>
            </div>
          </a>

          <a href="https://wa.me/919634005747" target="_blank" rel="noreferrer" className="contact-block">
            <div className="contact-icon whatsapp-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </div>
            <div className="contact-text">
              <span className="contact-label">WHATSAPP SUPPORT</span>
              <span className="contact-value">+91 96340 05747</span>
            </div>
          </a>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>NAME</label>
                <input type="text" name="name" required />
              </div>
              <div className="form-group">
                <label>EMAIL</label>
                <input type="email" name="email" required />
              </div>
            </div>
            <div className="form-group">
              <label>PHONE NUMBER</label>
              <input type="tel" name="phone" required />
            </div>
            <div className="form-group">
              <label>MESSAGE</label>
              <textarea name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn-submit">SEND MESSAGE</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">ELITE CRICKET COACHING</div>
          <div className="footer-links">
            <a href="https://wa.me/919634005747" className="footer-highlight">WHATSAPP SUPPORT</a>
          </div>
          <div className="footer-copyright">
            © 2026 ELITE CRICKET COACHING. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
