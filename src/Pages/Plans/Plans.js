import React from "react";
import { NavLink } from "react-router-dom";
import "./Plans.css";
import Footer from "../../components/Footer/Footer";

const plansData = [
  {
    title: "Beginner Plan",
    percent: "10",
    price: "$50 - $200",
    duration: "1-Day Duration",
    description:
      "Ideal for beginners looking to test the waters with a low-risk short-term investment.",
    benefits: [
      "Low-risk entry point",
      "Quick 24-hour ROI",
      "No hidden fees",
      "24/7 customer support",
    ],
  },
  {
    title: "Essential Plan",
    percent: "15",
    price: "$300 - $500",
    duration: "1-Day Duration",
    description:
      "Balanced returns with moderate risk, perfect for cautious but ambitious investors.",
    benefits: [
      "Higher daily returns",
      "Instant withdrawal after maturity",
      "Dedicated investment manager",
      "Access to monthly reports",
    ],
  },
  {
    title: "Advanced Plan",
    percent: "18",
    price: "$600 - $1,000",
    duration: "1-Day Duration",
    description:
      "Tailored for experienced investors seeking premium results and exclusivity.",
    benefits: [
      "Priority investment slots",
      "Faster transaction processing",
      "Early access to new plans",
      "Custom investment guidance",
    ],
  },
  {
    title: "Premier Plan",
    percent: "23",
    price: "$1,500 - $5,000",
    duration: "1-Day Duration",
    description:
      "High-value, high-reward plan for elite investors wanting top-tier service.",
    benefits: [
      "Maximum daily ROI",
      "Premium support line",
      "Personal financial advisor",
      "Exclusive plan previews",
    ],
  },
];

const Plans = () => {
  return (
    <>
      <div className="plans-section">
        <h1 className="plans-title">Smart Investment Plans</h1>
        <p className="plans-subtitle">
          Pick a strategy that matches your goals and begin your wealth-building
          journey.
        </p>

        <div className="plans-list">
          {plansData.map((plan, index) => (
            <div className="plan-item" key={index}>
              <div className="plan-top">
                <span className="percent-text">{plan.percent}%</span>
                <div className="wave-divider" />
              </div>
              <div className="plan-info">
                <p className="plan-duration">{plan.duration}</p>
                <p className="plan-range">{plan.price}</p>
                <p className="plan-description">{plan.description}</p>

                {/* New Benefits List */}
                <ul className="plan-benefits">
                  {plan.benefits?.map((benefit, i) => (
                    <p key={i} className="benefit-item">
                      {benefit}
                    </p>
                  ))}
                </ul>

                <NavLink to="/start-invest" className="plan-cta">
                  {plan.title}
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Plans;
