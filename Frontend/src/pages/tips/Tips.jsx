import './Tips.css';
import { useState } from 'react';
import FooterComponent from '../../components/footer/footer';
import NavbarComponent from '../../components/nav/nav';
import FAQSection from '../faqs/Faq';

const tipsList = [
  "Drink at least 8 cups of water daily to stay hydrated.",
  "Get sunlight each morning for at least 15 minutes.",
  "Sleep 7-9 hours every night for optimal rest.",
  "Exercise daily — even a brisk walk counts!",
  "Practice gratitude each morning to improve mental health.",
  "Eat more whole, plant-based foods." ,
  "Take deep breaths to lower stress quickly.",
  "Stretch in the morning to boost circulation.",
  "Avoid screens 1 hour before bedtime.",
  "Forgive and let go — it's good for your heart."
];

export default function Tips() {
  const [tipIndex, setTipIndex] = useState(0);

  const handleNewTip = () => {
    const next = (tipIndex + 1) % tipsList.length;
    setTipIndex(next);
  };

  return (
    <div className="tips-wrapper">
      <NavbarComponent />

      <section className="tips-hero">
        <h2>🌿 Daily Health Tips</h2>
        <p>Practical health reminders to keep your body, mind, and soul aligned.</p>
      </section>

      <section className="tips-content">
        <div className="tip-box">
          <p className="tip-text">{tipsList[tipIndex]}</p>
          <button onClick={handleNewTip}>Show Another Tip</button>
        </div>
      </section>
      <FAQSection />

      <FooterComponent />
    </div>
  );
}
