import React, { useState } from "react";
import "./style.css";

function FAQ() {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What are your fees?",
      answer: "My fees are $60 for individual, $90 for couple",
    },
    {
      id: 2,
      question: "Do you take insurance?",
      answer:
        "No, I do not take insurance directly. However, I can provide you with a billing sheet with the necessary facts and codes so you can file for out-of-network benefits with your insurance company.",
    },
    {
      id: 3,
      question: "Do you provide online counseling?",
      answer: "No, I do not provide online counseling.",
    },
    {
      id: 4,
      question: "What are your office hours?",
      answer:
        "My office hours are Monday through Thursday, 11:00 AM to 6:30 PM.",
    },
    {
      id: 5,
      question: "What geographic areas do you serve?",
      answer:
        "My practice is located in Richmond, VA, and I serve clients in Central Virginia.",
    },
    {
      id: 6,
      question: "What services do you offer?",
      answer:
        "I offer Individual Therapy and Couples Therapy. My practice focuses on areas such as Christian counseling, spiritual growth, deepening relationships, healing past wounds, and discovering your life's purpose.",
    },
  ];

  const toggleQuestion = (id) => {
    setOpenQuestionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map(({ id, question, answer }) => (
        <div
          key={id}
          className={`faq-item ${openQuestionId === id ? "open" : ""}`}
        >
          <span onClick={() => toggleQuestion(id)}>{question}</span>
          <div className="faq-answer">{answer}</div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
