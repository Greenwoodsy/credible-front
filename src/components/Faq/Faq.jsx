import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-wrapper">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Your guide to smarter investing.</p>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-card">
              <div className="faq-header" onClick={() => toggleIndex(index)}>
                <h3>{item.question}</h3>
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
              <div className={`faq-body ${activeIndex === index ? "active" : ""}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "How do I use two wallets on the platform?",
    answer:
      "You can assign one wallet for investing and another for withdrawals. This separation helps manage your assets more efficiently.",
  },
  {
    question: "What are the benefits of investing with this platform?",
    answer:
      "Our platform offers expert-curated plans, 24/7 support, and secure, transparent fund handling for all investors.",
  },
  {
    question: "Is my investment secure?",
    answer:
      "Yes. We employ encryption, 2FA, and frequent audits to keep your funds and data safe.",
  },
  {
    question: "Can I withdraw my earnings anytime?",
    answer:
      "Absolutely. Withdrawals are processed within 1–2 business days directly from your dashboard.",
  },
  {
    question: "How can I reach customer support?",
    answer:
      "You can reach us via live chat, email, or phone support—available 24/7.",
  },
];

export default Faq;
