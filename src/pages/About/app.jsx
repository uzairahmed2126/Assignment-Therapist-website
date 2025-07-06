import React from "react";
import "./About.css";
import therapistPhoto from "@assets/therapist.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">
            About Dr. Serena Blake, PsyD (Clinical Psychologist)
          </h2>

          <div className="about-text">
            <p className="about-paragraph">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based
              in Los Angeles, CA, with eight years of experience and over 500
              client sessions. She blends evidence-based approaches—like
              cognitive-behavioral therapy and mindfulness—with compassionate,
              personalized care to help you overcome anxiety, strengthen
              relationships, and heal from trauma.
            </p>
            <p className="about-paragraph">
              Whether you meet in her Maplewood Drive office or connect
              virtually via Zoom, Dr. Blake is committed to creating a safe,
              supportive space for you to thrive.
            </p>
            <p className="about-paragraph">
              Her therapeutic style is warm and collaborative, rooted in empathy
              and a deep understanding of the human experience.
            </p>
          </div>

          <div className="about-credentials">
            <h3 className="credentials-title">Office & Contact</h3>
            <ul className="credentials-list">
              <li>
                <strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA
                90026
              </li>
              <li>
                <strong>Phone:</strong> (323) 555-0192
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:serena@blakepsychology.com">
                  serena@blakepsychology.com
                </a>
              </li>
            </ul>
          </div>

          <div className="about-credentials">
            <h3 className="credentials-title">Office Hours</h3>
            <ul className="credentials-list">
              <li>
                <strong>In-person:</strong> Tuesday & Thursday, 10 AM – 6 PM
              </li>
              <li>
                <strong>Virtual via Zoom:</strong> Monday, Wednesday & Friday, 1
                PM – 5 PM
              </li>
            </ul>
          </div>

          <div className="about-approach">
            <h3 className="approach-title">Services & Specialties</h3>
            <ul className="credentials-list">
              <li>Anxiety & Stress Management</li>
              <li>Relationship Counseling</li>
              <li>Trauma Recovery</li>
            </ul>
          </div>

          <div className="about-approach">
            <h3 className="approach-title">Session Fees</h3>
            <ul className="credentials-list">
              <li>$200 / individual session</li>
              <li>$240 / couples session</li>
            </ul>
          </div>

          <div className="about-approach">
            <h3 className="approach-title">Frequently Asked Questions</h3>
            <ul className="credentials-list">
              <li>
                <strong>Do you accept insurance?</strong> No, but a superbill is
                provided for self-submission.
              </li>
              <li>
                <strong>Are online sessions available?</strong> Yes—all virtual
                sessions via Zoom.
              </li>
              <li>
                <strong>What is your cancellation policy?</strong> 24-hour
                notice required.
              </li>
            </ul>
          </div>
        </div>

        <div className="about-image">
          <img
            src={therapistPhoto}
            alt="Dr. Serena Blake"
            className="therapist-portrait"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
