import React, { useState, useEffect } from 'react';
import './testimonies.css';

const testimonials = [
  {
    name: 'Val',
    image: '/assets/1.JPG',
    quote:
      'Before the program, I rarely moved due to my office work and being at home most of the time. But I learned how essential walking is for my health, and now I go up and down the stairs daily—it’s made a big difference. I feel stronger, more in control, and I’m committed to keeping it up.',
  },
  {
    name: 'John',
    image: '/assets/3.JPG',
    quote:
      'Before the program, I struggled to manage my blood sugar levels. But after going through Diabetes Undone, everything started to change. The principles taught were simple yet powerful. I feel more in control of my health, and I believe my wellbeing will only keep improving.',
  },
  {
    name: 'Precious',
    image: '/assets/5.JPG',
    quote:
      'I joined simply to feel better—but I found something more. It was educational, inspiring, and healing. I plan to use what I’ve learned to help many of my friends and colleagues back in Nigeria.',
  },
  {
    name: 'Carol',
    image: '/assets/6.JPG',
    quote:
      'The program was incredibly helpful to me, and I’ve used it to encourage many of my friends to take better care of their health.',
  },
];

export default function Testimonies() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const { name, image, quote } = testimonials[index];

  return (
    <section className="testimonials-wrapper">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">Real Stories, Real Healing</h2>

        <div className="testimonial-slide">
          <img src={image} alt={name} className="testimonial-image" />
          <div className="testimonial-text">
            <p className="testimonial-quote">"{quote}"</p>
            <p className="testimonial-author">&mdash; {name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
