import React, { useRef } from "react";
import "./style.css";
function NavBar() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () =>
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToServices = () =>
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToFAQ = () =>
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  const navBarData = [
    { text: "Home", event: scrollToHome },
    { text: "About", event: scrollToAbout },
    { text: "Services", event: scrollToServices },
    { text: "FAQ", event: scrollToFAQ },
    { text: "Contact", event: scrollToContact },
  ];
  return (
    <div>
      <div className="desktop-links">
        {navBarData.map(({ text, event }) => (
          <button key={text} onClick={event} className="hover:bg-amber-100">
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
