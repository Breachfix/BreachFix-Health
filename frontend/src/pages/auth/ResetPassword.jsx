import './Auth.css';
import FooterComponent from '../../components/footer/footer';
import NavbarComponent from '../../components/nav/nav';
import { useState } from 'react';
import { resetPassword } from '../../services/authService';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email, token, newPassword);
      setMessage('Password successfully reset. You can now login.');
    } catch (err) {
      setMessage('Reset failed. Please check your token and try again.');
    }
  };

  return (
    <div className="login-wrapper">
      <NavbarComponent />

      <section className="hero">
        <h2>Reset Your Password</h2>
        <p>Enter the token sent to your email, your email address, and choose a new password.</p>
        <a href="/explore" className="inline-block mt-6 bg-white text-green-700 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition">
          Explore Courses
        </a>
      </section>

      <div className="auth-container">
        <h2>Reset Password</h2>
        <form onSubmit={handleReset}>
          <label htmlFor="reset-email">Email</label>
          <input
            type="email"
            id="reset-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />

          <label htmlFor="reset-token">Token</label>
          <input
            type="text"
            id="reset-token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Enter the token sent to your email"
            required
          />

          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New secure password"
            required
          />

          <button type="submit">Reset Password</button>

          {message && <p className="auth-link">{message}</p>}

          <p className="auth-link"><a href="/login">Back to Login</a></p>
        </form>
      </div>

      <FooterComponent />
    </div>
  );
}
