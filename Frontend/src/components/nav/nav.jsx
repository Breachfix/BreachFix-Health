import './nav.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchUserProfile } from '../../services/authService';

export default function NavbarComponent() {
  const [userImage, setUserImage] = useState('/avata.avif');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      fetchUserImage();
    }
  }, []);

  const fetchUserImage = async () => {
    try {
      const response = await fetchUserProfile();
      if (response?.user) {
        const username = response.user.username || 'User';
        const avatarUrl = response.user.image || `https://eu.ui-avatars.com/api/?name=${encodeURIComponent(username)}&size=250`;
        setUserImage(avatarUrl);
      }
    } catch (error) {
      console.error('Failed to load user image:', error);
      setUserImage('/avata.avif');
    }
  };

  const handleUserClick = () => {
    navigate('/profile');
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/assets/6.svg" alt="BreachFix Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Courses</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li>
          <img
            src={userImage}
            alt="User Profile"
            className="user-avatar"
            onClick={handleUserClick}
          />
        </li>
      </ul>
    </nav>
  );
}
