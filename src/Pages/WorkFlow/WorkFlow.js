import React from "react";
import "./WorkFlow.css";
import { FaUserAlt, FaCoins, FaUserFriends } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillPatchCheckFill, BsBank2 } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import Footer from "../../components/Footer/Footer";

const steps = [
  {
    icon: <FaUserAlt />,
    title: "Create Account",
    desc: "Sign up to unlock tools & insights.",
  },
  {
    icon: <MdMarkEmailRead />,
    title: "Confirm Email",
    desc: "Activate account via email verification.",
  },
  {
    icon: <BsFillPatchCheckFill />,
    title: "KYC Approval",
    desc: "Verify identity to meet compliance.",
  },
  {
    icon: <BsBank2 />,
    title: "Fund Wallet",
    desc: "Deposit via bank, card, or crypto.",
  },
  {
    icon: <FaCoins />,
    title: "Pick a Plan",
    desc: "Choose the investment plan that fits.",
  },
  {
    icon: <GiReceiveMoney />,
    title: "Send & Receive",
    desc: "Seamlessly transfer and manage funds.",
  },
  {
    icon: <FaUserFriends />,
    title: "Earn Referrals",
    desc: "Invite friends & earn rewards.",
  },
];

const WorkFlow = () => {
  return (
    <>
      <section className="workflow">
        <h1 className="workflow-title">Get Started in Minutes</h1>
        <p className="workflow-subtitle">
          Follow this simple guided process to start investing today.
        </p>
        <div className="workflow-web">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="workflow-step">
                <span className="workflow-step-number">Step {index + 1}</span>
                <div className="workflow-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {index < steps.length - 1 && <div className="workflow-line" />}
            </React.Fragment>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WorkFlow;
