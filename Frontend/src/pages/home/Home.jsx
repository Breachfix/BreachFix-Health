import { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import '../../styles/shared.css';
import FooterComponent from '../../components/footer/footer';
import NavbarComponent from '../../components/nav/nav';
import FaqPage from '../faqs/Faq';
import Testimonies from '../../components/testimonies/testimonies';


function SomePage() {
  return (
    <div>
      {/* Your page content */}
      <FooterComponent />
    </div>
  );
}

const tips = [
  "Start your day with a glass of water to hydrate and energize your body.",
  "A 20-minute walk daily can significantly improve your cardiovascular health.",
  "Take a moment to breathe deeply, relax your mind, and reduce stress levels.",
  "Add more fruits and vegetables to your meals for a nutrient-packed diet.",
  "Get at least 7-8 hours of sleep for optimal health and well-being."
];

const faqs = {
  event: "You can view upcoming events on the 'Events' page.",
  course: "We offer several health courses. Visit the 'Courses' tab!",
  buy: "You can buy courses or health products using our secure checkout.",
  help: "I'm here to help! Try asking about events or courses.",
  login: "Use the login page at the top to access your account.",
  register: "Click on 'Sign Up' in the navigation bar to register."
};

export default function Home() {
  const [currentTip, setCurrentTip] = useState('');
  const [todayDate, setTodayDate] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');

  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setTodayDate(today.toLocaleDateString(undefined, options));
    setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);
    setTimeout(() => setShowPopup(true), 5000);
  }, []);

  const handleNewTip = () => {
    setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    const lowerInput = chatInput.toLowerCase();
    const response = Object.keys(faqs).find(key => lowerInput.includes(key));
    setChatMessages([...chatMessages, { sender: 'You', text: chatInput }, { sender: 'Assistant', text: faqs[response] || "Sorry, I didn't understand that. Try asking about events, courses, or help." }]);
    setChatInput('');
  };

  return (
    <div className="home-wrapper">
         <div className="container">
      <NavbarComponent />
      <main className="container">

      <section className="hero">
        <h2>Welcome to Your Health Journey</h2>
        <p>Join our events and courses to learn how to live a healthier, purpose-driven life.</p>
        <Link to="/explore" className="explore-button">Explore Courses</Link>
      </section>

      {showPopup && (
        <div className="popup">
          <p>📢 New Event This Weekend! Check it out!</p>
        </div>
      )}

      <section className="health-pillars">
        <div className="content-wrapper">
          <div className="pillar-container">
            <h2>Explore the Four Pillars of Health</h2>
            {[{
              title: "🧠 Mental Health",
              desc: "We believe in cultivating a sound mind through clarity, purpose, and rest. Using Bible-based strategies and therapeutic support, we promote mental resilience for life's challenges.",
              video: "https://www.youtube.com/embed/l-By6TpN9dg"
            }, {
              title: "💪 Physical Health",
              desc: "We use natural laws of health including diet, exercise, water, sunlight, and rest to help you restore and maintain your body’s full potential. NEWSTART principles guide our methods.",
              video: "https://www.youtube.com/embed/4K2TveRO4QI"
            }, {
              title: "💓 Spiritual Health",
              desc: "Our approach includes spiritual healing by connecting with God through prayer, Scripture, and devotion. We believe true transformation begins from within and aligns with God's design.",
              video: "https://www.youtube.com/embed/PThmNdsMG6M"
            }, {
              title: "🧬 Emotional Health",
              desc: "We help you understand emotions, trauma, and relationships with a gospel-centered view. Tools like journaling, forgiveness, and godly community support emotional restoration.",
              video: "https://www.youtube.com/embed/oB2WGJ4m1AU"
            }].map((pillar, idx) => (
              <div className="pillar" key={idx}>
                <div className="pillar-text">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </div>
                <div className="pillar-media">
                  <iframe width="100%" height="300" src={pillar.video} frameBorder="0" allowFullScreen></iframe>
                </div>
              </div>
            ))}
          </div>

          <div className="tips-section">
            <h2>🌿 Daily Health Tip</h2>
            <div className="date">{todayDate}</div>
            <div className="tip-box">
              <p className="tip-text">{currentTip}</p>
            </div>
            <button onClick={handleNewTip}>Show Another Tip</button>

           <Testimonies />
          </div>
        </div>
      </section>
      </main>

      <div className="chat-icon" onClick={() => setChatVisible(!chatVisible)}>
        💬
      </div>

      {chatVisible && (
        <div className="chat-box">
          <div className="chat-messages">
            {chatMessages.map((msg, i) => (
              <div key={i}><strong>{msg.sender}:</strong> {msg.text}</div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Type your message..."
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            className="chat-input"
          />
          <button onClick={handleSendMessage} className="chat-send">
            Send
          </button>
        </div>
      )}
      </div>
      <FooterComponent />
    </div>
    
  );
}
