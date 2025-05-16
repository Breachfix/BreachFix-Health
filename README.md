# BreachFix Health – Frontend

Welcome to the official **BreachFix Health** frontend repository. This React-based web application is the digital front for BreachFix Health, a holistic wellness platform delivering engaging content, live events, product offerings, and secure user interactions to promote healthy living for individuals and communities.

---

## 🌿 Overview

**BreachFix Health** is a digital platform built to empower individuals through:
- 📚 Courses on nutrition, mental health, rest, and more
- 🎤 Testimonies that inspire lifestyle change
- 🛒 A healthy life shop for curated wellness products
- 🗓️ Events & workshops with countdowns and RSVP
- 👤 Authenticated user profiles with image upload support
- 💬 Tips, chat popup, voice search, and dynamic search
- 🔒 Secure login/signup with JWT and 2FA support
- 📜 Terms of Service & Privacy Policy integration

---

## 🚀 Tech Stack

- **React 19** + **Vite** (SPA)
- **SASS/CSS** – custom styling
- **Axios** – API interaction
- **MongoDB Backend API** (connected via `.env`)
- **AWS S3** – for user profile image storage
- **JWT Authentication** – via AuthContext
- **Responsive Design** – fully mobile-friendly

---

## 🧠 Key Features

- ✅ Fully working auth (Signup, Login, OTP, Reset Password)
- 🎯 Profile image upload + auto avatar fallback
- ⏳ Live event countdown timer (flip clock style)
- 🛍️ Add-to-cart with cart drawer and checkout mock
- 🎥 Testimonial carousel with smooth transitions
- 📃 Accessible Terms & Conditions + Privacy Policy pages
- 📲 Social media links with hover effects and unique icons
- 🔍 Voice search and keyword search

---

## 📁 Folder Structure

```
src/
│
├── components/         # Reusable components like Navbar, Footer, Sidebar
├── context/            # AuthContext and SearchContext
├── pages/              # Pages like Home, Login, Signup, Shop, Events, Explore
├── services/           # Axios API services
├── styles/             # CSS & SASS files
├── App.jsx             # Main app component with routes
├── main.jsx            # Vite app entry
└── assets/             # Images, icons, and branding
```

---

## ⚙️ Setup

1. Clone the repo

```bash
git clone https://github.com/Breachfix/breachfix-react.git
cd breachfix-react
```

2. Install dependencies

```bash
npm install
```

3. Setup your `.env` file

```env
VITE_API_BASE_URL=http://localhost:7001
```

4. Run the dev server

```bash
npm run dev
```

---

## 🧪 Deployment

Build your production version using:

```bash
npm run build
```

And preview it:

```bash
npm run preview
```

---

## 📜 License

This project is © 2025 [BreachFix Health]. All rights reserved.

---

## 🙌 Acknowledgements

Built with ❤️ by the BreachFix Health Team. Special thanks to the wellness community and every story shared that brings healing and hope.

---
