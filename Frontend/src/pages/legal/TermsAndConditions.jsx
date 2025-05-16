import React from 'react';
import NavbarComponent from '../../components/nav/nav';
import FooterComponent from '../../components/footer/footer';
import './legal.css';

export default function TermsAndConditions() {
  return (
    <div className="policy-wrapper">
      <NavbarComponent />

      <section className="policy-section">
        <h2>Terms and Conditions</h2>
        <p><strong>Effective Date:</strong> 21, January 2025</p>

        <h3>1. Introduction</h3>
        <p>Welcome to Breachfix Health ("Company", "we", "our", "us")! These Terms and Conditions ("Terms", "Terms and Conditions") govern your use of our website located at breachfix.com ("Service") operated by Breachfix Health.</p>
        <p>Your use of our Service is also governed by our Privacy Policy. By using the Service, you agree to these Terms and our Privacy Policy. If you disagree with any part of the terms, you may not access the Service.</p>

        <h3>2. Communications</h3>
        <p>By using our Service, you agree to receive newsletters, marketing materials, and other information from Breachfix Health. You can opt out at any time.</p>

        <h3>3. Purchases</h3>
        <p>If you wish to purchase any product or service from Breachfix Health, you may be required to provide payment information. You represent and warrant that you have the legal right to use the payment method provided.</p>

        <h3>4. Subscriptions</h3>
        <p>Some parts of the Service are billed on a subscription basis. Your subscription will renew unless canceled before the end of the billing cycle. We reserve the right to adjust pricing with reasonable notice.</p>

        <h3>5. Refunds</h3>
        <p>Subscription payments are non-refundable unless required by law. Breachfix Health may consider refund requests on a case-by-case basis.</p>

        <h3>6. Content</h3>
        <p>By submitting content to Breachfix Health, you grant us a worldwide, royalty-free license to use, modify, and distribute it. You are responsible for the content you share and must have the rights to do so.</p>

        <h3>7. Prohibited Uses</h3>
        <p>You agree not to use our Service for unlawful purposes, including spamming, infringing on others' rights, or attempting to gain unauthorized access to our systems.</p>

        <h3>8. Termination</h3>
        <p>Breachfix Health may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

        <h3>9. Changes</h3>
        <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days’ notice. Continued use of the Service after changes take effect constitutes your acceptance of the new Terms.</p>

        <h3>10. Contact Us</h3>
        <p>If you have any questions about these Terms, please contact us at <a href="mailto:support@breachfix.com">support@breachfix.com</a>.</p>
      </section>

      <FooterComponent />
    </div>
  );
}
