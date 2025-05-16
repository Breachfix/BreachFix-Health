import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Explore from './pages/explore/Explore.jsx';
import Tips from './pages/tips/tips.jsx';
import Nutrition from './pages/courses/Nutrition.jsx';
import Events from './pages/events/Events.jsx';
import Login from './pages/auth/Login.jsx';
import Signup from './pages/auth/Signup.jsx';
import ForgotPassword from './pages/auth/ForgotPassword.jsx';
import ResetPassword from './pages/auth/ResetPassword.jsx';
import Subscribe from './pages/auth/Subscribe.jsx';
import UpdateUser from './pages/update-user/UpdateUser.jsx';
import UserProfile from './components/user-profile/userProfile.jsx';
import Shop from './pages/shop/Shop.jsx';
import PrivacyPolicy from './pages/legal/PrivacyPolicy.jsx';
import TermsAndConditions from './pages/legal/TermsAndConditions.jsx';
import './styles/app.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/explore" element={<Explore />} />
         <Route path="/tips" element={<Tips />} />
         <Route path="/nutrition" element={<Nutrition />} />
         <Route path="/events" element={<Events />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/forgot-password" element={<ForgotPassword />} />
         <Route path="/reset-password" element={<ResetPassword />} />
         <Route path="/subscribe" element={<Subscribe />} />
         <Route path="/update-profile" element={<UpdateUser />} />
         <Route path="/profile" element={<UserProfile />} />
         <Route path="/shop" element={<Shop />} />
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
         <Route path="/terms-and-condition" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;