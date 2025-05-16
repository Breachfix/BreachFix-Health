import './Auth.css';
import FooterComponent from '../../components/footer/footer';
import NavbarComponent from '../../components/nav/nav';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function Signup() {
  const { handleSignup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await handleSignup({ name, email, password });
      if (result.success || result.message?.includes('created')) {
        alert('Signup successful!');
        window.location.href = '/login';
      } else {
        setError(result.message || 'Signup failed.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-wrapper">
      <NavbarComponent />

      <section className="hero">
        <h2>Welcome to Your Health Journey</h2>
        <p>Join our events and courses to learn how to live a healthier, purpose-driven life.</p>
        <a href="/explore" className="inline-block mt-6 bg-white text-green-700 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition">
          Explore Courses
        </a>
      </section>

      <div className="auth-container">
        <h2>Create Account</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="signup-name">Full Name</label>
          <input
            type="text"
            id="signup-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />

          <label htmlFor="signup-email">Email</label>
          <input
            type="email"
            id="signup-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />

          <label htmlFor="signup-password">Password</label>
          <input
            type="password"
            id="signup-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            required
          />

          <button type="submit">Sign Up</button>

          {error && <p className="auth-link" style={{ color: 'red' }}>{error}</p>}

          <p className="auth-link">Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>

      <FooterComponent />
    </div>
  );
}
