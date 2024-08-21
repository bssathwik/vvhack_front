import React from 'react';
import './UpcomingEvents.css'; // Make sure to create this CSS file for styles

const UpcomingEvents = () => {
  return (
    <>
    <nav >
    <ul>
    <li><a className="a" href="/home">Home</a></li>
          <li><a className="a" href="/explore">Videos</a></li>
          <li><a className="a" href="/bookingsection">Coaching</a></li>
          <li><a className="a" href="/webinar">Courses</a></li>
          <li><a className="a" href="/articels">articles</a></li>
          <li><a className="a" href="/exercise">exercise</a></li>
          <li><a className="a" href="/signin" >Login</a></li>
          <li><a className="a" href="/signup" >Register</a></li>
      
      {/* <li><a className="login" href="#login" onClick={toggleLogin}>Login</a></li> */}
    </ul>
  </nav>
    <div className='events'>
      

      <section id="upcoming-events" className="events-section">
        <h2>Join Our Next Events</h2>
        <p>Explore our upcoming webinars and workshops designed to enhance your mental training and performance.</p>

        <div className="event-card">
          <h3>Webinar: Mastering Mindfulness</h3>
          <p>Date: August 20, 2024</p>
          <p>Time: 6:00 PM - 7:00 PM (UTC)</p>
          <p>Join us for a comprehensive webinar on mastering mindfulness techniques to improve focus and reduce stress.</p>
          <a href="#register-mastering-mindfulness" id="button1" className="register-button">Register Now</a>
        </div>

        <div className="event-card">
          <h3>Workshop: Visualization Techniques</h3>
          <p>Date: September 5, 2024</p>
          <p>Time: 10:00 AM - 1:00 PM (UTC)</p>
          <p>Learn effective visualization strategies to enhance your performance in this interactive workshop.</p>
          <a href="#register-visualization-techniques" id="button2" className="register-button">Register Now</a>
        </div>

        <div className="event-card">
          <h3>Webinar: Goal Setting for Success</h3>
          <p>Date: September 12, 2024</p>
          <p>Time: 7:00 PM - 8:00 PM (UTC)</p>
          <p>Discover the art of goal setting and how to create an actionable plan to achieve your objectives.</p>
          <a href="#register-goal-setting" id="button3" className="register-button">Register Now</a>
        </div>

        <div className="event-card">
          <h3>Workshop: Building Mental Resilience</h3>
          <p>Date: September 25, 2024</p>
          <p>Time: 9:00 AM - 12:00 PM (UTC)</p>
          <p>This workshop focuses on developing mental resilience and strategies to overcome challenges.</p>
          <a href="#register-building-resilience" id="button4" className="register-button">Register Now</a>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 [Your Organization Name]. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default UpcomingEvents;