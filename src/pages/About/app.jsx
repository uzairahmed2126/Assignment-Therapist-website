import React from "react";
import "./About.css";
import therapistPhoto from "@assets/therapist.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Dr. Jennifer Hahm</h2>

          <div className="about-text">
            <p className="about-paragraph">
              Finding time and opportunities to care for ourselves can be
              incredibly challenging in today's busy and demanding world. I
              believe therapy offers a dedicated space for self-care, providing
              the support and tools needed to improve this essential practice.
            </p>
            <p className="about-paragraph">
              Therapy can help individuals identify and clarify their goals,
              values, and the various elements that contribute to their
              well-being, recognizing that these aspects vary from person to
              person.
            </p>
            <p className="about-paragraph">
              I am dedicated to supporting this journey by offering active
              listening, psychological knowledge, empathy, compassion, and
              insights into behavioral patterns and tendencies.
            </p>
          </div>

          <div className="about-credentials">
            <h3 className="credentials-title">Education & Experience</h3>
            <ul className="credentials-list">
              <li>
                Ph.D. in Counseling Psychology from Western Michigan University
                (2018)
              </li>
              <li>
                Master's degree in Clinical Psychology from the Michigan School
                of Psychology (2012)
              </li>
              <li>
                Experience in psychiatric inpatient units, academic medical
                centers, universities, and outpatient practice settings
              </li>
            </ul>
          </div>

          <div className="about-approach">
            <h3 className="approach-title">Therapeutic Approach</h3>
            <p>
              My therapeutic approach is primarily psychodynamic and humanistic,
              enriched by influences from positive psychology, existentialism,
              family systems theory, acceptance and commitment concepts, and
              mindfulness practices.
            </p>
          </div>
        </div>

        <div className="about-image">
          <img
            src={therapistPhoto}
            alt="Dr. Jennifer Hahm"
            className="therapist-portrait"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
