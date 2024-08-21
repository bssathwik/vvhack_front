import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ForgotPassword.css'; // Import the CSS file for styling

const api = "your_api_endpoint_here"; // Replace with your actual API endpoint

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handlePasswordReset = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(api + "/resetpassword", { email, newPassword, confirmPassword });
      alert(response.data.message);
      
      navigate('/signin');
    } catch (error) {
      console.error(error);
      alert("There was an error processing your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2 className="forgot-password-heading">Reset Password</h2>
        <p className="forgot-password-subheading">
          Enter your new password below.
        </p>
        <div className="forgot-password-form">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="new-password">New Password</label>
          <input
            id="new-password"
            type="password"
            placeholder="Enter your new password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            placeholder="Confirm your new password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            onClick={handlePasswordReset}
            className="forgot-password-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Reset Password"}
          </button>
        </div>
      </div>
    </div>
  );
};
