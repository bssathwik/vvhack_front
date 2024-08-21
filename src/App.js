// App.js
import React from 'react';
// import './Style.css'; // Import the CSS file for styles
import BookingSection from './components/BookingSection/BookingSection';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MyComponent from './components/Homepage/MyComponent';

import SignOut from './components/Homepage/signout';
import { ForgotPassword } from './components/Homepage/forgotpass';
import { SignUp } from './components/Homepage/signup';
import Signin from './components/Homepage/signin';
import ExplorePrograms from './components/ExplorePrograms/ExplorePrograms';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
import Home from './components/Homepage/Home';
import ArticleList from './components/articles/articles';
import VerificationForm from './components/Homepage/verification';
import Verify from './components/Homepage/verification';
import StressReliefExercises from './components/exercise';
import Videos from './components/ExplorePrograms/videos';
import Article from './components/articles/articel';
import Exercises from './components/exer';
import Events from './components/UpcomingEvents/events';
import { Rigister } from './components/Homepage/register';
// import ArticleList from './components/articles/articles';
// import ArticleList from './components/articles/Articles';
// import Articles from './components/articles/Articles';
function App() {
    return (
      <>
      <div>
        <Router>
          <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<MyComponent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/article" element={<ArticleList/>} />
          <Route path="/videos"element={<Videos/>}/>
          {/* <Route path="/articel" element={<Articles/>} /> */}
          <Route path='/articels'element={<Article/>}/>
          <Route path="/bookingsection" element={<BookingSection />} />
          <Route path="/booking" element={<BookingSection />} />
          <Route path="/explore" element={<ExplorePrograms />} />
          {/* <Route path="/videos" element={<ExplorePrograms />} /> */}
          <Route path="/signout" element={<SignOut/>}/>
          <Route path="/forgotpass" element={<ForgotPassword/>} />
          <Route path="/webinar"element={<UpcomingEvents/>}/>
          <Route path="/register" element={<Rigister/>}/>
          <Route path="/webinars"element={<Events/>}/>
          <Route path="/verfication"element={<Verify/>}/>
          {/* <Route path="/register"element={<LoginForm/>}/> */}
          <Route path='/exercise'element={<StressReliefExercises/>}/>
          <Route path='/exercises'element={<Exercises/>}/>
  
  
  </Routes>
    </Router>
      
      
      </div>
      
  
      
      </>
    );
  }
  export default App;