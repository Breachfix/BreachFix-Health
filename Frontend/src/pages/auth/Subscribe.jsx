import './Auth.css';
import FooterComponent from '../../components/footer/footer';
import NavbarComponent from '../../components/nav/nav';

export default function Subscribe() {
  return (
    <div className="login-wrapper">
      <NavbarComponent />

      <section className="hero">
        <h2>Choose Your Health Journey Plan</h2>
        <p>Unlock access to exclusive content, personalized coaching, and deeper transformation by subscribing today.</p>
      </section>

      <div className="subscription-plans">
        <div className="plan basic">
          <h3>Basic</h3>
          <p className="price">Free</p>
          <ul>
            <li>Access to basic courses</li>
            <li>Weekly health tips</li>
            <li>Community forum</li>
          </ul>
          <a href="/signup" className="button">Get Started</a>
        </div>

        <div className="plan recommended">
          <h3>Premium</h3>
          <p className="price">$29/month</p>
          <ul>
            <li>All Basic features</li>
            <li>Full access to all events & challenges</li>
            <li>Exclusive video content</li>
            <li>1-on-1 monthly coaching</li>
          </ul>
          <a href="/signup" className="button highlighted">Start Premium</a>
        </div>

        <div className="plan premium">
          <h3>Support the Mission</h3>
          <p className="price">$99/month</p>
          <ul>
            <li>All Premium features</li>
            <li>Free lifetime access to future content</li>
            <li>Be listed as a sponsor on our site</li>
            <li>Help spread the Gospel of Health</li>
          </ul>
          <a href="/signup" className="button">Support Now</a>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
