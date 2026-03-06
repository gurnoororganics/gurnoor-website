import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <NavLink to="/" className="nav-logo">
        <div className="nav-logo-icon">🌿</div>
        <div className="nav-logo-text">
          Gurnoor<br /><span>Organics</span>
        </div>
      </NavLink>

      <ul className="nav-links">
        <li><NavLink to="/"         end>Home</NavLink></li>
        <li><NavLink to="/story"       >Our Story</NavLink></li>
        <li><NavLink to="/about"       >About</NavLink></li>
        <li><NavLink to="/benefits"    >Benefits</NavLink></li>
        <li><NavLink to="/contact"     >Contact</NavLink></li>
      </ul>

      <NavLink to="/contact" className="nav-cta">Get in Touch</NavLink>
    </nav>
  );
}