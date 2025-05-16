import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from '../../components/nav/nav';
import FooterComponent from '../../components/footer/footer';
import { fetchUserProfile, updateUserProfile } from '../../services/authService';
import './UpdateUser.css';

const UpdateUser = () => {
  const [userData, setUserData] = useState({ username: '', email: '', image: null });
  const [previewImage, setPreviewImage] = useState(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const profile = await fetchUserProfile();
        setUserData({ username: profile.user.username, email: profile.user.email, image: profile.user.image });
        setPreviewImage(profile.user.image);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setMessage('Failed to load profile.');
      }
    };
    loadUserProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserData((prevData) => ({ ...prevData, image: file }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleResetImage = async () => {
    const defaultImage = `https://eu.ui-avatars.com/api/?name=${encodeURIComponent(userData.username)}&size=250`;
    setPreviewImage(defaultImage);
    setMessage('Profile image reset to default.');

    try {
      setIsLoading(true);
      await updateUserProfile({ ...userData, image: defaultImage });
      setMessage('Profile image reset successfully.');
      navigate('/profile');
    } catch (error) {
      console.error('Error resetting profile image:', error);
      setMessage('Failed to reset profile image.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await updateUserProfile(userData);
      setMessage(response.message || 'Profile updated successfully');
      navigate('/profile');
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('Failed to update profile.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <NavbarComponent />

      <section className="hero">
        <h2>Update Your Profile</h2>
        <p>Keep your details current to personalize your experience and stay in touch.</p>
        <a href="/explore" className="inline-block mt-6 bg-white text-green-700 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition">
          Explore Courses
        </a>
      </section>

      <div className="auth-container">
        <h2>Update Profile</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {previewImage && <img src={previewImage} alt="Profile Preview" className="profile-preview" />}

          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" value={userData.username} onChange={handleChange} required />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={userData.email} onChange={handleChange} required />

          <label htmlFor="image">Profile Image:</label>
          <input type="file" name="image" id="image" onChange={handleImageChange} />

          <div className="buttons">
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Updating...' : 'Update Profile'}
            </button>
            <button type="button" className="reset-button" onClick={handleResetImage}>
              Image Reset
            </button>
          </div>
        </form>
        {message && <p className="auth-link message">{message}</p>}
      </div>

      <FooterComponent />
    </div>
  );
};

export default UpdateUser;
