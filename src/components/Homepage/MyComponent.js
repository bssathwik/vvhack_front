import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
import '@fontsource/bebas-neue';
import '@fontsource/foldit';

const MyComponent = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleLogin = () => setIsLoginOpen(!isLoginOpen);
  const toggleRegister = () => setIsRegisterOpen(!isRegisterOpen);

  return (
    <div>
      <nav >
        <ul>
          <li><a className="a" href="/">Home</a></li>
          <li><a className="a" href="/videos">Videos</a></li>
          <li><a className="a" href="/booking">Coaching</a></li>
          <li><a className="a" href="/webinar">Courses</a></li>
          <li><a className="a" href="/exercises">exercise</a></li>
          <li><a className="a" href="/article">articel</a></li>
          <li><a className="a" href="/home">SignOut</a></li>
          {/* <li><a className="a" href="/signin" >Login</a></li>
          <li><a className="a" href="/signup" >Register</a></li> */}
          {/* <li><a className="login" href="#login" onClick={toggleLogin}>Login</a></li> */}
        </ul>
      </nav>

      <div className="container">
        <div className="home-card">
          <h2 className="foldit">Master Your Mind, Elevate Your Game</h2>
          <p>
            Unlock the power of psychology and mental training to push beyond your limits. 
            Whether you're an elite athlete or just starting your journey, our expert-driven 
            resources and tools are designed to help you achieve peak performance.
          </p>
        </div>

        {/* {isLoginOpen && (
          <div className="wrapper">
            <span className="icon-close" onClick={toggleLogin}><ion-icon name="close"></ion-icon></span>
            <div className="form-box">
              <h2>Login</h2>
              <form action="#">
                <div className="input-box">
                  <div className="label-align">
                    <span className="icon"><ion-icon name="mail"></ion-icon></span>
                    <label>Email</label>
                  </div>
                  <input className="input" type="email" required />
                </div>
                <div className="input-box">
                  <div className="label-align">
                    <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <label>Password</label>
                  </div>
                  <input className="input" type="password" required />
                </div>
                <div className="remember-forgot">
                  <label><input type="checkbox" />Remember me</label>
                  <a href="#">Forget password?</a>
                </div>
                <button type="submit" id="btn">Login</button>
                <div className="login-register">
                  <p>Don't have an account?<a href="#register" onClick={toggleRegister}>Register</a></p>
                </div>
              </form>
            </div>
          </div>
        )}

        {isRegisterOpen && (
          <div className="wrapper2">
            <span className="icon-close" onClick={toggleRegister}><ion-icon name="close"></ion-icon></span>
            <div className="form-box">
              <h2>Register</h2>
              <form action="#">
                <div className="input-box">
                  <div className="label-align">
                    <span className="icon"><ion-icon name="person-circle-outline"></ion-icon></span>
                    <label>Username</label>
                  </div>
                  <input className="input" type="text" required />
                </div>
                <div className="input-box">
                  <div className="label-align">
                    <span className="icon"><ion-icon name="mail"></ion-icon></span>
                    <label>Email</label>
                  </div>
                  <input className="input" type="email" required />
                </div>
                <div className="input-box">
                  <div className="label-align">
                    <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <label>Password</label>
                  </div>
                  <input className="input" type="password" required />
                </div>
                <button type="submit" id="btn">Register</button>
                <div className="login-register">
                  <p>Already have an account?<a href="#login" onClick={toggleLogin}>Login</a></p>
                </div>
              </form>
            </div>
          </div>
        )} */}
      </div>

      {/* <div className="featured-services">
        <h2>Our Core Services</h2>
        <div className="services">
          <div className="service">
            <video controls poster="thumbnail1.jpg">
              <source src="video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>Mental Training Programs</h3>
            <p>
              Unlock the power of your mind with our tailored mental training programs. 
              Designed for athletes at all levels, our programs focus on enhancing mental 
              fortitude, sharpening focus, and managing stress effectively.
            </p>
            <a className="ex-a" href="#mental-training"><button>Explore Our Mental Training Programs</button></a>
          </div>

          <div className="service">
            <video controls poster="thumbnail2.jpg">
              <source src="video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>Sports Psychology Coaching</h3>
            <p>
              Overcome mental barriers and achieve your full potential with our personalized sports psychology coaching. 
              Our expert coaches work closely with you to identify challenges, set clear goals, and develop strategies.
            </p>
            <Link to="/booking">
              <button>Book a Coaching Session</button>
            </Link>
          </div> */}

          {/* <div className="service">
            <video controls poster="thumbnail3.jpg">
              <source src="video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>Workshops & Webinars</h3>
            <p>
              Join our interactive workshops and webinars led by top experts in sports psychology and mental training. 
              These sessions provide valuable insights into the mental aspects of sports performance.
            </p>
            <a className="ex-a" href="#workshops"><button>View Upcoming Workshops & Webinars</button></a>
          </div>
        </div>
      </div> */}

     {/* <main>
        <section id="sports">
          <h2>Sports Articles</h2>
          <article>
            <h3>The Importance of Physical Fitness</h3>
            <p>
              Physical fitness is essential for a healthy lifestyle. It enhances mental health, boosts self-esteem, and reduces stress. 
              Engaging in regular physical activity can lead to improved overall well-being. Regular exercise can also help prevent chronic diseases and improve longevity.
            </p>
            <a href="#more" className="read-more">Read More</a>
          </article>
          <article>
            <h3>How Sports Improve Teamwork</h3>
            <p>
              Physical fitness is essential for a healthy lifestyle. It enhances mental health, boosts self-esteem, and reduces stress. 
              Engaging in regular physical activity can lead to improved overall well-being. Regular exercise can also help prevent chronic diseases and improve longevity.
            </p>
            <a href="#more" className="read-more">Read More</a>
          </article>
          <div className="more-articles" id="more-sports">
            <article>
              <h3>Top 5 Exercises for Athletes</h3>
              <p>
                Discover the best exercises to enhance athletic performance and overall fitness. From strength training exercises like squats and deadlifts to cardiovascular workouts like running and cycling, incorporating a mix of these can help athletes reach their peak performance.
              </p>
              <a href="#more" className="read-more">Read More</a>
            </article>
            <article>
              <h3>Nutrition Tips for Athletes</h3>
              <p>
                Proper nutrition is crucial for athletes to perform at their best. Learn about the importance of balanced meals, hydration, and recovery nutrition to fuel your body for optimal performance and faster recovery.
              </p>
              <a href="#more" className="read-more">Read More</a>
            </article>
          </div>
          <a href="#more-sports" className="show-more">Show More</a>
        </section>

        <section id="psychology">
          <h2>Sports Psychology Articles</h2>
          <article>
            <h3>Managing Anxiety in Sports</h3>
            <p>
              Anxiety can hinder an athlete's performance. Learn how to manage stress and anxiety through various techniques, 
              such as mindfulness, deep breathing exercises, and cognitive behavioral strategies, to maintain focus and perform under pressure.
            </p>
            <a href="#more" className="read-more">Read More</a>
          </article>
          <div className="more-articles" id="more-psychology">
            <article>
              <h3>Building Mental Toughness</h3>
              <p>
                Mental toughness is essential for athletes to handle pressure, setbacks, and competition. 
                Discover ways to develop mental toughness through goal-setting, positive reinforcement, and mental conditioning exercises.
              </p>
              <a href="#more" className="read-more">Read More</a>
            </article>
            <article>
              <h3>Sports Psychology: A Key to Success</h3>
              <p>
                Sports psychology can unlock an athlete's potential by addressing the mental aspects of sports performance. 
                From motivation and confidence to focus and recovery, understanding sports psychology can give athletes a competitive edge.
              </p>
              <a href="#more" className="read-more">Read More</a>
            </article>
          </div>
          <a href="#more-psychology" className="show-more">Show More</a>
        </section>
      </main> */}
    </div>
  );
};

export default MyComponent;
