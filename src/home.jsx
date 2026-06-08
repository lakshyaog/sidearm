import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import coachImage from './assets/WhatsApp Image 2026-04-24 at 13.01.23.jpeg?format=webp&quality=80';
import galleryImage1 from './assets/image.png?format=webp&quality=75';
import galleryImage2 from './assets/image copy.png?format=webp&quality=75';
import galleryImage3 from './assets/WhatsApp Image 2026-04-24 at 13.14.15 (1).jpeg?format=webp&quality=75';
import galleryImage4 from './assets/WhatsApp Image 2026-04-24 at 13.14.15.jpeg?format=webp&quality=75';
import galleryImage5 from './assets/photo10.jpeg?format=webp&quality=75';
import galleryImage6 from './assets/image copy 2.png?format=webp&quality=75';
import galleryImage7 from './assets/image copy 3.png?format=webp&quality=75';
import galleryImage8 from './assets/image copy 4.png?format=webp&quality=75';
import galleryImage9 from './assets/WhatsApp Image 2026-04-24 at 13.01.16.jpeg?format=webp&quality=75';
import galleryImage10 from './assets/WhatsApp Image 2026-04-24 at 13.01.16 (1).jpeg?format=webp&quality=75';
import galleryImage11 from './assets/image copy 6.png?format=webp&quality=75';
import galleryImage12 from './assets/image copy 7.png?format=webp&quality=75';
import galleryImage13 from './assets/image copy 8.png?format=webp&quality=75';
import p1 from './assets/photo1.jpeg?format=webp&quality=75';
import p2 from './assets/photo2.mp4';
import p3 from './assets/photo3.jpeg?format=webp&quality=75';
import p4 from './assets/photo4.mp4';
import p5 from './assets/photo5.jpeg?format=webp&quality=75';
import p6 from './assets/photo6.jpeg?format=webp&quality=75';
import p8 from './assets/photo8.jpeg?format=webp&quality=75';
import p9 from './assets/photo9.jpeg?format=webp&quality=75';
import p11 from './assets/photo11.mp4';
import p12 from './assets/photo12.jpeg?format=webp&quality=75';
import p13 from './assets/photo13.jpeg?format=webp&quality=75';
import p14 from './assets/photo14.jpeg?format=webp&quality=75';
import newVideo from './assets/WhatsApp Video 2026-06-02 at 22.46.45.mp4';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Small delay to ensure DOM is fully rendered before applying animations
    const timer = setTimeout(() => {
      if (galleryRef.current) {
        const images = Array.from(galleryRef.current.querySelectorAll('.gallery-image'));
        
        images.forEach((image) => {
          // Mark as GSAP-ready — CSS will hide it, then GSAP animates it back in.
          // If GSAP never loads, images stay visible (no gsap-ready class = opacity: 1).
          image.classList.add('gsap-ready');

          gsap.to(
            image,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: image,
                start: 'top 95%',
                end: 'top 20%',
                toggleActions: 'play none none reverse',
                once: false,
              },
            }
          );
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      // Remove gsap-ready class on cleanup so images are visible again
      if (galleryRef.current) {
        const images = Array.from(galleryRef.current.querySelectorAll('.gallery-image'));
        images.forEach((image) => image.classList.remove('gsap-ready'));
      }
    };
  }, []);

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
        <nav className="navbar" role="navigation" aria-label="Main navigation">
          <div className="logo">ELITE CRICKET COACHING</div>
          <div className="nav-links">
            <a href="#programs" aria-label="View coaching programs">Programs</a>
            <a href="#about" aria-label="About Coach Azeem Baig">About</a>
          </div>
        </nav>

        <main className="hero-content" role="main">
          <h1 className="headline">
            Master <span className="highlight">Spin bowling</span><br />
            Lefty Throw down specialist.
          </h1>
          <p className="subheadline">
            Transform your game with elite coaching and specialized techniques designed to create unplayable angles and devastating variations.
          </p>
          <div className="cta-group">
            <button className="btn-primary" onClick={() => window.location.href = 'tel:+919634005747'} aria-label="Call to book a coaching session">BOOK A SESSION</button>
          </div>
        </main>

        <section className="stats-section" aria-label="Coaching statistics">
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

      <section id="about" className="about-section" aria-labelledby="about-heading">
        <div className="about-image-container">
          <img src={coachImage} alt="Coach Azeem Baig - Professional Cricket Coach and Ranji Trophy Player" className="about-image" loading="eager" width="600" height="800" />
        </div>
        <div className="about-content">
          <h2 id="about-heading" className="about-title">Coach Azeem Baig</h2>
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

      <section id="gallery" className="gallery-section" aria-label="Cricket training gallery">
        <h2 className="gallery-title">Action & Highlights</h2>
        <div className="gallery-container" ref={galleryRef} role="region" aria-label="Training session photos">
          <div className="gallery-grid">
            <video 
              className="gallery-image" 
              src={p4} 
              autoPlay 
              loop 
              muted 
              playsInline
              loading="lazy"
              aria-label="Cricket batting technique video"
            />
            <video 
              className="gallery-image" 
              src={p2} 
              autoPlay 
              loop 
              muted 
              playsInline
              loading="lazy"
              aria-label="Cricket coaching video demonstration"
            />
            <video 
              className="gallery-image" 
              src={newVideo} 
              autoPlay 
              loop 
              muted 
              playsInline
              loading="lazy"
              aria-label="Cricket training video highlights"
            />
            <img 
              className="gallery-image" 
              src={p13} 
              alt="Cricket match preparation training" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={galleryImage1} 
              alt="Elite cricket coaching - Spin bowling training session" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={galleryImage6} 
              alt="Elite cricket coaching drills and exercises" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={p9} 
              alt="Cricket fitness and conditioning training" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={galleryImage9} 
              alt="Cricket academy training highlights" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={galleryImage7} 
              alt="Cricket training session with Coach Azeem Baig" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={galleryImage3} 
              alt="Professional cricket training at academy" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={galleryImage4} 
              alt="Lefty throw down specialist cricket coaching" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={galleryImage5} 
              alt="Cricket spin bowling technique demonstration" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={galleryImage8} 
              alt="Professional cricket batting stance training" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={galleryImage10} 
              alt="Spin bowling variations and techniques" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={galleryImage11} 
              alt="Cricket sidearm training equipment demonstration" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={galleryImage12} 
              alt="Elite cricket coaching program session" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={galleryImage13} 
              alt="Professional cricket player training action shot" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={p1} 
              alt="Cricket training drill demonstration" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={p3} 
              alt="Cricket fielding practice session" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={p5} 
              alt="Cricket bowling action analysis" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={p6} 
              alt="Cricket team practice session" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={p8} 
              alt="Cricket net practice session" 
              loading="lazy"
              width="400"
              height="300"
            />
            <video 
              className="gallery-image" 
              src={p11} 
              autoPlay 
              loop 
              muted 
              playsInline
              loading="lazy"
              aria-label="Cricket skills training video"
            />
            <img 
              className="gallery-image" 
              src={p12} 
              alt="Cricket academy training program" 
              loading="lazy"
              width="400"
              height="300"
            />
            <img 
              className="gallery-image" 
              src={p14} 
              alt="Cricket professional coaching session" 
              loading="lazy"
              width="400"
              height="300"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-heading">
        <div className="contact-info">
          <h2 id="contact-heading" className="contact-title">Start Your Journey</h2>
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
