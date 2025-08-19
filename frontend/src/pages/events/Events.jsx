import './Events.css';
import FooterComponent from '../../components/footer/footer';
import NavbarComponent from '../../components/nav/nav';
import { useEffect, useState } from 'react';

const DEFAULT_EVENTBRITE_LINK = "https://www.eventbrite.ca/e/community-nedley-depression-and-anxiety-recovery-programtm-session-1-8-tickets-1600901191559?aff=oddtdtcreator";

const EVENTS = [
  {
    title: "Info Session – Depression & Anxiety Recovery Program",
    date: "2025-08-24T11:00:00",
    location: "Surrey Libraries – City Centre Branch, Room 120, 10350 University Drive, Surrey, BC",
    link: "https://www.eventbrite.ca/e/community-nedley-depression-and-anxiety-recovery-programtm-session-1-8-tickets-1600901191559?aff=oddtdtcreator",
    type: "free",
    course: null,
    details: "This free info session offers an overview of the upcoming Community Nedley Depression and Anxiety Recovery Program. Meet the facilitators, ask questions, and discover how this program could support your mental and emotional health. Runs from 11:00 AM to 1:15 PM.",
    image: "/assets/ndarp/4.png"
  },
  {
    title: "Info Session – Aug 25 (Library)",
    date: "2025-08-25T15:00:00",
    location: "Surrey Libraries – City Centre Branch, Room 401, 10350 University Drive, Surrey, BC",
    link: "https://www.eventbrite.ca/e/community-nedley-depression-and-anxiety-recovery-programtm-session-1-8-tickets-1600901191559?aff=oddtdtcreator",
    type: "free",
    course: null,
    details: "A second info session to learn more about the upcoming program, ask questions, and connect with facilitators. Starts at 3:00 PM.",
    image: "/assets/ndarp/1.png"
  },
  {
    title: "Info Session – Aug 31 (Library)",
    date: "2025-08-31T11:00:00",
    location: "Surrey Libraries – City Centre Branch, Room 120, 10350 University Drive, Surrey, BC",
    link: "https://www.eventbrite.ca/e/community-nedley-depression-and-anxiety-recovery-programtm-session-1-8-tickets-1600901191559?aff=oddtdtcreator",
    type: "free",
    course: null,
    details: "Drop-in info session at the Surrey Library. Come explore what the program is all about. Runs from 11:00 AM to 1:15 PM.",
    image: "/assets/ndarp/4.png"
  },
  {
    title: "Info Session – Sept 3 (Library)",
    date: "2025-09-03T16:00:00",
    location: "Surrey Libraries – City Centre Branch, Room 120, 10350 University Drive, Surrey, BC",
    link: "https://www.eventbrite.ca/e/community-nedley-depression-and-anxiety-recovery-programtm-session-1-8-tickets-1600901191559?aff=oddtdtcreator",
    type: "free",
    course: null,
    details: "This afternoon info session at the library starts at 4:00 PM. Learn about the recovery program and how to register.",
    image: "/assets/ndarp/2.png"
  },
  {
    title: "Info Session – Sept 7 (Surrey Church)",
    date: "2025-09-07T14:00:00",
    location: "Surrey Seventh-day Adventist Church, 8520 132 Street, Surrey, BC V3W 4N7, Canada",
    link: "https://www.eventbrite.ca/e/community-nedley-depression-and-anxiety-recovery-programtm-session-1-8-tickets-1600901191559?aff=oddtdtcreator",
    type: "free",
    course: null,
    details: "Special weekend info session held at Surrey SDA Church. Starts at 2:00 PM and ends at 3:30 PM. All are welcome.",
    image: "/assets/ndarp/3.png"
  },
  {
    title: "Session 1 – How to Improve Your Brain",
    date: "2025-09-28T14:00:00",
    location: "Surrey Libraries – City Centre Branch, Room 120, 10350 University Drive, Surrey, BC",
    link: "https://www.eventbrite.ca/e/community-nedley-depression-and-anxiety-recovery-programtm-session-1-8-tickets-1600901191559?aff=oddtdtcreator",
    type: "in-person",
    course: null,
    details: "Learn how to improve brain function and emotional resilience through practical lifestyle strategies rooted in science and experience.",
    image: "/assets/ndarp/8.png"
  },
  {
    title: "Session 2 – Lifestyle Therapies for Depression and Anxiety",
    date: "2025-10-05T14:00:00",
    location: "Surrey Libraries – City Centre Branch, Room 120, 10350 University Drive, Surrey, BC",
    link: "https://www.eventbrite.ca/e/community-nedley-depression-and-anxiety-recovery-programtm-session-1-8-tickets-1600901191559?aff=oddtdtcreator",
    type: "in-person",
    course: null,
    details: "Explore lifestyle-based approaches proven to reduce symptoms of depression and anxiety naturally, without harmful side effects.",
    image: "/assets/ndarp/9.png"
  },
  {
    title: "Session 3 – Nutrition for the Brain",
    date: "2025-10-12T14:00:00",
    location: "Surrey Libraries – City Centre Branch, Room 120, 10350 University Drive, Surrey, BC",
    link: "https://www.eventbrite.ca/e/community-nedley-depression-and-anxiety-recovery-programtm-session-1-8-tickets-1600901191559?aff=oddtdtcreator",
    type: "in-person",
    course: null,
    details: "Learn how what you eat affects how you think, feel, and function. Discover dietary principles that support optimal brain health.",
    image: "/assets/ndarp/10.png"
  },
  {
    title: "Session 4 – How Thinking Can Defeat Depression and Anxiety",
    date: "2025-10-19T14:00:00",
    location: "Surrey Libraries – City Centre Branch, Room 120, 10350 University Drive, Surrey, BC",
    link: "https://www.eventbrite.ca/e/community-nedley-depression-and-anxiety-recovery-programtm-session-1-8-tickets-1600901191559?aff=oddtdtcreator",
    type: "in-person",
    course: null,
    details: "Explore the power of cognitive reframing, mindset renewal, and thought control in overcoming mental health challenges.",
    image: "/assets/ndarp/11.png"
  },
  {
    title: "Session 5 – Changing Your Thinking to Combat Stress",
    date: "2025-10-26T14:00:00",
    location: "Surrey Libraries – City Centre Branch, Room 120, 10350 University Drive, Surrey, BC",
    link: "https://www.eventbrite.ca/e/community-nedley-depression-and-anxiety-recovery-programtm-session-1-8-tickets-1600901191559?aff=oddtdtcreator",
    type: "in-person",
    course: null,
    details: "Discover practical tools for managing stress by adjusting thought patterns and responding to life more constructively.",
    image: "/assets/ndarp/7.png"
  },
  {
    title: "Session 6 – Enhanced Frontal Lobe Function & Overcoming Addiction",
    date: "2025-11-02T14:00:00",
    location: "Surrey Libraries – City Centre Branch, Room 120, 10350 University Drive, Surrey, BC",
    link: "https://www.eventbrite.ca/e/community-nedley-depression-and-anxiety-recovery-programtm-session-1-8-tickets-1600901191559?aff=oddtdtcreator",
    type: "in-person",
    course: null,
    details: "Gain insights into brain function and self-control. Learn how to overcome habits and addictions by boosting frontal lobe activity.",
    image: "/assets/ndarp/12.png"
  },
  {
    title: "Session 7 – Finding Purpose After Loss and Trauma",
    date: "2025-11-09T14:00:00",
    location: "Surrey Libraries – City Centre Branch, Room 120, 10350 University Drive, Surrey, BC",
    link: "https://www.eventbrite.ca/e/community-nedley-depression-and-anxiety-recovery-programtm-session-1-8-tickets-1600901191559?aff=oddtdtcreator",
    type: "in-person",
    course: null,
    details: "Explore healing pathways through grief, trauma, and emotional pain. Learn how to rebuild purpose after hardship.",
    image: "/assets/ndarp/13.png"
  },
  {
    title: "Session 8 – Making and Staying with Positive Lifestyle Choices",
    date: "2025-11-16T14:00:00",
    location: "Surrey Libraries – City Centre Branch, Room 120, 10350 University Drive, Surrey, BC",
    link: "https://www.eventbrite.ca/e/community-nedley-depression-and-anxiety-recovery-programtm-session-1-8-tickets-1600901191559?aff=oddtdtcreator",
    type: "in-person",
    course: null,
    details: "Wrap up the series with tools to sustain the healthy habits you’ve built. Learn how to maintain lifestyle changes that last.",
    image: "/assets/ndarp/14.png"
  },
  {
    title: "Graduation Ceremony",
    date: "2025-11-23T14:00:00",
    location: "Surrey Seventh-day Adventist Church, 8520 132 Street, Surrey, BC V3W 4N7, Canada",
    link: "https://www.eventbrite.ca/e/community-nedley-depression-and-anxiety-recovery-programtm-session-1-8-tickets-1600901191559?aff=oddtdtcreator",
    type: "in-person",
    course: null,
    details: "Join us to celebrate the successful completion of the 8-week program. Certificates, sharing, and light refreshments at Surrey Church.",
    image: "/assets/ndarp/16.png"
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

  // Function to get dynamic image for first 13 events
  const getEventImage = (event, index) => {
    if (event.image) return event.image;
    if (index < 13) return `/assets/ndarp/${index + 4}.png`;
    return null;
  };

  return (
    <div className="events-wrapper">
      <NavbarComponent />
      <section className="hero">
        <h2>Upcoming Events</h2>
        <p>
          Join our info sessions and 8-week mental wellness series based on the Nedley Depression and Anxiety Recovery Program™.
        </p>
        <a
          href="/explore"
          className="inline-block mt-6 bg-white text-green-700 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition"
        >
          Explore More
        </a>
      </section>

      <main className="event-list">
        {EVENTS.map((event, index) => {
          const countdown = getCountdown(event.date);
          const imageSrc = getEventImage(event, index);
          const eventLink = event.link || DEFAULT_EVENTBRITE_LINK;
          return (
            <div className="event" key={index}>
              <h3>{event.title}</h3>
              <div className="event-content">
                <div className="event-media">
                  {event.video ? (
                    <iframe src={event.video} allowFullScreen title={event.title}></iframe>
                  ) : (
                    imageSrc && <img src={imageSrc} alt={event.title} />
                  )}
                </div>
                <div className="event-details">
                  <p className="info"><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
                  <p className="info"><strong>Location:</strong> {event.location}</p>
                  <p className="info"><strong>Details:</strong> {event.details}</p>
                  <a href={eventLink} target="_blank" rel="noopener noreferrer" className="button">
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