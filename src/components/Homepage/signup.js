import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css'; // Import the CSS file for styling
import Verify from './verification';
import { api } from '../api';
// import Verify from '../verification';

// const api = "your_api_endpoint_here"; // Replace with your actual API endpoint

export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");

  const signup = async () => {
    // try {
    //   const response = await axios.post(api + "/signup", { email, name, mobile, password });
    //   if (response.data.message) {
    //     console.log(response?.data?.values);
    //     alert(response.data.message);
    //     navigate('/home1'); // Redirect to home page on successful signup
    //   } else {
    //     alert(response.data.error);
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
    {
      await axios.post(api + "/signup",{email,password,mobile,name,title,context})
      .then((res)=>{
          console.log(res.data)
          if(res.data){
              console.log(res?.data?.values)
              alert(" login successful")
              window.location.href="/"
          } else {
              alert("user not found")
              // window.location.href="/signup"
          }
      })
      .catch((e)=>console.log(e))
  }
  }; 


  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-heading">Create Your Account <br/> <i>(If you want to become admin )</i> </h2>
        <div className="signup-form">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          required/>
          <label htmlFor="mobile">Mobile</label>
          <input
            id="mobile"
            type="tel"
            placeholder="Enter your mobile number"
            onChange={(e) => setMobile(e.target.value)}
            required/>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required/>
          <Verify/>
          <button onClick={signup} className="signup-button">Sign Up</button>
        </div>
        <p className="signin-link">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </div>
    </div>
  );
};
