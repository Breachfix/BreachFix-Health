import './Explore.css';
import { Link } from 'react-router-dom';
import FooterComponent from '../../components/footer/footer';
import NavbarComponent from '../../components/nav/nav';
import '../../styles/shared.css';

export default function Explore() {
  return (
    <div className="explore-wrapper">
      {/* Navbar */}
      <NavbarComponent />

      {/* Hero */}
      <section className="hero">
        <h2>Explore Life-Changing Health Courses</h2>
        <p>Dive deep into practical courses designed to transform your health and lifestyle. Some are free, others are premium.</p>
      </section>

      {/* Courses */}
      <main className="health-pillars">
        <h2>Available Courses</h2>
        <div className="pillar-container">
          {[
            {
              title: "Nutrition for Life",
              desc: "Understand how plant-based nutrition supports vitality and reverses chronic disease.",
              img: "/assets/explore/Nutrition 1.svg",
              link: "/nutrition"
            },
            {
              title: "God's Movement Plan",
              desc: "Daily movement and its spiritual impact on health and character development.",
              img: "/assets/explore/Sabbath  1.svg",
              link: "/course-details?course=exercise"
            },
            {
              title: "Rest and Recovery",
              desc: "The importance of Sabbath rest and sleep on emotional and physical healing.",
              img: "/assets/explore/rest 1.svg",
              link: "/course-details?course=rest"
            },
            {
              title: "Mastering Self-Control",
              desc: "This course is locked. Subscribe to gain access to this advanced course on habits, porn, and lifestyle addictions.",
              img: "/assets/explore/victory 1.svg",
              locked: true
            },
            {
              title: "Emotional and Mental Balance",
              desc: "This course is locked. Discover the biblical path to emotional wellness and mental peace.",
              img: "/assets/explore/Mental 1.svg",
              locked: true
            }
          ].map((course, idx) => (
            <div className={`pillar ${course.locked ? 'locked' : ''}`} key={idx}>
              <div className="pillar-media">
                <img src={course.img} alt={course.title} />
              </div>
              <div className="pillar-text">
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
                {course.locked ? (
                  <button className="btn disabled">Locked - Subscribe to Access</button>
                ) : (
                  <Link className="btn" to={course.link}>View Course</Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
}
