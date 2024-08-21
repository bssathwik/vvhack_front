import React, { useState } from 'react';
import './BookingSection.css'; // Import any specific CSS for BookingSection

const Booking = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    return (
        <>
        <nav >
        <ul>
        <li><a className="a" href="/">Home</a></li>
          <li><a className="a" href="/videos">Videos</a></li>
          <li><a className="a" href="/booking">Coaching</a></li>
          <li><a className="a" href="/webinar">Courses</a></li>
          <li><a className="a" href="/exercises">exercise</a></li>
          <li><a className="a" href="/article">articel</a></li>
          <li><a className="a" href="/home">SignOut</a></li>
          {/* <li><a className="login" href="#login" onClick={toggleLogin}>Login</a></li> */}
        </ul>
      </nav>
        <section id="book-session" className="booking-section">
            <h2>Book a Coaching Session</h2>
            <p>Take the first step towards unlocking your mental potential. Schedule a personalized coaching session with one of our expert coaches today!</p>
            <div className="booking-options">
                {["Individual Coaching", "Group Coaching", "Workshops & Seminars"].map((option, index) => (
                    <div className="option" key={index}>
                        <h3>{option}</h3>
                        <p>Get personalized support tailored to your unique needs. Ideal for athletes looking for one-on-one guidance.</p>
                        <button className="book-button" onClick={() => setIsFormVisible(true)}>Book Now</button>
                    </div>
                ))}
            </div>
            {isFormVisible && <BookingForm closeForm={() => setIsFormVisible(false)} />}
        </section>
</>
    );
};

const BookingForm = ({ closeForm }) => {
    return (
        <div className="booking-form">
            <h3>Coaching Session Booking Form</h3>
            <form action="#" method="post">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required />
                <label htmlFor="session-type">Session Type:</label>
                <select id="session-type" name="session-type" required>
                    <option value="" disabled selected>Select a session type</option>
                    <option value="individual">Individual Coaching</option>
                    <option value="group">Group Coaching</option>
                    <option value="workshop">Workshop/Seminar</option>
                </select>
                <label htmlFor="date">Preferred Date:</label>
                <input type="date" id="date" name="date" required />
                <label htmlFor="message">Additional Information:</label>
                <textarea id="message" name="message" rows="4"></textarea>
                <button type="submit" className="submit-button">Submit Booking</button>
            </form>
            <button className="close-button" onClick={closeForm}>Close</button>
        </div>
    );
};

export default Booking;
