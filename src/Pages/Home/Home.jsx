import React, { useEffect, useState } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import OurCustomers from "../../components/OurCustomers/OurCustomers";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import SectionTwo from "../../components/SectionTwo/SectionTwo";
import SectionThree from "../../components/SectionThree/SectionThree";
import Advert from "../../Payment/Advert/Advert";
import HomePageAdvert from "../../components/HomePageAdvert/HomePageAdvert";
import Teams from "../../components/Teams/Teams";
import Forum from "../../components/Forum/Forum";
import Why from "../../components/Why/Why";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  const words = [
    "Achieve Financial Growth Through Credible Investments.",
    "Empower Your Financial Future with Trusted Investments.",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typeSpeed = isDeleting ? 50 : 120;

    const timeout = setTimeout(() => {
      setDisplayedText((prevText) => {
        if (!isDeleting) {
          // Typing
          const nextText = currentWord.substring(0, prevText.length + 1);
          if (nextText === currentWord) {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 1500);
          }
          return nextText;
        } else {
          // Deleting
          const nextText = currentWord.substring(0, prevText.length - 1);
          if (nextText === "") {
            // Switch to next word
            setIsDeleting(false);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
          return nextText;
        }
      });
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, words]);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = process.env.REACT_APP_JIVOCHAT_URL;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* <HomePageAdvert /> */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div
            className="text-content"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1>
              <span
                style={{
                  color: "var(--hero-text-one-span)",
                  fontWeight: "bold",
                }}
              >
                {displayedText}
                <span className="cursor">|</span>
              </span>
            </h1>
            <p>
              Create a secure and prosperous financial future through smart
              investments. Whether you're a beginner or seasoned investor, we
              provide the resources, strategies, and tools you need to grow your
              wealth with confidence and success.
            </p>
            <NavLink to="/my-account" className="dashboard-link">
              Dashboard
            </NavLink>
          </div>
          <div className="image-content"></div>
        </div>
      </div>
      <SectionTwo />
      <Teams />
      <Why />
      <OurCustomers />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
