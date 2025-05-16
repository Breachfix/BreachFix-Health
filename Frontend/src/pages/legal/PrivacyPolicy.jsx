import React from 'react';
import NavbarComponent from '../../components/nav/nav';
import FooterComponent from '../../components/footer/footer';
import './Legal.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-wrapper">
      <NavbarComponent />

      <section className="hero">
        <h2>Privacy Policy</h2>
        <p>Your privacy matters. Here's how we handle your personal information at Breachfix Health.</p>
      </section>

      <div className="legal-content">
        <h3>1. Introduction</h3>
        <p>
          Breachfix Health ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
          outlines how we collect, use, disclose, and safeguard your information when you visit our website,
          engage with our services, or communicate with us.
        </p>

        <h3>2. Information We Collect</h3>
        <p>
          We may collect information that you voluntarily provide to us including your name, email address,
          phone number, and any other personal information you provide when signing up, subscribing,
          or participating in our services.
        </p>
        <p>
          We may also automatically collect information about how you interact with our website using cookies,
          log files, analytics tools, and similar technologies.
        </p>

        <h3>3. How We Use Your Information</h3>
        <ul>
          <li>To provide and improve our services and website.</li>
          <li>To communicate with you regarding your account, subscriptions, or inquiries.</li>
          <li>To personalize your user experience and deliver content relevant to your interests.</li>
          <li>To send you newsletters, health tips, or promotional materials (you can opt out at any time).</li>
          <li>To comply with applicable laws and protect our legal rights.</li>
        </ul>

        <h3>4. Sharing Your Information</h3>
        <p>
          We do not sell your personal information. We may share your data with third-party service providers
          that assist us in running our platform and serving you better. These parties are obligated to keep your
          information secure.
        </p>

        <h3>5. Cookies and Tracking Technologies</h3>
        <p>
          We use cookies and similar technologies to analyze website usage and enhance your browsing experience.
          You can control or disable cookies through your browser settings.
        </p>

        <h3>6. Data Retention</h3>
        <p>
          We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy,
          unless a longer retention period is required by law.
        </p>

        <h3>7. Your Rights</h3>
        <p>
          You have the right to access, correct, or delete your personal information. If you wish to exercise any of
          these rights or have questions about our privacy practices, please contact us at <strong>support@breachfix.com</strong>.
        </p>

        <h3>8. Security</h3>
        <p>
          Breachfix Health takes reasonable measures to protect your information from unauthorized access,
          disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
        </p>

        <h3>9. Children’s Privacy</h3>
        <p>
          Our services are not directed to individuals under the age of 13. We do not knowingly collect personal
          information from children. If we become aware of such data, we will delete it immediately.
        </p>

        <h3>10. Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with a
          revised "Last Updated" date.
        </p>

        <h3>11. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy or how Breachfix Health handles your information,
          please contact us at: <strong>support@breachfix.com</strong>
        </p>

        <p className="last-updated"><em>Last Updated: May 16, 2025</em></p>
      </div>

      <FooterComponent />
    </div>
  );
}