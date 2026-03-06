import { NavLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">Gurnoor Organics</div>
      <ul className="footer-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/story">Our Story</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <p className="footer-copy">© 2025 Gurnoor Organics. All rights reserved.</p>
    </footer>
  );
}
