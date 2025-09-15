import React from "react";
import LicenseImage from "../../Assets/credibleLicence.jpg";
import "./License.css";
import Footer from "../../components/Footer/Footer";

const License = () => {
  return (
    <>
      <section className="license-wrapper">
        <div className="license-card">
          <h2 className="license-heading">Legal Credentials & Compliance</h2>
          <p className="license-description">
            Our company operates under strict regulatory standards to ensure transparency and trust.
          </p>

          <div className="license-details">
            <p><strong>Registered Name:</strong> Credible Investment Experts Ltd.</p>
            <p><strong>Business Reg. No:</strong> CIE-2023-INV-001</p>
            <p><strong>Tax Identification:</strong> TIN-9283748392</p>
            <p><strong>Incorporated On:</strong> February 14, 2001</p>
            <p><strong>Regulatory Body:</strong> Corporate Affairs Commission (CAC)</p>
          </div>

          <img src={LicenseImage} alt="Official License Document" className="license-photo" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default License;
