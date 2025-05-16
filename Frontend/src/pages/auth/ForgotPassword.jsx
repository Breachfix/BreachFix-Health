import './Auth.css';
import FooterComponent from '../../components/footer/footer';
import NavbarComponent from '../../components/nav/nav';
import { useState } from 'react';
import { sendOtp } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendOtp({ recipient_email: email });
      setMessage('OTP sent to your email.');
      navigate('/reset-password', { state: { email } });
    } catch (err) {
      setMessage('Failed to send OTP. Please try again.');
      console.error('Failed to send OTP:', err);
    }
  };

  return (
    <div className="login-wrapper">
      <NavbarComponent />

      <section className="hero">
        <h2>Forgot Your Password?</h2>
        <p>We'll send you a secure link to reset it. Check your inbox after submitting.</p>
        <a href="/explore" className="inline-block mt-6 bg-white text-green-700 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition">
          Explore Courses
        </a>
      </section>

      <div className="auth-container">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="forgot-email">Enter your email</label>
          <input
            type="email"
            id="forgot-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />

          <button type="submit">Send Token to email</button>
          {message && <p className="auth-link">{message}</p>}
          <p className="auth-link">
            <a href="/login">Back to login</a>
          </p>
        </form>
      </div>

      <FooterComponent />
    </div>
  );
}
