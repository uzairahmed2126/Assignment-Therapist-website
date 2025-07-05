import React, { useState } from "react";
import "./style.css";
import therapist1 from "@assets/therapist1.avif";
import therapist2 from "@assets/therapist2.avif";
import therapist3 from "@assets/therapist3.avif";
import therapist4 from "@assets/therapist4.avif";
import therapist5 from "@assets/therapist5.avif";
import therapist6 from "@assets/therapist6.avif";
import therapist7 from "@assets/therapist7.avif";
import therapist8 from "@assets/therapist8.avif";
import therapist9 from "@assets/therapist9.avif";

const TherapistImages = () => {
  //   const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: therapist1,
      alt: "Dr. Jennifer Hahm in her office",
      caption: "Comfortable therapy environment",
    },
    {
      src: therapist2,
      alt: "Dr. Hahm during a consultation",
      caption: "Personalized care approach",
    },
    {
      src: therapist3,
      alt: "Therapy session in progress",
      caption: "Professional counseling space",
    },
    {
      src: therapist4,
      alt: "Dr. Hahm reviewing notes",
      caption: "Dedicated patient attention",
    },
    {
      src: therapist5,
      alt: "Dr. Hahm reviewing notes",
      caption: "Dedicated patient attention",
    },
    {
      src: therapist6,
      alt: "Dr. Hahm reviewing notes",
      caption: "Dedicated patient attention",
    },
    {
      src: therapist7,
      alt: "Dr. Hahm reviewing notes",
      caption: "Dedicated patient attention",
    },
    {
      src: therapist8,
      alt: "Dr. Hahm reviewing notes",
      caption: "Dedicated patient attention",
    },
    {
      src: therapist9,
      alt: "Dr. Hahm reviewing notes",
      caption: "Dedicated patient attention",
    },
  ];

  return (
    <section className={`therapist-gallery`}>
      <h2 className="gallery-heading">Therapist Gallery</h2>
      <div className="gallery-grid">
        {images.map(({ src, alt, caption }) => (
          <div className={`project`} key={src}>
            <img src={src} alt={alt} />
            <h3>{caption}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TherapistImages;
