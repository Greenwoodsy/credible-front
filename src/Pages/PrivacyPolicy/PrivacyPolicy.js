import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./PrivacyPolicy.css";

const ModernPrivacy = () => {
  return (
    <>
      <section className="privacy-wrapper">
        <header className="privacy-hero">
          <h1>Our Commitment to Your Privacy</h1>
          <p>
            Welcome to{" "}
            <Link to="/" className="brand-link">
              Credible Investment Experts
            </Link>
            , your privacy is a priority at{" "}
            <a
              href="https://hyiprio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              hyiprio.com
            </a>
            .
          </p>
        </header>

        <article className="privacy-content">
          <section>
            <p>
              For any questions, reach out via email at{" "}
              <a href="mailto:invest@credibleinvestmentexperts.com">invest@credibleinvestmentexperts.com</a>.
            </p>
            <p>
              This Privacy Policy covers our online interactions only and does
              not apply to offline or third-party channels.
            </p>
          </section>

          <section>
            <h2>Consent</h2>
            <p>
              By engaging with our site, you consent to our policy and terms.
            </p>
          </section>

          <section>
            <h2>What We Collect</h2>
            <p>Depending on your activity, we may gather details like:</p>
            <ul>
              <li>Full name, email address, and phone number</li>
              <li>Company name and contact address</li>
              <li>Messages or attachments sent via our contact forms</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Info</h2>
            <ul>
              <li>Website maintenance and feature delivery</li>
              <li>User experience personalization</li>
              <li>Data analytics and trends</li>
              <li>Customer communication and updates</li>
              <li>Email outreach and fraud prevention</li>
            </ul>
          </section>

          <section>
            <h2>Log Data</h2>
            <p>
              Like many websites, we track IP addresses, browser types,
              timestamps, and referral paths for internal analytics. This data
              isn’t personally identifiable.
            </p>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>
              We use cookies to remember preferences and tailor content based on
              user behavior. You can adjust cookie settings via your browser.
            </p>
          </section>

          <section>
            <h2>Advertising Partners</h2>
            <p>
              Ads displayed on our site may come from third-party vendors using
              cookies, JavaScript, or Web Beacons to track performance. These
              are not controlled by us.
            </p>
          </section>

          <section>
            <h2>Third-Party Sites</h2>
            <p>
              Our policy does not extend to external platforms. Please review
              their policies separately when visiting other sites.
            </p>
          </section>

          <section>
            <h2>Your Rights (CCPA & GDPR)</h2>
            <p>
              Under CCPA and GDPR, users may request access to, deletion of, or
              corrections to their data. To make a request, please contact us
              directly.
            </p>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>
              We do not knowingly collect information from individuals under 13
              years old. If such data is discovered, it will be removed promptly
              upon notification.
            </p>
          </section>
        </article>
      </section>

      <Footer />
    </>
  );
};

export default ModernPrivacy;
