import React, { useState } from 'react';
import './ExplorePrograms.css';

const programs = [
  {
    title: 'Program 1: Mindfulness for Athletes',
    description: 'Our Mindfulness for Athletes program teaches techniques to improve focus, reduce anxiety, and promote overall mental well-being through mindful practices.',
    videoUrl: 'https://www.youtube.com/embed/Z2dK_m2LfrY',
  },
  {
    title: 'Program 2: Visualization Techniques',
    description: 'This program guides you in using visualization strategies to enhance your performance and achieve your goals, helping you mentally rehearse your success.',
    videoUrl: 'https://www.youtube.com/embed/r5_9RuUOtSI',
  },
  {
    title: 'Program 3: Goal Setting Mastery',
    description: 'Master the art of setting and achieving personal and professional goals with proven strategies that foster motivation and accountability.',
    videoUrl: 'https://www.youtube.com/embed/t1F7EEGPQwo',
  },
  {
    title: 'Program 4: Concentration and Focus Training',
    description: 'Enhance your concentration and focus with techniques that help you stay in the zone during training and competition.',
    videoUrl: 'https://www.youtube.com/embed/fH7N9YRxMYc',
  },
  {
    title: 'Program 5: Positive Self-Talk Strategies',
    description: 'Develop positive self-talk strategies to boost confidence and maintain a constructive mindset.',
    videoUrl: 'https://www.youtube.com/embed/71_NkXgAK1g',
  },
  {
    title: 'Program 6: Stress Management Techniques',
    description: 'Learn effective stress management techniques to maintain composure and improve performance under pressure.',
    videoUrl: 'https://www.youtube.com/embed/vpO_3ZegQL4',
  },
  {
    title: 'Program 7: Building Mental Resilience',
    description: 'This program focuses on developing mental resilience, helping you bounce back from setbacks and stay motivated in the face of challenges.',
    videoUrl: 'https://www.youtube.com/embed/VNCL1glwyOI',
  },
  {
    title: 'Program 8: Emotion Regulation Techniques',
    description: 'Learn how to regulate your emotions effectively to enhance performance and manage competition-related stress.',
    videoUrl: 'https://www.youtube.com/embed/SCbifUfr-js',
  },
  {
    title: 'Program 9: Mind-Body Connection',
    description: 'Explore the powerful connection between your mind and body to optimize performance through mental training and physical preparation.',
    videoUrl: 'https://www.youtube.com/embed/ILDy6kYU-xQ',
  },
  {
    title: 'Program 10: Recovery and Reflection Techniques',
    description: 'Discover recovery strategies that include reflection and self-assessment to improve future performance and maintain mental health.',
    videoUrl: 'https://www.youtube.com/embed/uzDsT-25w14',
  },
];

const testimonials = [
  { quote: "The mindfulness program changed my approach to competition. I feel more focused and calm than ever!", author: "Alex, Professional Athlete" },
  { quote: "The visualization techniques helped me achieve my personal best. I can't recommend this enough!", author: "Jamie, Fitness Enthusiast" },
  { quote: "I struggled with stress before competitions, but the stress management techniques I learned have transformed my performance. I feel so much more in control now!", author: "Sam, Amateur Cyclist" },
  { quote: "The Goal Setting Mastery program was a game changer for me. I finally have a clear roadmap for my training and personal goals. The support from the team was invaluable!", author: "Taylor, College Track Athlete" },
  { quote: "After participating in the Building Mental Resilience program, I've learned how to bounce back from setbacks much faster. It has made a huge difference in my confidence!", author: "Jordan, Professional Swimmer" },
  { quote: "The positive self-talk strategies have completely shifted my mindset. I no longer doubt myself and approach competitions with confidence!", author: "Morgan, High School Soccer Player" },
  { quote: "The Emotion Regulation Techniques program helped me manage my anxiety better during competitions. I can't thank the team enough for their support!", author: "Casey, Competitive Dancer" },
];

const Videos = () => {
  const [uploads, setUploads] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newUpload = { name: file.name, url: URL.createObjectURL(file) };
      setUploads([...uploads, newUpload]);
    }
  };

  const handleDeleteUpload = (fileUrl) => {
    setUploads(uploads.filter(upload => upload.url !== fileUrl));
  };
  return (
    <>
    <div className='body'>

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
    <div className='pro'>
      

    <section className='hero' id="upload">
            <h2>Upload Your Content</h2>
            <input type="file" onChange={handleFileUpload} />
            <div className="uploads-list">
              {uploads.map((upload, index) => (
                <div className="upload-item" key={index}>
                  <p>{upload.name}</p>
                  <button onClick={() => handleDeleteUpload(upload.url)}>Delete</button>
                </div>
              ))}
            </div>
          </section>

      <section id="programs">
        <h2>Our Programs</h2>

        {programs.map((program, index) => (
          <div className="program" key={index}>
            <iframe
              width="560"
              height="315"
              src={program.videoUrl}
              title={`YouTube video player - ${program.title}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              ></iframe>
            <div className="program-inner">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>
          At [Your Organization Name], we are passionate about empowering athletes and individuals to reach their full mental potential. Our dedicated team of experts, comprised of sports psychologists, mental performance coaches, and wellness professionals, brings years of experience in the field of sports psychology and mental training.
        </p>
        <p>
          Our mission is to provide accessible, evidence-based mental training programs that help our clients enhance their performance, boost their resilience, and cultivate a positive mindset. We believe that mental strength is just as crucial as physical ability, and our goal is to bridge that gap through comprehensive training methods tailored to the unique needs of each individual.
        </p>
        <p>
          We offer a range of programs that focus on different aspects of mental training, including mindfulness, visualization, stress management, and goal setting. Whether you are an elite athlete, a weekend warrior, or someone looking to improve your mental fitness, we have a program designed for you.
        </p>

        <h3>Our Values</h3>
        <ul>
          <li><strong>Integrity:</strong> We prioritize ethical practices and transparency in all our programs.</li>
          <li><strong>Excellence:</strong> We strive for excellence in our training methods and the results we deliver.</li>
          <li><strong>Inclusivity:</strong> We welcome individuals from all backgrounds and skill levels, ensuring our programs are accessible to everyone.</li>
          <li><strong>Empowerment:</strong> We empower our clients with the tools and knowledge to take control of their mental training journey.</li>
        </ul>

        <h3>Meet Our Team</h3>
        <p>Our diverse team is committed to helping you succeed:</p>
        <ul>
          <li><strong>Dr. Jane Smith:</strong> A licensed sports psychologist with over 15 years of experience working with professional athletes. Jane specializes in mindfulness and performance psychology.</li>
          <li><strong>John Doe:</strong> A mental performance coach and former athlete who focuses on visualization techniques and mental resilience. John has a passion for helping others unlock their potential.</li>
          <li><strong>Lisa Johnson:</strong> A wellness expert and certified meditation instructor. Lisa guides our mindfulness programs and emphasizes the importance of mental well-being in athletic performance.</li>
        </ul>

        <p>Join us at [Your Organization Name] and take the first step towards unlocking your mental potential. Together, we can create a positive mindset that enhances your performance and overall well-being.</p>
      </section>

      <section id="testimonials">
        <h2>What Our Clients Say</h2>
        {testimonials.map((testimonial, index) => (
          <blockquote key={index}>
            <p>{testimonial.quote}</p>
            <cite>- {testimonial.author}</cite>
          </blockquote>
        ))}
      </section>

      <footer>
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to learn more about our programs, feel free to reach out!</p>
        <form action="#" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </footer>
    </div>
        </div>
        </>
  );
};

export default Videos;
