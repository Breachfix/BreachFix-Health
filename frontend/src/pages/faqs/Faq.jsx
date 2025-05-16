import { useState } from 'react';
import './Faq.css';
const faqs = [
  {
    question: "What is BreachFix Health?",
    answer:
      "BreachFix Health is a holistic platform that combines biblical principles with science to help you achieve optimal well-being through courses, events, and personalized tools."
  },
  {
    question: "How do I sign up for a course?",
    answer:
      "Simply navigate to the Courses page, choose the one that suits your needs, and click 'Join Course'. You may need to create an account or log in first."
  },
  {
    question: "Is the content free or paid?",
    answer:
      "We offer a mix of free and premium content. Some events and materials may require a subscription or one-time payment."
  },
  {
    question: "Can I access the platform on mobile?",
    answer:
      "Yes! BreachFix Health is optimized for mobile devices so you can learn and grow on the go."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-green-50 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border border-green-300 rounded-md mb-4 bg-white shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 focus:outline-none flex justify-between items-center hover:bg-green-100 transition"
            >
              <span className="text-lg font-medium text-green-800">{faq.question}</span>
              <span className="text-green-600">{openIndex === index ? '-' : '+'}</span>
            </button>
            <div
              className={`px-4 pb-4 pt-1 text-green-700 text-sm transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
