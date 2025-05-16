import './Events.css';
import FooterComponent from '../../components/footer/footer';
import NavbarComponent from '../../components/nav/nav';
import { useEffect, useState } from 'react';

const EVENTS = [
  {
    title: "Nutrition Workshop",
    date: "2025-09-01T18:00:00",
    location: "Online",
    link: "https://example.com/join-nutrition",
    type: "online",
    course: "nutrition",
    details:
      "Join us for a comprehensive session on the 8 laws of health. We'll explore practical meal planning tips, natural remedies, and how lifestyle choices impact long-term well-being.",
    video: "https://www.youtube.com/embed/4K2TveRO4QI"
  },
  {
    title: "Rest and Recovery Conference",
    date: "2025-12-10T10:00:00",
    location: "Health Center Auditorium",
    link: "course-details.html?course=rest",
    type: "in-person",
    course: "rest",
    details:
      "Discover the science and spirituality behind rest. This in-person conference explores physical rest, mental calm, and spiritual reflection.",
    image: "src/assets/explore/rest 1.svg"
  },
  {
    title: "Victory Over Addictions - Live Q&A",
    date: "2025-07-05T20:00:00",
    location: "Online",
    link: "login.html",
    type: "login-required",
    course: null,
    details:
      "This live Q&A will focus on overcoming addictions from a spiritual and psychological perspective. Registration and login required.",
    image: "src/assets/explore/victory 1.svg"
  },
  {
    title: "Mental Health Mastery",
    date: "2025-08-15T14:00:00",
    location: "Online",
    link: "payment.html",
    type: "paid",
    course: "mental-health",
    details:
      "Explore God’s plan for mental wellness and emotional resilience. Learn to manage stress and cultivate peace in daily life.",
    image: "src/assets/explore/Mental 2.svg"
  }
];


export default function Events() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getCountdown = (targetDate) => {
    const diff = new Date(targetDate) - now;
    if (diff <= 0) return null;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    return { d, h, m, s };
  };

  return (
    <div className="events-wrapper">
      <NavbarComponent />
      <section className="hero">
        <h2>Upcoming Events</h2>
        <p>
          Join our events and courses to learn how to live a healthier,
          purpose-driven life.
        </p>
        <a
          href="/explore"
          className="inline-block mt-6 bg-white text-green-700 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition"
        >
          Explore Courses
        </a>
      </section>

      <main className="event-list">
        {EVENTS.map((event, index) => {
          const countdown = getCountdown(event.date);
          return (
            <div className="event" key={index}>
  <h3>{event.title}</h3>
  <div className="event-content">
    <div className="event-media">
      {event.video ? (
        <iframe src={event.video} allowFullScreen title={event.title}></iframe>
      ) : (
        <img src={event.image} alt={event.title} />
      )}
    </div>
    <div className="event-details">
      <p className="info"><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
      <p className="info"><strong>Location:</strong> {event.location}</p>
      <p className="info"><strong>Details:</strong> {event.details}</p>
      <a href={event.link} target="_blank" rel="noopener noreferrer" className="button">
        {event.type === 'paid'
          ? 'Pay & Join'
          : event.type === 'login-required'
          ? 'Login to Join'
          : event.type === 'online'
          ? 'Join Online'
          : event.course
          ? 'View Course'
          : 'More Info'}
      </a>
    </div>
  </div>
  {countdown && (
    <div className="flip-clock">
      {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit, i) => (
        <div className="flip-box" key={i}>
          <div className="flip-unit-title">{unit}</div>
          <div className="flip-card">
            <div className="flip-num">
              {unit === 'Days'
                ? String(countdown.d).padStart(2, '0')
                : unit === 'Hours'
                ? String(countdown.h).padStart(2, '0')
                : unit === 'Minutes'
                ? String(countdown.m).padStart(2, '0')
                : String(countdown.s).padStart(2, '0')}
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
          );
        })}
      </main>

      <FooterComponent />
    </div>
  );
}
