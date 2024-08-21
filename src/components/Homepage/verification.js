// // App.js
// import React from 'react';
// // import './Style.css'; // Import the CSS file for styles
// import BookingSection from './components/BookingSection/BookingSection';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import MyComponent from './components/Homepage.css/MyComponent';

// import SignOut from './components/Homepage.css/signout';
// import { ForgotPassword } from './components/Homepage.css/forgotpass';
// import { SignUp } from './components/Homepage.css/signup';
// import Signin from './components/Homepage.css/signin';
// import ExplorePrograms from './components/ExplorePrograms/ExplorePrograms';
// import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
// import MindExercises from './components/MindExercises/MindExercises';
// import VerificationForm from './components/Homepage.css/VerificationForm';
// function App() {
//     return (
//       <>
//       <div>
//         <Router>
//           <Routes>
//           <Route path="/signin" element={<Signin />} />
//           <Route path="/mind-exercises" component={MindExercises} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/" element={<MyComponent />} />
//           <Route path="/bookingsection" element={<BookingSection />} />
//           <Route path="/explore" element={<ExplorePrograms />} />
//           <Route path="/signout" element={<SignOut/>}/>
//           <Route path="/forgotpass" element={<ForgotPassword/>} />
//           <Route path="/webinar"element={<UpcomingEvents/>}/>
//           <Route path="/verify"element={<VerificationForm />}/>
//           {/* <Route path="/register"element={<LoginForm/>}/> */}
          
  
  
//   </Routes>
//     </Router>
      
      
//       </div>
      
  
      
//       </>
//     );
//   }
//   export default App;
import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';
import { api } from '../api';
const Verify = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');
    const [isCodeSent, setIsCodeSent] = useState(false);

    const handleSendCode = async () => {
        try {
            const response = await axios.post(api +"/send-verification", { email });
            setMessage(response.data.message);
            setIsCodeSent(true);
        } catch (error) {
            setMessage('Failed to send code');
        }
    };

    const handleVerifyCode = async () => {
        try {
            const response = await axios.post(api+"/verify-code", { email, code });
            setMessage(response.data.message);
            console.log(response.data.message);
        } catch (error) {
            setMessage('Verification failed');
            // console.log(response);
        }
    };

    return (
        <div>
            <h1>Email Verification</h1>
            <div>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                <button onClick={handleSendCode}>Send Verification Code</button>
            </div>
            {isCodeSent && (
                <div>
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Enter verification code"
                    />
                    <button onClick={handleVerifyCode}>Verify Code</button>
                </div>
            )}
            <p>{message}</p>
        </div>
    );
};

export default Verify;