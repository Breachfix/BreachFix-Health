import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarComponent from '../../components/nav/nav';
import FooterComponent from '../../components/footer/footer';
import { logout } from '../../services/authService';
import './UserProfile.css';

const UserProfile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem('authToken');
      setIsLoggedIn(false);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="login-wrapper">
      <NavbarComponent />

      <section className="hero">
        <h2>Your Dashboard</h2>
        <p>Welcome to your personal health hub.</p>
        <a href="/explore" className="inline-block mt-6 bg-white text-green-700 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition">
          Explore Courses
        </a>
      </section>

      <div className="profile-container">
        <MenuCard title="Account Settings" links={[
          { text: 'Edit Profile', to: '/update-profile' },
          { text: 'Subscription', to: '/subscribe' },
          { text: isLoggedIn ? 'Logout' : 'Login', action: isLoggedIn ? handleLogout : () => navigate('/login') }
        ]} />

        <MenuCard title="Courses & Events" links={[
          { text: 'Explore Courses', to: '/explore' },
          { text: 'Upcoming Events', to: '/events' },
          { text: 'Nutrition Course', to: '/nutrition' }
        ]} />
      </div>

      <FooterComponent />
    </div>
  );
};

const MenuCard = ({ title, links }) => (
  <div className="menu-card">
    <h3>{title}</h3>
    <ul className="menu-links">
      {links.map((link, index) => (
        link.to ? (
          <li key={index}><Link to={link.to}>{link.text}</Link></li>
        ) : (
          <li key={index} onClick={link.action} className="auth-link">{link.text}</li>
        )
      ))}
    </ul>
  </div>
);

export default UserProfile;
