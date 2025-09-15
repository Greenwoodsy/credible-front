import React, { useState, useEffect } from "react";
import { LiaUsersSolid } from "react-icons/lia";
import { IoStatsChart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaUserAltSlash } from "react-icons/fa";
import "./OurCustomers.css";

const OurCustomers = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [scamDetection, setScamDetection] = useState(0);
  const [hasCounted, setHasCounted] = useState(false); // 🆕

  useEffect(() => {
    const handleScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasCounted) {
          countUp();
          setHasCounted(true); // prevent future triggers
          observer.unobserve(entry.target); // optional: stop observing after first trigger
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
    const section = document.querySelector(".customersSection");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [hasCounted]);

  const countUp = () => {
    let duration = 3000;
    let step = 50;

    const targetUsers = 5000000;
    const targetInvestment = 3000000;
    const targetActiveUsers = 1000000;
    const targetScamDetection = 0;

    const formatNumber = (num) => num.toLocaleString();

    const increment = (target, setter) => {
      let current = 0;
      const interval = setInterval(() => {
        current += Math.floor(target / (duration / step));
        if (current >= target) {
          clearInterval(interval);
          setter(formatNumber(target));
        } else {
          setter(formatNumber(current));
        }
      }, step);
    };

    increment(targetUsers, setTotalUsers);
    increment(targetInvestment, setTotalInvestment);
    increment(targetActiveUsers, setActiveUsers);
    increment(targetScamDetection, setScamDetection);
  };

  return (
    <div className="customersSection">
      <div className="customerCard" data-aos="fade-up" data-aos-duration="3000">
        <p className="icon"><LiaUsersSolid /></p>
        <p className="count">{totalUsers}+</p>
        <p className="label">Total Users</p>
      </div>
      <div className="customerCard" data-aos="fade-up" data-aos-duration="3000">
        <p className="icon"><IoStatsChart /></p>
        <p className="count">{totalInvestment}+</p>
        <p className="label">Total Investment</p>
      </div>
      <div className="customerCard" data-aos="fade-up" data-aos-duration="3000">
        <p className="icon"><FaUser /></p>
        <p className="count">{activeUsers}+</p>
        <p className="label">Active Users</p>
      </div>
      <div className="customerCard" data-aos="fade-up" data-aos-duration="3000">
        <p className="icon"><FaUserAltSlash /></p>
        <p className="count">{scamDetection}</p>
        <p className="label">Scam Detection</p>
      </div>
    </div>
  );
};

export default OurCustomers;
