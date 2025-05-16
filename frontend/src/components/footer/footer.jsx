// Footer
import { Link } from 'react-router-dom';
import './footer.css';
import SocialLinks from '../social-media/socials';

export default function FooterComponent() {
  return ( 
      
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>HealthLift helps you learn, grow, and live better. Courses, events, and support — all in one place.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/explore">Courses</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/tips">Tips</Link></li>
            </ul>
          </div>
          <div className="footer-section">
          
           <SocialLinks />
          </div>
          <div className="footer-section">
            <h4>Subscribe</h4>
            <form>
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 BreachFix HEALTH. All rights reserved.</p>
          <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-and-condition">Terms of Service</a></p>
        </div>
      </footer>
    );
}