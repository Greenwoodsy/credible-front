import React, { useState } from "react";
import "./Contact.css";
import Footer from "../../components/Footer/Footer";
import emailjs from "emailjs-com";

const ReachOut = () => {
  const [formDetails, setFormDetails] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification("");

    emailjs
      .send(
        "service_1y1iuo6",
        "template_nncyj4n",
        formDetails,
        "bIZ7yqJKGak6sSjLu"
      )
      .then(
        () => {
          setNotification("✅ Message sent successfully. We'll reach out shortly.");
          setFormDetails({ from_name: "", from_email: "", message: "" });
        },
        () => {
          setNotification("❌ Failed to send. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setNotification(""), 5000);
      });
  };

  return (
    <>
      <div className="reachOutPage">
        <h1 className="reachOutTitle">Reach Out to Us</h1>
        <div className="reachOutFormWrapper">
          <form className="reachOutForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={formDetails.from_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={formDetails.from_email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Type your message here..."
              value={formDetails.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {notification && <div className="notification-pop">{notification}</div>}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReachOut;
