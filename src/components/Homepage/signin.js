import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { api } from "../api";

// const api = "your_api_endpoint_here"; // Replace with your actual API endpoint

const styles = {
  container: {
    backgroundImage: 'url("/bg_home.jpg")', // Updated to match the path where the image is served from the public directory
    backgroundSize: 'cover', // Ensures the image covers the entire container
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents tiling of the image
    height: '100vh', // Adjust the height as needed
    width: '100%', // Adjust the width as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: "400px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    transition: "transform 0.3s ease-in-out",
  },
  heading: {
    fontSize: "24px",
    textAlign: "center",
    color: "#38b2ac",
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: "16px",
    textAlign: "center",
    color: "#718096",
  },
  formGroup: {
    marginBottom: "16px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "4px",
    border: "1px solid #e2e8f0",
    boxSizing: "border-box",
  },
  helperText: {
    display: "block",
    marginTop: "4px",
    color: "#718096",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#38b2ac",
    color: "#ffffff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  buttonHover: {
    backgroundColor: "#2f855a", // Darker shade for hover
  },
  link: {
    textAlign: "center",
    color: "#718096",
    cursor: "pointer",
    marginTop: "8px",
    textDecoration: "underline",
  },
};

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const Signin = async () => {
    // try {
    //   const res = await axios.post(api + "/signin", { email, password });
    //   if (res.data.message) {
    //     console.log(res?.data?.values);
    //     alert(res.data.message);
    //     navigate("/"); // Redirect to /home1 on successful sign-in
    //   } else {
    //     alert(res.data.error);
    //     navigate("/signup"); // Redirect to /signup on error
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
    {
      await axios.post(api + "/signin",{email,password})
      .then((res)=>{console.log(res)
          if(res.data.status==="fail"){
              alert(res.data.message)
              console.log();
              
              // window.location.href="/signup"
              
          } else {
              alert(res.data.message)
              window.location.href="/"
          }
      })
      .catch((e)=>console.log(e))
  }

  };

  const handleForgotPassword = () => {
    navigate('/forgotpass'); // Redirect to forgot password page
  };

  const handleSignUp = () => {
    navigate('/signup'); // Redirect to signup page
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Welcome Back</h2>
        <p style={styles.subHeading}>Sign in to your account</p>

        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email address</label>
          <input
            id="email"
            type="email"
            style={styles.input}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <small style={styles.helperText}>Enter email</small>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            id="password"
            type="password"
            style={styles.input}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <small style={styles.helperText}>Enter your password</small>
        </div>

        <button 
          style={styles.button} 
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
          onClick={Signin}
        >
          Sign In
        </button>

        <p style={styles.link} onClick={handleForgotPassword}>Forgot password?</p>
        <p style={styles.link} onClick={handleSignUp}>Don't have an account? Sign up</p>
      </div>
    </div>
  );
};

export default SignIn;
