import './Courses.css';
import FooterComponent from '../../components/footer/footer';
import NavbarComponent from '../../components/nav/nav';

const lessons = [
  {
    title: "Lesson 1: Foundations of Nutrition",
    video: "https://www.youtube.com/embed/4K2TveRO4QI",
    description:
      "In this lesson, you'll explore the 8 laws of health, key nutrients for energy, and biblical principles for eating and healing.",
    quizQuestion: "What are the two most essential nutrients for daily energy?",
  }
  // You can duplicate this object to add more lessons later.
];

export default function Course() {
  return (
    <div className="course-wrapper">
      <NavbarComponent />

      <section className="hero">
        <h2>Welcome to Nutrition Course 101</h2>
        <p>
          Discover how simple, powerful changes in your daily habits can
          transform your health. In this course, you'll explore God’s original
          plan for our nourishment, learn the science behind wholesome eating,
          and gain practical tools to make lasting lifestyle changes. Start
          your journey to vibrant living—one meal at a time.
        </p>
        <a
          href="/explore"
          className="inline-block mt-6 bg-white text-green-700 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition"
        >
          Explore Courses
        </a>
      </section>

      <main className="lessons">
        {lessons.map((lesson, index) => (
          <div className="lesson" key={index}>
            <h2>{lesson.title}</h2>

            <div className="video-container">
              <iframe
                src={`${lesson.video}?enablejsapi=1`}
                title={`Lesson ${index + 1} Video`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            <div className="progress-bar">
              <label htmlFor={`progress${index}`}>Progress:</label>
              <progress id={`progress${index}`} value="0" max="100"></progress>
            </div>

            <div className="reading">
              <p>{lesson.description}</p>
            </div>

            <div className="quiz">
              <h3>Quick Quiz</h3>
              <p>Q: {lesson.quizQuestion}</p>
              <input type="text" placeholder="Type your answer..." />
              <button>Submit</button>
            </div>
          </div>
        ))}
      </main>

      <FooterComponent />
    </div>
  );
}
