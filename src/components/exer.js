import React from 'react';
import './exercise.css';

const exercises = [
  {
    title: 'Breathing Techniques',
    description: 'Practice deep breathing exercises to help calm the mind and reduce stress levels. This exercise will teach you how to breathe deeply and rhythmically to achieve relaxation.',
    videoUrl: 'https://www.youtube.com/embed/lPJAtHWq08k',
  },
  {
    title: 'Progressive Muscle Relaxation',
    description: 'Learn how to systematically tense and relax different muscle groups to alleviate physical tension and stress.',
    videoUrl: 'https://www.youtube.com/embed/ihO02wUzgkc',
  },
  {
    title: 'Guided Imagery',
    description: 'Explore guided imagery, a technique that involves visualizing calming and serene scenes to reduce stress.',
    videoUrl: 'https://www.youtube.com/embed/TWI639oEzmE',
  },
  {
    title: 'Mindfulness Meditation',
    description: 'This exercise introduces mindfulness meditation, a practice of being present and fully engaged in the moment without judgment.',
    videoUrl: 'https://www.youtube.com/embed/6p_yaNFSYao',
  },
  {
    title: 'Yoga for Stress Relief',
    description: 'Engage in a gentle yoga routine designed to help you relax and reduce stress through a series of slow and mindful movements.',
    videoUrl: 'https://www.youtube.com/embed/v7AYKMP6rOE',
  },
  {
    title: 'Body Scan Meditation',
    description: 'Experience a body scan meditation that helps you bring awareness to each part of your body, releasing tension and promoting relaxation.',
    videoUrl: 'https://www.youtube.com/embed/OS_iqfGjL78',
  },
  {
    title: 'Journaling for Stress',
    description: 'Discover the benefits of journaling for stress management. This exercise guides you through the process of reflective writing to help clear your mind.',
    videoUrl: 'https://www.youtube.com/embed/nRz4NJ6ZLSc',
  },
  {
    title: 'Walking Meditation',
    description: 'Learn about walking meditation, a practice that combines the physical benefits of walking with the mental benefits of meditation, helping you stay grounded and reduce stress.',
    videoUrl: 'https://www.youtube.com/embed/uOlIdmTKVRk',
  },
];

const Exercises = () => {
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

    <div className="exercises-container">
      <header>
        <h1>Mental Stress Relief & Management Exercises</h1>
        <p>Explore these exercises to help manage and relieve mental stress, tailored for athletes.</p>
      </header>
      
      <section className="exercises-list">
        {exercises.map((exercise, index) => (
            <div className="exercise" key={index}>
            <iframe
              width=""
              height=""
              src={exercise.videoUrl}
              title={`YouTube video player - ${exercise.title}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              ></iframe>
            <div className="exercise-content">
              <h2>{exercise.title}</h2>
              <p>{exercise.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
        </div>
        </>
  );
};

export default Exercises;
