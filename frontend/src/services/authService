import axios from 'axios';
const API = import.meta.env.VITE_API_BASE_URL
const API_URL = `${API}/api/v1`; // Backend URL for the API

// Create an Axios instance
const api = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor to include the token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken'); // Adjust to your token storage logic
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// -----------------
// User Profile APIs
// -----------------

export const fetchUserProfile = async () => {
  try {
    const response = await api.get('/auth/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error.response?.data || error.message);
    throw error;
  }
};

export const updateUserProfile = async (updatedData) => {
  try {
    const formData = new FormData();
    formData.append('username', updatedData.username);
    formData.append('email', updatedData.email);

    // Always check if it's a File object before appending
    if (updatedData.image && updatedData.image instanceof File) {
      formData.append('image', updatedData.image);
    } else if (typeof updatedData.image === 'string') {
      formData.append('imageUrl', updatedData.image); // For default avatar reset
    }

    const response = await api.put('/auth/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error.response?.data || error.message);
    throw error;
  }
};

// -----------------
// Authentication APIs
// -----------------
// Fetch the user's role
export const fetchUserRole = async () => {
  try {
    const response = await api.get('/auth/role');
    return response.data.role;
  } catch (error) {
    console.error('Error fetching user role:', error.response?.data || error.message);
    throw error;
  }
};


// Update the user's role
export const updateUserRole = async (role) => {
  try {
    const response = await api.put('/auth/role-update', { role });
    return response.data;
  } catch (error) {
    console.error('Error updating user role:', error.response?.data || error.message);
    throw error;
  }
};


export const login = async (data) => {
  try {
    const response = await api.post('/auth/login', data);
    const { success, accessToken, refreshToken, user, message, twoFactorRequired } = response.data;

    if (success) {
      if (twoFactorRequired) {
        console.log('2FA required, redirecting to OTP verification...');
        return { success, twoFactorRequired, message, user }; // Handle 2FA in the frontend
      }

      // Save tokens and userId to localStorage for regular login
      localStorage.setItem('authToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('userId', user.id);
      return { success, twoFactorRequired: false, message };
    } else {
      console.warn('Invalid login response:', response.data);
      throw new Error(message || 'Invalid response from login API.');
    }
  } catch (error) {
    console.error('Error during login:', error.response?.data || error.message);
    throw error;
  }
};

// Signup API
export const signup = async (data) => {
  try {
    const response = await api.post('/auth/signup', data);
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};
// Resend Verification Email
export const resendVerification = async (data) => {
  try {
    const response = await api.post('/auth/resend-verification', data);
    return response.data;
  } catch (error) {
    console.error('Error resending verification email:', error.response?.data || error.message);
    throw error;
  }
};

// Logout API
export const logout = async () => {
  try {
    await api.post('/auth/logout');
    localStorage.removeItem('authToken'); // Clear token from storage
    return { success: true, message: 'Logged out successfully' };
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};

export const resetPassword = async (email, otp, newPassword) => {
  try {
    const response = await api.post('/auth/reset_password', {
      email,
      otp,
      newPassword,
    });
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error.response?.data?.message || error.message);
    throw error;
  }
};

// -----------------
// OTP & 2FA APIs
// -----------------

export const sendOtp = async (data) => {
  try {
    const response = await api.post('/auth/send_otp', data);
    return response.data;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
};

export const verifyOtp = async (data) => {
  try {
    const response = await api.post('/auth/verify-otp', data);
    return response.data;
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw error;
  }
};

export const enable2FA = async (data) => {
  try {
    const response = await api.post('/auth/enable-2fa', data);
    return response.data;
  } catch (error) {
    console.error("Error enabling 2FA:", error);
    throw error;
  }
};

export const verifyTwoFactor = async (data) => {
  try {
    const response = await api.post('/auth/verify-2fa', data);

    // Check if the response contains success
    if (response.data?.success) {
      console.log("2FA verification successful:", response.data.message);
      return response.data;
    } else {
      console.warn("2FA verification failed:", response.data?.message || "Unknown error");
      throw new Error(response.data?.message || "Failed to verify 2FA");
    }
  } catch (error) {
    // Log detailed error information
    console.error("Error verifying 2FA:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "An error occurred during 2FA verification");
  }
};

export const disable2FA = async () => {
  try {
    const response = await api.post('/auth/disable-2fa');
    return response.data;
  } catch (error) {
    console.error("Error disabling 2FA:", error);
    throw error;
  }
};