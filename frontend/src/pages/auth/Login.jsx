import './Auth.css';
import FooterComponent from '../../components/footer/footer';
import NavbarComponent from '../../components/nav/nav';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';

export default function Login() {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await handleLogin({ email, password });
      if (result.success) {
        alert('Login successful!');
        window.location.href = '/';
      } else {
        setError(result.message || 'Login failed.');
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
        <h2>Login</h2>
        <form onSubmit={onLoginSubmit}>
          <label htmlFor="login-email">Email</label>
          <input
            type="email"
            id="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />

          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />

          <button type="submit">Login</button>

          <p className="auth-link">
            <a href="/forgot-password">Forgot password?</a>
          </p>
          <p className="auth-link">
            Don’t have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>

      <FooterComponent />
    </div>
  );
}