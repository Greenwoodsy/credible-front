import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaPassport, FaIdCard } from "react-icons/fa";
import { SiUnlicense } from "react-icons/si";
import { IoIosWarning } from "react-icons/io";
import Notification from "../../components/Notification/Notification";
import "./UploadKyc.css";

// Constants
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_FORMATS = /jpeg|jpg|png|gif|webp|bmp|heic|pdf/;

// ✅ Cloudinary environment variables
const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
const UPLOAD_PRESET = process.env.REACT_APP_UPLOAD_PRESET;
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const UploadKyc = () => {
  const [frontDoc, setFrontDoc] = useState(null);
  const [backDoc, setBackDoc] = useState(null);
  const [uploading, setUploading] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const isVerified = user?.isVerified;
  const navigate = useNavigate();

  // ✅ Validate file type and size
  const validateFile = (file) => {
    if (!file) return "Please select a file.";
    if (file.size > MAX_FILE_SIZE) return "File size must be less than 10MB.";
    if (!ALLOWED_FORMATS.test(file.type.split("/")[1]))
      return "Invalid file format. Only JPEG, JPG, PNG, GIF, WEBP, BMP, HEIC, or PDF are allowed.";
    return null;
  };

  // ✅ Handle file selection
  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    const error = validateFile(file);
    if (error) {
      toast.error(error);
      setFile(null);
    } else {
      setFile(file);
    }
  };

  // ✅ Upload handler
  const handleFileUpload = async (e) => {
    e.preventDefault();

    if (!frontDoc || !backDoc) {
      toast.error("Please upload both front and back documents.");
      return;
    }

    try {
      setUploading(true);

      // Upload front document to Cloudinary
      const frontForm = new FormData();
      frontForm.append("file", frontDoc);
      frontForm.append("upload_preset", UPLOAD_PRESET);

      const frontRes = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
        method: "POST",
        body: frontForm,
      });
      const frontData = await frontRes.json();
      if (!frontData.secure_url) throw new Error("Front document upload failed.");

      // Upload back document to Cloudinary
      const backForm = new FormData();
      backForm.append("file", backDoc);
      backForm.append("upload_preset", UPLOAD_PRESET);

      const backRes = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
        method: "POST",
        body: backForm,
      });
      const backData = await backRes.json();
      if (!backData.secure_url) throw new Error("Back document upload failed.");

      // Send Cloudinary URLs to your backend
      const response = await axios.post(
        `${BACKEND_URL}api/users/uploadKycDocuments`,
        {
          frontDoc: frontData.secure_url,
          backDoc: backData.secure_url,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
          withCredentials: true,
        }
      );

      toast.success("KYC documents uploaded successfully!");
      console.log("Upload response:", response.data);

      // Redirect user after success
      setTimeout(() => {
        navigate("/my-account");
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-kyc-container">
      {isVerified === false && <Notification />}

      <h2>Upload KYC Documents</h2>
      <p>Complete your KYC with any of these documents</p>

      {/* KYC Document Selection Cards */}
      <div className="kyc-documents">
        <div className="kyc-card">
          <FaPassport />
          <p>Passport</p>
        </div>
        <div className="kyc-card">
          <FaIdCard />
          <p>National ID</p>
        </div>
        <div className="kyc-card">
          <SiUnlicense />
          <p>Driver’s License</p>
        </div>
      </div>

      {/* Warning Section */}
      <div className="warning-section">
        <span className="warning-header">
          <IoIosWarning className="warning-icon" />
          <h3 className="warning-title">Important Notice</h3>
        </span>
        <div className="warning-content">
          <p>Ensure that your uploaded files meet the following requirements:</p>
          <ul>
            <li>
              File format must be <b>JPEG, JPG, PNG, PDF</b>.
            </li>
            <li>
              File size must be <b>less than 10MB</b>.
            </li>
            <li>
              Upload both <b>front and back</b> of your document.
            </li>
            <li>Blurry or incomplete documents will be rejected.</li>
          </ul>
        </div>
      </div>

      {/* File Upload Form */}
      <form onSubmit={handleFileUpload} className="kyc-form">
        <label>Front Document:</label>
        <input
          type="file"
          accept="image/*,.pdf"
          onChange={(e) => handleFileChange(e, setFrontDoc)}
        />

        <label>Back Document:</label>
        <input
          type="file"
          accept="image/*,.pdf"
          onChange={(e) => handleFileChange(e, setBackDoc)}
        />

        <button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Submit KYC"}
        </button>
      </form>
    </div>
  );
};

export default UploadKyc;
