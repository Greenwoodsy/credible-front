import React, { useState } from 'react';
import axios from 'axios';
import './CompseEmail.css';

const ComposeEmail = () => {
  const [formData, setFormData] = useState({
    send_to: '',
    reply_to: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/sendComposedEmail`,
        formData
      );
      setSuccess('Email sent successfully!');
      setFormData({
        send_to: '',
        reply_to: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      setError('Failed to send email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="compose-container">
      <h2>Compose Email</h2>
      <form onSubmit={handleSubmit} className="compose-form">
        <input
          type="email"
          name="send_to"
          placeholder="Recipient Email"
          value={formData.send_to}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="reply_to"
          placeholder="Reply-To Email"
          value={formData.reply_to}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Message Content"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Email'}
        </button>

        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default ComposeEmail;
